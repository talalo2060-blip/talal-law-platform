import { initializeApp } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { HttpsError, onCall } from 'firebase-functions/v2/https';
import { defineSecret } from 'firebase-functions/params';
import Anthropic from '@anthropic-ai/sdk';

initializeApp();

const anthropicApiKey = defineSecret('ANTHROPIC_API_KEY');

type CaseCategory = 'labor' | 'realestate' | 'family' | 'commercial';

const CATEGORY_LABELS: Record<CaseCategory, string> = {
  labor: 'قانون عمالي',
  realestate: 'قانون عقاري',
  family: 'أحوال شخصية',
  commercial: 'تجاري وشركات',
};

const SYSTEM_PROMPT = `أنت المساعد القانوني الذكي التابع لـ"مكتب طلال للمحاماة والاستشارات" في المملكة العربية السعودية.

قواعد صارمة يجب اتباعها دائماً:
- أجب باللغة العربية الفصحى فقط، بأسلوب رسمي ومحترم ومطمئن، دون أي لهجة عامية ودون أي رموز تعبيرية (emoji).
- استند إجابتك إلى الأنظمة السعودية ذات الصلة (نظام العمل، نظام الإيجار، نظام الأحوال الشخصية، نظام الشركات، وغيرها)، واذكر اسم النظام ورقم المادة تحديداً في حقل الاستشهاد (citation).
- صنّف السؤال إلى واحدة من الفئات التالية بالضبط: labor (عمالي) أو realestate (عقاري) أو family (أحوال شخصية) أو commercial (تجاري وشركات، وهي الفئة الافتراضية عند عدم الوضوح).
- اجعل الإجابة موجزة ودقيقة (3-5 جمل)، وتجنب الجزم القاطع في المسائل التي تحتاج تقدير قضائي.
- لا تقدّم استشارة قانونية نهائية بديلة عن محامٍ مرخّص؛ إجابتك أولية وتوجيهية فقط.
- استخدم أداة submit_consultation_answer دائماً لإرجاع الإجابة، ولا ترسل أي نص خارجها.`;

interface ConsultationTool {
  category: CaseCategory;
  answer: string;
  citation: string;
}

interface LawyerDoc {
  name: string;
  specialty?: CaseCategory;
  rating?: number;
}

export const aiConsult = onCall(
  { secrets: [anthropicApiKey], region: 'us-central1', cors: true },
  async (request) => {
    const question = String(request.data?.question ?? '').trim();
    if (!question) {
      throw new HttpsError('invalid-argument', 'السؤال مطلوب.');
    }
    if (question.length > 2000) {
      throw new HttpsError('invalid-argument', 'السؤال طويل جداً.');
    }

    const anthropic = new Anthropic({ apiKey: anthropicApiKey.value() });

    let parsed: ConsultationTool;
    try {
      const message = await anthropic.messages.create({
        model: 'claude-sonnet-5',
        max_tokens: 1024,
        system: SYSTEM_PROMPT,
        tools: [
          {
            name: 'submit_consultation_answer',
            description: 'أرجع إجابة الاستشارة القانونية المصنّفة مع مصدرها النظامي.',
            input_schema: {
              type: 'object',
              properties: {
                category: {
                  type: 'string',
                  enum: ['labor', 'realestate', 'family', 'commercial'],
                  description: 'تصنيف نوع القضية',
                },
                answer: { type: 'string', description: 'الإجابة القانونية بالعربية الفصحى' },
                citation: { type: 'string', description: 'اسم النظام والمادة، مثل: نظام العمل — المادة 77' },
              },
              required: ['category', 'answer', 'citation'],
            },
          },
        ],
        tool_choice: { type: 'tool', name: 'submit_consultation_answer' },
        messages: [{ role: 'user', content: question }],
      });

      const toolUse = message.content.find((block) => block.type === 'tool_use');
      if (!toolUse || toolUse.type !== 'tool_use') {
        throw new Error('no tool_use block in response');
      }
      parsed = toolUse.input as ConsultationTool;
    } catch (err) {
      console.error('aiConsult: Claude call failed', err);
      throw new HttpsError('internal', 'تعذّر إنشاء الإجابة حالياً. حاول مرة أخرى بعد قليل.');
    }

    const db = getFirestore();
    let lawyer: { id: string; name: string; specialtyLabel: string; rating: number } | null = null;

    try {
      let snap = await db
        .collection('users')
        .where('role', '==', 'lawyer')
        .where('status', '==', 'active')
        .where('specialty', '==', parsed.category)
        .orderBy('rating', 'desc')
        .limit(1)
        .get();

      if (snap.empty) {
        snap = await db
          .collection('users')
          .where('role', '==', 'lawyer')
          .where('status', '==', 'active')
          .orderBy('rating', 'desc')
          .limit(1)
          .get();
      }

      const doc = snap.docs[0];
      if (doc) {
        const data = doc.data() as LawyerDoc;
        lawyer = {
          id: doc.id,
          name: data.name,
          specialtyLabel: data.specialty ? CATEGORY_LABELS[data.specialty] : CATEGORY_LABELS[parsed.category],
          rating: data.rating ?? 5,
        };
      }
    } catch (err) {
      console.error('aiConsult: lawyer lookup failed', err);
      // Still return the answer even if no lawyer could be matched.
    }

    return { answer: parsed.answer, citation: parsed.citation, lawyer };
  },
);

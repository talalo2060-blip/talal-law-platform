/**
 * One-off demo data seeder — creates Auth users + matching Firestore docs
 * for a handful of lawyers, clients, cases, consultations and one appointment,
 * so the dashboards aren't empty on first run.
 *
 * Usage (against a real project):
 *   GOOGLE_APPLICATION_CREDENTIALS=/path/to/serviceAccount.json node scripts/seed.js
 *
 * Usage (against the local emulator suite):
 *   firebase emulators:exec --project demo-talal "node scripts/seed.js"
 *
 * Demo password for every seeded account: Talal@12345
 */
const admin = require('firebase-admin');

if (!admin.apps.length) {
  admin.initializeApp({ projectId: process.env.GCLOUD_PROJECT || undefined });
}
const auth = admin.auth();
const db = admin.firestore();

const DEMO_PASSWORD = 'Talal@12345';

const LAWYERS = [
  { email: 'sara.alotaibi@talal-law.demo', name: 'أ. سارة العتيبي', specialty: 'commercial', licenseNumber: 'LIC-441209', rating: 4.9, status: 'active' },
  { email: 'khalid.aldosari@talal-law.demo', name: 'أ. خالد الدوسري', specialty: 'realestate', licenseNumber: 'LIC-440877', rating: 4.7, status: 'active' },
  { email: 'abdullah.alharbi@talal-law.demo', name: 'أ. عبدالله الحربي', specialty: 'labor', licenseNumber: 'LIC-440512', rating: 4.8, status: 'active' },
  { email: 'noura.alzahrani@talal-law.demo', name: 'أ. نورة الزهراني', specialty: 'family', licenseNumber: 'LIC-440330', rating: 4.6, status: 'active' },
  { email: 'mona.alshahri@talal-law.demo', name: 'أ. منى الشهري', specialty: 'family', licenseNumber: 'LIC-448120', rating: 5, status: 'pending' },
  { email: 'fahad.alqahtani@talal-law.demo', name: 'أ. فهد القحطاني', specialty: 'labor', licenseNumber: 'LIC-447901', rating: 5, status: 'pending' },
];

const CLIENTS = [
  { email: 'abdulaziz.almutairi@example.demo', name: 'عبدالعزيز المطيري', clientType: 'فرد' },
  { email: 'ofouq.trading@example.demo', name: 'شركة الأفق للتجارة', clientType: 'منشأة' },
  { email: 'namaa.est@example.demo', name: 'مؤسسة نماء التجارية', clientType: 'منشأة' },
  { email: 'hind.alfaisal@example.demo', name: 'هند الفيصل', clientType: 'فرد' },
];

async function upsertUser({ email, name, ...rest }) {
  let user;
  try {
    user = await auth.getUserByEmail(email);
  } catch {
    user = await auth.createUser({ email, password: DEMO_PASSWORD, displayName: name });
  }
  await db.collection('users').doc(user.uid).set(
    { uid: user.uid, email, name, createdAt: Date.now(), ...rest },
    { merge: true },
  );
  return user.uid;
}

async function main() {
  console.log('Seeding lawyers…');
  const lawyerIds = {};
  for (const l of LAWYERS) {
    const uid = await upsertUser({ ...l, role: 'lawyer', casesCount: 0 });
    lawyerIds[l.name] = uid;
  }

  console.log('Seeding clients…');
  const clientIds = {};
  for (const c of CLIENTS) {
    const uid = await upsertUser({ ...c, role: 'client', status: 'active' });
    clientIds[c.name] = uid;
  }

  const sara = lawyerIds['أ. سارة العتيبي'];
  const khalid = lawyerIds['أ. خالد الدوسري'];
  const abdullah = lawyerIds['أ. عبدالله الحربي'];
  const noura = lawyerIds['أ. نورة الزهراني'];

  const abdulaziz = clientIds['عبدالعزيز المطيري'];
  const ofouq = clientIds['شركة الأفق للتجارة'];
  const namaa = clientIds['مؤسسة نماء التجارية'];
  const hind = clientIds['هند الفيصل'];

  console.log('Assigning lawyer + creating cases…');
  await db.collection('users').doc(abdulaziz).set({ assignedLawyerId: sara }, { merge: true });
  await db.collection('users').doc(ofouq).set({ assignedLawyerId: sara }, { merge: true });
  await db.collection('users').doc(namaa).set({ assignedLawyerId: abdullah }, { merge: true });
  await db.collection('users').doc(hind).set({ assignedLawyerId: noura }, { merge: true });

  const now = Date.now();
  const day = 86_400_000;
  const cases = [
    { clientId: abdulaziz, clientName: 'عبدالعزيز المطيري', lawyerId: khalid, lawyerName: 'أ. خالد الدوسري', title: 'نزاع عقد توريد', type: 'realestate', status: 'قيد النظر', progress: 60, nextEvent: 'جلسة ٤ يوليو', feeSar: 18000, createdAt: now - 40 * day },
    { clientId: ofouq, clientName: 'شركة الأفق للتجارة', lawyerId: sara, lawyerName: 'أ. سارة العتيبي', title: 'مطالبة مالية', type: 'commercial', status: 'نشطة', progress: 35, nextEvent: 'مذكرة رد', feeSar: 32000, createdAt: now - 20 * day },
    { clientId: namaa, clientName: 'مؤسسة نماء التجارية', lawyerId: abdullah, lawyerName: 'أ. عبدالله الحربي', title: 'توثيق عقد شراكة', type: 'labor', status: 'مكتملة', progress: 100, nextEvent: '—', feeSar: 9500, createdAt: now - 65 * day },
    { clientId: hind, clientName: 'هند الفيصل', lawyerId: noura, lawyerName: 'أ. نورة الزهراني', title: 'قضية نفقة وحضانة', type: 'family', status: 'قيد النظر', progress: 45, nextEvent: 'جلسة ١٢ يوليو', feeSar: 7000, createdAt: now - 10 * day },
  ];
  for (const c of cases) {
    await db.collection('cases').add(c);
  }

  console.log('Seeding consultations…');
  const consultations = [
    { clientId: abdulaziz, clientName: 'عبدالعزيز المطيري', question: 'ما شروط فسخ عقد الإيجار التجاري قبل انتهاء مدته؟', answer: 'ينظّم عقد الإيجار العلاقة بين المؤجر والمستأجر، ولا يجوز إخلاء العقار قبل انتهاء المدة إلا في الحالات التي يحددها النظام أو باتفاق الطرفين.', citation: 'نظام الإيجار (إيجار) — المادة ١٢', category: 'realestate', suggestedLawyerId: khalid, suggestedLawyerName: 'أ. خالد الدوسري', status: 'مكتملة', needsReply: false, priority: 'عادي', createdAt: now - 3 * 3_600_000 },
    { clientId: ofouq, clientName: 'شركة الأفق للتجارة', question: 'استفسار عن حقوق الشريك في شركة تضامن', answer: 'تُحدَّد حقوق الشركاء والتزاماتهم وفق عقد التأسيس ونظام الشركات.', citation: 'نظام الشركات — المادة ١٢', category: 'commercial', suggestedLawyerId: sara, suggestedLawyerName: 'أ. سارة العتيبي', status: 'قيد المعالجة', needsReply: true, priority: 'عاجل', createdAt: now - 20 * 60_000 },
    { clientId: hind, clientName: 'هند الفيصل', question: 'مراجعة بنود عقد عمل قبل التوقيع', answer: 'بحسب نظام العمل السعودي، يجب أن يتضمن العقد الأجر ومدة العمل وطبيعة العمل.', citation: 'نظام العمل — المادة ٥١', category: 'labor', suggestedLawyerId: abdullah, suggestedLawyerName: 'أ. عبدالله الحربي', status: 'قيد المعالجة', needsReply: true, priority: 'عادي', createdAt: now - 3_600_000 },
    { clientId: namaa, clientName: 'مؤسسة نماء التجارية', question: 'إجراءات إخلاء عقار مؤجّر', answer: 'يُشترط توثيق العقد في منصة إيجار لضمان حقوق الطرفين وإمكانية التنفيذ.', citation: 'نظام الإيجار (إيجار) — المادة ١٢', category: 'realestate', suggestedLawyerId: khalid, suggestedLawyerName: 'أ. خالد الدوسري', status: 'قيد المعالجة', needsReply: true, priority: 'متوسط', createdAt: now - 3 * 3_600_000 },
  ];
  for (const c of consultations) {
    await db.collection('consultations').add(c);
  }

  console.log('Seeding appointment…');
  const caseSnap = await db.collection('cases').where('clientId', '==', abdulaziz).limit(1).get();
  await db.collection('appointments').add({
    clientId: abdulaziz,
    caseId: caseSnap.docs[0]?.id ?? '',
    title: `جلسة قضية ${caseSnap.docs[0]?.id?.slice(0, 8).toUpperCase() ?? ''}`,
    dateLabel: 'الخميس ٤ يوليو ٢٠٢٦ · ١٠:٠٠ ص',
    location: 'المحكمة التجارية — الرياض',
  });

  console.log('Done. Demo accounts use password:', DEMO_PASSWORD);
  console.log('Try logging in as a client with:', CLIENTS[0].email);
  console.log('Try logging in as staff with:', LAWYERS[0].email);
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

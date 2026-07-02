export interface AiConsultResponse {
  answer: string;
  citation: string;
  lawyer: { id: string; name: string; specialtyLabel: string; rating: number } | null;
}

export async function callConsult(question: string): Promise<AiConsultResponse> {
  const res = await fetch('/api/consult', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ question }),
  });
  if (!res.ok) {
    const body = await res.json().catch(() => null);
    throw new Error(body?.error || 'تعذّر الحصول على إجابة الآن.');
  }
  return res.json();
}

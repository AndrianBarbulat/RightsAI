import Accordion from '../ui/Accordion';

const FAQ_ITEMS = [
  {
    question: 'Is this legal advice?',
    answer: 'No. RightsAI provides general legal information only. It does not constitute legal advice. You should always consult a qualified solicitor for advice on your specific situation. Every response includes a clear disclaimer reminding you of this.',
  },
  {
    question: 'Is RightsAI free to use?',
    answer: 'Yes. RightsAI is completely free to use and will remain free. There are no subscription plans, premium tiers, or charges of any kind.',
  },
  {
    question: 'What areas of Irish law does it cover?',
    answer: 'RightsAI covers residential tenancies, employment law, consumer rights, family law, road traffic law, criminal law, constitutional law, immigration, small claims, data protection and GDPR, property law, wills and probate, personal injury, debt and insolvency, social welfare, education law, planning and development, equality and human rights, and business and company law.',
  },
  {
    question: 'Does it cover Northern Ireland?',
    answer: 'No. RightsAI covers the law of the Republic of Ireland only. It does not cover Northern Ireland, the United Kingdom, or any other jurisdiction. If your question is about a different legal system, RightsAI will politely let you know it cannot help.',
  },
  {
    question: 'How current is the legal information?',
    answer: 'RightsAI uses Gemini 3.1 Flash Lite, a large language model trained on data up to early 2025. While it references real Irish legislation and statutory instruments, you should verify critical legal information against the Irish Statute Book at irishstatutebook.ie. Legislation can change, and the model may not reflect the most recent amendments.',
  },
  {
    question: 'Can I rely on this for a court case?',
    answer: 'No. RightsAI is not a substitute for professional legal representation. If you are involved in litigation, you should seek advice from a qualified solicitor or barrister. Courts require precise legal arguments, and general information is not sufficient for court proceedings.',
  },
];

export default function FAQ() {
  return (
    <section className="faq">
      <h2 className="faq__title">Frequently Asked Questions</h2>
      <Accordion items={FAQ_ITEMS} />
    </section>
  );
}
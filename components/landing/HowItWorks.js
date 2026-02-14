import Accordion from '../ui/Accordion';
const ITEMS = [
  { question: 'Is this legal advice?', answer: 'No. RightsAI provides general legal information only. It does not constitute legal advice. You should always consult a qualified solicitor for advice on your specific situation.' },
  { question: 'Is RightsAI free to use?', answer: 'Yes. RightsAI is completely free to use and will remain free. There are no subscription plans, premium tiers, or charges of any kind.' },
  { question: 'What areas of Irish law does it cover?', answer: 'RightsAI covers residential tenancies, employment law, consumer rights, family law, road traffic law, criminal law, constitutional law, immigration, small claims, data protection and GDPR, property law, wills and probate, personal injury, debt and insolvency, social welfare, education law, planning and development, equality and human rights, and business and company law.' },
  { question: 'Does it cover Northern Ireland?', answer: 'No. RightsAI covers the law of the Republic of Ireland only. It does not cover Northern Ireland, the United Kingdom, or any other jurisdiction.' },
  { question: 'How current is the legal information?', answer: 'RightsAI uses Gemini 3.1 Flash Lite. While it references real Irish legislation, you should verify critical legal information against the Irish Statute Book at irishstatutebook.ie.' },
  { question: 'Can I rely on this for a court case?', answer: 'No. RightsAI is not a substitute for professional legal representation. If you are involved in litigation, seek advice from a qualified solicitor or barrister.' },
];
export default function FAQ() {
  return <section className="faq"><h2 className="faq__title">Frequently Asked Questions</h2><Accordion items={ITEMS} /></section>;
}
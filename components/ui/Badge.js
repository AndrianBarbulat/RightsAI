import { useState } from 'react';
import Badge from '../ui/Badge';
const EXAMPLES = [
  { q: 'Can my landlord keep my deposit?', a: 'Under the Residential Tenancies Act 2004, a landlord may only retain a deposit for unpaid rent, damage beyond normal wear and tear, or unpaid utility bills.', topic: 'Residential Tenancies', act: 'Residential Tenancies Act 2004' },
  { q: 'What notice must my employer give to dismiss me?', a: 'Under the Minimum Notice and Terms of Employment Acts 1973-2001, minimum notice ranges from 1 week to 8 weeks depending on length of service.', topic: 'Employment Law', act: 'Minimum Notice and Terms of Employment Act 1973' },
  { q: 'What are my rights if a product is faulty?', a: 'Under the Consumer Rights Act 2022, you have the right to a repair, replacement, refund, or price reduction for faulty goods within 30 days.', topic: 'Consumer Rights', act: 'Consumer Rights Act 2022' },
  { q: 'Does GDPR apply to my small business?', a: 'Yes. The GDPR applies to all businesses processing personal data in Ireland, regardless of size. Under the Data Protection Act 2018, you must have a lawful basis for processing.', topic: 'Data Protection and GDPR', act: 'Data Protection Act 2018' },
];
export default function ExampleQA() {
  const [openIdx, setOpenIdx] = useState(null);
  return (
    <section className="example-qa">
      <h2 className="example-qa__title">Example Questions</h2>
      {EXAMPLES.map((item, idx) => (
        <div className="example-qa__item" key={idx}>
          <button className="example-qa__question" onClick={() => setOpenIdx(openIdx === idx ? null : idx)} aria-expanded={openIdx === idx}>
            <span>{item.q}</span>
            <span style={{ transform: openIdx === idx ? 'rotate(180deg)' : 'none', transition: 'transform 200ms ease' }}>{'\u25BC'}</span>
          </button>
          {openIdx === idx && (
            <div className="example-qa__answer" role="region">
              <div className="example-qa__badges"><Badge variant="gold-muted">{item.topic}</Badge><Badge variant="outline">{item.act}</Badge></div>
              <p>{item.a}</p>
            </div>
          )}
        </div>
      ))}
    </section>
  );
}
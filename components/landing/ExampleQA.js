import Accordion from '../ui/Accordion';

const EXAMPLE_ITEMS = [
  {
    badges: ['Residential Tenancies', 'Residential Tenancies Act 2004'],
    question: 'Can my landlord keep my deposit?',
    answer: 'Under the Residential Tenancies Act 2004, your landlord can only withhold your deposit for specific reasons: unpaid rent, damage beyond normal wear and tear, or unpaid utility bills. They must provide you with a written list of any deductions. If you disagree with the deductions, you can take your case to the Residential Tenancies Board (RTB).',
  },
  {
    badges: ['Employment Law', 'Unfair Dismissals Act 1977'],
    question: 'What are the grounds for unfair dismissal in Ireland?',
    answer: 'Under the Unfair Dismissals Act 1977, dismissals are presumed unfair unless the employer can show substantial grounds: capability or competence, conduct, redundancy, or legal restriction. Certain dismissals are automatically unfair — for example, those related to pregnancy, trade union membership, or whistleblowing. If you believe you have been unfairly dismissed, you can bring a claim to the Workplace Relations Commission (WRC).',
  },
  {
    badges: ['Consumer Rights', 'Consumer Rights Act 2022'],
    question: 'What are my rights if a product I bought is faulty?',
    answer: 'Under the Consumer Rights Act 2022, you have a right to a repair, replacement, refund, or price reduction if a product is faulty, not as described, or not fit for purpose. You have 30 days for a full refund. After 30 days and up to 12 months, you must give the seller one chance to repair or replace the item before seeking a refund. After 12 months, you may still have rights for up to 6 years depending on the product.',
  },
  {
    badges: ['Small Claims', 'District Court Rules'],
    question: 'How do I make a small claims court claim in Ireland?',
    answer: 'The Small Claims Procedure handles consumer and business claims up to €2,000. You can apply online through the Courts Service website (courts.ie), at your local District Court office, or by post. You will need details of your claim and the respondent. The fee is €25. The process is designed to be accessible without a solicitor. If the respondent disputes the claim, it may be transferred to the regular District Court.',
  },
];

export default function ExampleQA() {
  return (
    <section className="example-qa">
      <h2 className="example-qa__title">Example Questions</h2>
      {EXAMPLE_ITEMS.map((item, i) => (
        <Accordion
          key={i}
          items={[{
            question: (
              <>
                <div className="example-qa__badges">
                  {item.badges.map(b => (
                    <span key={b} className="badge badge--gold-muted">{b}</span>
                  ))}
                </div>
                {item.question}
              </>
            ),
            answer: item.answer,
          }]}
        />
      ))}
    </section>
  );
}

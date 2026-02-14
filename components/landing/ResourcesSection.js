const R = [
  { name: 'Citizens Information', url: 'https://www.citizensinformation.ie', desc: 'Plain English guides on public services and your rights in Ireland.' },
  { name: 'FLAC', url: 'https://www.flac.ie', desc: 'Free legal advice centres providing independent legal information and assistance.' },
  { name: 'Courts Service', url: 'https://www.courts.ie', desc: 'Information on court procedures, forms, fees, and finding a courthouse.' },
];
export default function ResourcesSection() {
  return (
    <section className="resources">
      <h2 className="resources__title">Recommended Resources</h2>
      <div className="resources__grid">
        {R.map(r => <div className="resources__card" key={r.name}><h3>{r.name}</h3><p>{r.desc}</p><a href={r.url} target="_blank" rel="noopener noreferrer">Visit {r.name} {'\u2192'}</a></div>)}
      </div>
    </section>
  );
}
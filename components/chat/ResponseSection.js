export default function ResponseSection({ icon, title, children }) {
  return (
    <div className="response-section">
      <div className="response-section__header">
        <span className="response-section__header-icon">{icon}</span>
        <span>{title}</span>
      </div>
      <div>{children}</div>
    </div>
  );
}
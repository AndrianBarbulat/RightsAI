export default function Badge({ variant = 'gold-muted', children }) {
  const className = 'badge badge--' + variant;
  return <span className={className}>{children}</span>;
}
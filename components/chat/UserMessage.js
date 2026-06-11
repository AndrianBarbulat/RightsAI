export default function UserMessage({ text, time }) {
  return (
    <div className="user-message">
      <div>{text}</div>
      {time && <div className="user-message__time">{time}</div>}
    </div>
  );
}



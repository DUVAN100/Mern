function Message({ user, message }) {
    return (
      <div className="message">
        <strong>{user}:</strong> <span>{message}</span>
      </div>
    );
  }
  
  export default Message;
  
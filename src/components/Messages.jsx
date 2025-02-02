import Message from "./Message";

export default function Messages({ messages }) {
  return (
    <>
      {messages?.map((message) => (
        <Message key={message.id} {...message} />
      ))}
    </>
    
  );
}

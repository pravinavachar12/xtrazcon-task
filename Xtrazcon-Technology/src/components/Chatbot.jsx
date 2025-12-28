import { useState } from "react";

function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "Hi 👋 Welcome to XtrazCon! How can I help you today?",
    },
  ]);

  const getBotReply = (msg) => {
    const text = msg.toLowerCase();

    if (text.includes("service"))
      return "We offer IT services, web development, mobile apps, digital marketing, and startup solutions.";

    if (text.includes("contact"))
      return "You can reach us via the Contact page or email info@xtrazcon.com.";

    if (text.includes("location") || text.includes("address"))
      return "Our office is located in Pune, Maharashtra, India.";

    if (text.includes("hello") || text.includes("hi"))
      return "Hello 👋 How can I assist you?";

    return "Thanks for your message! Please contact us for more detailed assistance.";
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = { from: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);

    setTimeout(() => {
      const botReply = {
        from: "bot",
        text: getBotReply(input),
      };
      setMessages((prev) => [...prev, botReply]);
    }, 500);

    setInput("");
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <button className="chat-btn" onClick={() => setOpen(!open)}>
        💬
      </button>

      {/* Chat Window */}
      {open && (
        <div className="chatbox">
          <div className="chat-header">XtrazCon Chat</div>

          <div className="chat-body">
            {messages.map((msg, index) => (
              <div key={index} className={`chat-msg ${msg.from}`}>
                {msg.text}
              </div>
            ))}
          </div>

          <div className="chat-footer">
            <input
              type="text"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Chatbot;

import { Rightbar, Sidebar } from "@/components/custom";
import React, { useState, useRef, useEffect } from "react";

function Aiassistant() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "ai",
      text: "Hello! I am your AI Assistant. How can I help you today?",
    },
  ]);
  const [newMessage, setNewMessage] = useState("");
  const chatEndRef = useRef(null);

  // Scroll to the latest message
  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Handle message send
  const handleSendMessage = () => {
    if (newMessage.trim() === "") return;

    // Add user's message
    const userMessage = {
      id: messages.length + 1,
      sender: "user",
      text: newMessage,
    };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setNewMessage("");

    // Simulate AI response
    setTimeout(() => {
      const aiMessage = {
        id: messages.length + 2,
        sender: "ai",
        text: `You said: "${userMessage.text}". How else can I assist you?`,
      };
      setMessages((prevMessages) => [...prevMessages, aiMessage]);
    }, 1000);
  };
  return (
    <div className="flex h-screen bg-gray-50 ">
      <Sidebar />
      <main className="flex-1 overflow-y-auto">
        <div className="w-full mx-auto space-y-6">
          <div className="flex flex-col h-screen bg-gray-100">
            {/* Chat Header */}
            <div className="bg-blue-600 text-white py-4 px-6 text-lg font-bold">
              AI Assistant Chat
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-md px-4 py-2 rounded-lg ${
                      message.sender === "user"
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200 text-gray-800"
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
              <div ref={chatEndRef} />
            </div>

            {/* Input Box */}
            <div className="bg-white border-t border-gray-300 p-4 flex items-center">
              <input
                type="text"
                placeholder="Type your message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={handleSendMessage}
                className="ml-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Aiassistant;

import { Rightbar, Sidebar } from "@/components/custom";
import React, { useState } from "react";

function Chats() {
  const [messages, setMessages] = useState([
    { id: 1, sender: "bot", text: "Hi there! How can I help you?" },
    { id: 2, sender: "user", text: "Hello! I have a question." },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return;

    // Add the new message to the chat
    setMessages((prevMessages) => [
      ...prevMessages,
      { id: prevMessages.length + 1, sender: "user", text: newMessage },
    ]);
    setNewMessage("");
  };
  return (
    <div>
      <div className="flex bg-gray-50 ">
        <Sidebar />
        <main className="flex-1 overflow-y-auto">
          <div className="w-full space-y-6">
            <div className="flex flex-col h-screen bg-gray-100">
              {/* Chat Header */}
              <div className="bg-blue-500 text-white py-4 px-6 text-lg font-bold">
                Chat with Us
              </div>

              {/* Messages Area */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${
                      message.sender === "user"
                        ? "justify-end"
                        : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-xs px-4 py-2 rounded-lg ${
                        message.sender === "user"
                          ? "bg-blue-500 text-white"
                          : "bg-gray-200 text-gray-800"
                      }`}
                    >
                      {message.text}
                    </div>
                  </div>
                ))}
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
    </div>
  );
}

export default Chats;

import { Rightbar, Sidebar } from "@/components/custom";
import React, { useState, useRef, useEffect } from "react";
import { Send, Bot, User } from "lucide-react";
import { Spinner } from "@/components/custom";
import {
  academicChatBoat,
  academicPreviouschat,
} from "@/apiService.js/acadamic.service";

function Aiassistant() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! How can I assist you today?",
      sender: "assistant",
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [loader, setLoader] = useState(false);
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleSendMessage = async (e) => {
    e.preventDefault();
    setLoader(true);
    if (!inputMessage.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      text: inputMessage,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages([...messages, newMessage]);
    const response = await academicChatBoat({
      userMessage: inputMessage,
    });
    const assistantResponse = {
      id: messages.length + 2,
      text: response?.assistantResponse,
      sender: "assistant",
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, assistantResponse]);

    setInputMessage("");
    setLoader(false);
  };
  function transformChatData(data) {
    const transformedData = [];
    let idCounter = 2;
    data.forEach((chat) => {
      transformedData.push({
        id: idCounter++,
        text: chat.userMessage,
        sender: "user",
        timestamp: new Date(chat.timestamp),
      });
      transformedData.push({
        id: idCounter++,
        text: chat.assistantResponse,
        sender: "assistant",
        timestamp: new Date(chat.timestamp),
      });
    });
    setMessages(transformedData);
  }
  useEffect(() => {
    scrollToBottom();
    const fetchUserPreviousMessage = async () => {
      const response = await academicPreviouschat();
      transformChatData(response?.data);
      setProfileImage(response?.user.profileImg);
    };
    fetchUserPreviousMessage();
  }, [inputMessage]);
  return (
    <div className="flex h-screen bg-gray-50 ">
      <Sidebar />
      <main className="flex-1 overflow-y-auto">
        <div className="min-h-screen  bg-black-100  bg-gradient-to-b from-blue-50 to-white">
          <div className="mx-auto  h-screen flex flex-col">
            <div className="bg-white p-4 rounded-t-lg shadow-xl border">
              <h1 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                <Bot className="w-6 h-6 text-blue-500" />
                Chat Assistant
              </h1>
            </div>
            <div className="flex-1 bg-white shadow-xl scroll-bar border overflow-y-auto p-4 space-y-4">
              {messages?.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`flex items-start gap-2 max-w-[80%] ${
                      message.sender === "user"
                        ? "flex-row-reverse"
                        : "flex-row"
                    }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        message.sender === "user"
                          ? "bg-blue-500"
                          : "bg-gray-200"
                      }`}
                    >
                      {message.sender === "user" ? (
                        <User className="w-5 h-5 text-white" />
                      ) : (
                        <Bot className="w-5 h-5 text-gray-600" />
                      )}
                    </div>
                    <div
                      className={`rounded-2xl px-4 py-2 ${
                        message.sender === "user"
                          ? "bg-blue-500 text-white"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      <p>{message.text}</p>
                      <p className="text-xs opacity-70 mt-1">
                        {new Date(message.timestamp).toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef}></div>
            </div>
            <form
              onSubmit={handleSendMessage}
              className="bg-white p-4 shadow-xl border rounded-b-lg "
            >
              <div className="flex gap-2 ">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 rounded-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-600 transition-colors"
                  disabled={!inputMessage.trim()}
                >
                  {loader ? <Spinner /> : <Send className="w-5 h-5" />}
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Aiassistant;

import { getGroupChats } from "@/apiService.js/acadamic.service";
import { Rightbar, Sidebar } from "@/components/custom";
import { getLocalStorageItem } from "@/utils/localStorage";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import io from "socket.io-client";

const socket = io("http://localhost:8000", {
  reconnection: false,
});

function Chats() {
  const { id } = useParams();
  const { userId, profileImg, fullname } = getLocalStorageItem("user");
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const transformedMessages = (data) => {
    return data.map((item) => ({
      id: item._id,
      sender: item.sender._id === userId ? "user" : "bot",
      text: item.message,
      time: new Date(item.timestamp).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      profileImg: item.sender.profileImg || "defaultProfileImg.png",
      fullname: item.sender.fullname || "Anonymous",
    }));
  };

  useEffect(() => {
    if (socket?.connected) {
      socket.emit("join", id);
      socket.on("receiveMessage", (newMessage) => {
        const formattedMessage = {
          id: newMessage.id,
          sender: newMessage.sender === userId ? "user" : "bot",
          text: newMessage.message,
          profileImg: newMessage.profileImg || "defaultProfileImg.png",
          time: new Date(newMessage.timestamp).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
          fullname: newMessage.fullname || "Anonymous",
        };
        setMessages((prevMessages) => [...prevMessages, formattedMessage]);
      });
    }

    return () => {
      socket.off("receiveMessage");
    };
  }, [socket, id, userId]);
  const handleSendMessage = () => {
    if (newMessage.trim() === "") return;

    const messageData = {
      sender: userId,
      message: newMessage,
      classroomId: id,
      profileImg,
      fullname,
    };
    socket.emit("sendMessage", messageData);

    setMessages((prevMessages) => [
      ...prevMessages,
      {
        sender: "user",
        text: newMessage,
        profileImg,
        id: prevMessages.length + 1,
      },
    ]);

    setNewMessage("");
  };

  useEffect(() => {
    const getAllPreviousChats = async () => {
      const response = await getGroupChats(id);
      setMessages(transformedMessages(response.data));
    };

    getAllPreviousChats();
  }, [id]);

  return (
    <div>
      <div className="flex bg-gray-50">
        <Sidebar />
        <main className="flex-1 overflow-y-auto">
          <div className="w-full space-y-6">
            <div className="flex flex-col h-screen bg-gray-100">
              <div className="bg-blue-500 text-white py-4 px-6 text-lg font-bold">
                Chat with Us
              </div>
              <div className="flex-1 scroll-bar overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${
                      message.sender === "user"
                        ? "justify-end"
                        : "justify-start"
                    }`}
                  >
                    {message.sender !== "user" && (
                      <div className="mr-2">
                        <img
                          src={message.profileImg}
                          alt="Profile"
                          className="w-8 h-8 rounded-full"
                        />
                      </div>
                    )}
                    <div
                      className={`max-w-xs px-4 py-2 rounded-lg ${
                        message.sender === "user"
                          ? "bg-blue-500 text-white"
                          : "bg-gray-200 text-gray-800"
                      }`}
                    >
                      {message.sender !== "user" && (
                        <div className="text-sm font-semibold mb-1">
                          {message.fullname}
                        </div>
                      )}
                      {message.text}
                      <div className="text-xs text-gray-500 mt-1">
                        {message.time}
                      </div>
                    </div>
                    {message.sender === "user" && (
                      <div className="ml-2">
                        <img
                          src={message.profileImg}
                          alt="Profile"
                          className="w-8 h-8 rounded-full"
                        />
                      </div>
                    )}
                    
                  </div>
                ))}
              </div>

              <div className="bg-white border-t border-gray-300 p-4 flex items-center">
                <input
                  type="text"
                  placeholder="Type your message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && newMessage.trim() !== "") {
                      handleSendMessage();
                    }
                  }}
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

const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const GroupChat = require("./models/academicAssistance/groupChat.model");
const cors = require("cors");

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  socket.on("join", (classroomId) => {
    socket.join(classroomId);
    console.log(`User joined classroom: ${classroomId}`);
  });

  socket.on("sendMessage", async (data) => {
    const { classroomId, message, sender, fullname, profileImg } = data;
    const newChat = new GroupChat({
      classroom: classroomId,
      sender,
      message,
      timestamp: new Date(),
    });
    await newChat.save();

    io.to(classroomId).emit("receiveMessage", {
      sender,
      message,
      fullname,
      profileImg,
      timestamp: new Date(),
    });
  });
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

module.exports = { server, app };

const { Server } = require("socket.io");
const crypto = require("crypto");

const io = new Server(8080, {
  cors: { origin: "*" }
});

// userId → notifications
const notifications = new Map();

io.on("connection", (socket) => {
  console.log("Connected:", socket.id);

  // 1️⃣ Auth / identify user
  socket.on("auth", ({ userId }) => {
    socket.userId = userId;

    // join personal room
    socket.join(userId);

    // send existing notifications
    const existing = notifications.get(userId) || [];
    if (existing.length) {
      socket.emit("notification:bulk", existing);
    }
  });

  // 2️⃣ Like event
  socket.on("like", ({ targetUserId, fromUser }) => {
    const notification = {
      id: crypto.randomUUID(),
      type: "LIKE",
      message: `${fromUser} liked your post`,
      read: false,
      createdAt: Date.now()
    };

    const list = notifications.get(targetUserId) || [];
    list.unshift(notification);
    notifications.set(targetUserId, list);

    // push to user if online
    io.to(targetUserId).emit("notification:new", notification);
  });

  // 3️⃣ Mark as read
  socket.on("read_notification", () => {
    const list = notifications.get(socket.userId) || [];
    list.forEach(n => (n.read = true));
  });

  socket.on("disconnect", () => {
    console.log("Disconnected:", socket.id);
  });
});

console.log("Socket.IO server running on http://localhost:8080");
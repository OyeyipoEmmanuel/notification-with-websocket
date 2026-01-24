// const socketUrl = "ws://localhost:8080";
// let socket: WebSocket | null = null;
// let reconnectTimeout: any = null;
// let reconnectAttempts = 0;
// const MAX_RECONNECT_ATTEMPTS = 5;

import { io } from "socket.io-client";

// export const connectNotificationSocket = (
//   userId: string,
//   onMessage: (data: any) => void
// ) => {
//   // Clear any existing reconnection attempts
//   if (reconnectTimeout) {
//     clearTimeout(reconnectTimeout);
//     reconnectTimeout = null;
//   }

//   socket = new WebSocket(socketUrl);

//   socket.onopen = () => {
//     console.log("✅ WebSocket connected");
//     reconnectAttempts = 0; // Reset on successful connection
    
//     socket?.send(
//       JSON.stringify({
//         type: "auth",
//         userId,
//       })
//     );
//   };

//   socket.onmessage = (event) => {
//     const data = JSON.parse(event.data);
//     onMessage(data);
//   };

//   socket.onerror = (error) => {
//     console.error("❌ WebSocket error:", error);
//     console.error("Make sure your WebSocket server is running on ws://localhost:8080");
//   };

//   socket.onclose = (event) => {
//     console.log("🔌 WebSocket closed:", event.code, event.reason);
    
//     // Attempt to reconnect
//     if (reconnectAttempts < MAX_RECONNECT_ATTEMPTS) {
//       reconnectAttempts++;
//       const delay = Math.min(1000 * reconnectAttempts, 5000); // Max 5s delay
//       console.log(`🔄 Reconnecting in ${delay}ms... (Attempt ${reconnectAttempts}/${MAX_RECONNECT_ATTEMPTS})`);
      
//       reconnectTimeout = setTimeout(() => {
//         connectNotificationSocket(userId, onMessage);
//       }, delay);
//     } else {
//       console.error("❌ Max reconnection attempts reached. Please refresh the page.");
//     }
//   };
// };

// export const disconnectNotificationSocket = () => {
//   if (reconnectTimeout) {
//     clearTimeout(reconnectTimeout);
//     reconnectTimeout = null;
//   }
//   reconnectAttempts = MAX_RECONNECT_ATTEMPTS; // Prevent reconnection
//   socket?.close();
//   socket = null;
// };

// export const sendLikeNotification = (
//   targetUserId: string,
//   fromUser: string
// ) => {
//   if (!socket || socket.readyState !== WebSocket.OPEN) {
//     console.warn("⚠️ Socket not connected. Like notification queued/dropped.");
//     return;
//   }

//   socket.send(
//     JSON.stringify({
//       type: "like",
//       targetUserId,
//       fromUser,
//     })
//   );
// };




export const socket = io("http://localhost:8080", {
  autoConnect: true,
})

// socket.on("connect", ()=>{
  // socket.emit("auth", {userId: "user1"})
//   console.log(socket.id)
// })

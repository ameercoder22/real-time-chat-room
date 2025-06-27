const express = require('express');
const app = express();
const http = require('http').createServer(app);
const { Server } = require('socket.io');
const io = new Server(http);

// Serve static files
app.use(express.static('public'));

io.on('connection', (socket) => {
  console.log('✅ A user connected');

  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });

  socket.on('disconnect', () => {
    console.log('❌ A user disconnected');
  });
});

http.listen(3000, () => {
  console.log('🚀 Server running at http://localhost:3000');
});

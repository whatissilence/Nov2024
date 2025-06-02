import { createServer } from 'node:http';
import express from 'express';
import cors from 'cors';
import { Server } from 'socket.io';

const PORT = 3001;

const app = express();
app.use(cors());
const server = createServer(app);

const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
});

io.on('connection', (socket) => {
  console.log('Client connected');

  socket.on('message', (msg) => {
    console.log('Client said: ', msg);

    setTimeout(() => {
      socket.emit('reply', `You said: ${msg}`)
    }, 3000)

  })

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  })
})


server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
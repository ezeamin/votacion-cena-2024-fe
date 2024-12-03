import { io } from 'socket.io-client';
import type { Socket } from 'socket.io-client';
import { create } from 'zustand';

interface SocketStore {
  socket: Socket;
  setSocket: (socket: Socket) => void;
  emitSocket: (event: string, data: unknown) => void;
  onSocket: (event: string, callback: (data: unknown) => void) => void;
}

const token = localStorage.getItem('token') || window.crypto.randomUUID();
localStorage.setItem('token', token);

const SOCKET_URL = import.meta.env.VITE_SOCKET_URL;
const socket = io(SOCKET_URL, {
  auth: {
    token,
  },
});

export const useSocket = create<SocketStore>((set) => ({
  socket,
  setSocket: (_socket) => set({ socket: _socket }),
  emitSocket: (event, data) => socket.emit(event, data),
  onSocket: (event, callback) => socket.on(event, callback),
}));

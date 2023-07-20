import { Socket, io } from 'socket.io-client';
const NODE_ENV = import.meta.env.RENDERER_VITE_NODE_ENV
// "undefined" means the URL will be computed from the `window.location` object
let socket: Socket | undefined;

if (NODE_ENV === "development") {
    socket = io('http://localhost:5000')
}
else {
    socket = io()
}

export { socket }
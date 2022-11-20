import {io} from "socket.io-client";


test('socket connection', () => {
    const newSocket = io('http://localhost:4000/');
    newSocket.on('ticker', (data) => {
        expect(data).toBe(Array);
    });
});

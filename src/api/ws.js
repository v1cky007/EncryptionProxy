let socket;

export function connectWS(onMessage, onStatus) {
  socket = new WebSocket("ws://127.0.0.1:8001/ws");

  socket.onopen = () => {
    console.log("WS CONNECTED");
    onStatus(true);
  };

  socket.onclose = () => {
    console.log("WS DISCONNECTED");
    onStatus(false);
  };

  socket.onerror = () => {
    onStatus(false);
  };

  socket.onmessage = (event) => {
    const data = JSON.parse(event.data);
    onMessage(data);
  };
}

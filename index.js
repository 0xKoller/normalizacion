const express = require("express");
let serverRoutes = require("./routes");
const servidor = require("socket.io");

const app = express();
const PORT = 8001;
serverRoutes(app);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const server = app.listen(PORT, () => {
  console.log(`Server on ${PORT}`);
});
const io = servidor(server);

io.on("connection", (socket) => {
  socket.broadcast.emit("notification");
  // Manda los mensajes
  socket.emit("log", messagelog);

  socket.on("keyboard", (data) => {
    messagelog.push({ client: data.user, message: data.message });
    io.emit("log", messagelog);
  });
});

app.use(express.static(__dirname + "/public"));

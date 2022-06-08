const socket = io();
const input = document.getElementById("mensaje");
let chat = document.getElementById("log");
let fname = document.getElementById("fname");
let lnmae = document.getElementById("lnmae");
let age = document.getElementById("age");
let user;

input.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    //   No se porque no me funciona esta validacion
    // if (fname.value !== "" && lnmae.value !== "" && age.value !== "") {
    if (input.value.trim().length > 0) {
      socket.emit("keyboard", { user, message: input.value });
      input.value = "";
    }
    // } else {
    //   alert("Ingrese todos los datos por favor");
    // }
  }
});

socket.on("log", (data) => {
  let messages = "";
  data.forEach((message) => {
    console.log(message);
    messages = messages + `${message.client}: ${message.message} </br>`;
  });
  chat.innerHTML = messages;
});

socket.on("notification", (data) => {
  console.log("Alguien se conecto");
});

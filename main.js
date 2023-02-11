const form = document.querySelector("#message-form");
const input = document.querySelector("#message-input");
const messageBoard = document.querySelector("#message-board");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const message = input.value;
  input.value = "";
  const messageDiv = document.createElement("div");
  messageDiv.classList.add("message");
  messageDiv.innerHTML = message;
  messageBoard.appendChild(messageDiv);
});

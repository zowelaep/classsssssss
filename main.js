const form = document.querySelector("#message-form");
const input = document.querySelector("#message-input");
const messageBoard = document.querySelector("#message-board");
const searchButton = document.querySelector("#search-button");
const searchInput = document.querySelector("#search-input");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const message = input.value.trim();
    if (!message) return;
    input.value = "";
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message");
    messageDiv.innerHTML = message;
    messageBoard.appendChild(messageDiv);
  });
  

searchButton.addEventListener("click", (event) => {
  const messages = document.querySelectorAll(".message");
  const searchWord = searchInput.value;
  searchInput.value = "";
  for (let i = 0; i < messages.length; i++) {
    const message = messages[i];
    if (message.innerHTML.includes(searchWord)) {
      message.classList.add("highlight");
    } else {
      message.classList.remove("highlight");
    }
  }
});


const list = document.querySelectorAll("Button");
for (const message of list) {
  message.addEventListener("click", hideMessage);
}
function hideMessage(event) {
  const container = event.currentTarget.parentNode;
  container.style.display = "none";
}

document.addEventListener("click", hideMessage);

function hideMessage(event) {
  if (event.target.dataset.hideToggle != null) {
    const container = event.target.parentNode;
    container.style.display = "none";
  }
}

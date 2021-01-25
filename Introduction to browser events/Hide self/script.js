const btn = document.querySelector("#btn");
btn.addEventListener("click", hideButton);
function hideButton(event) {
  btn.style.display = "none";
}

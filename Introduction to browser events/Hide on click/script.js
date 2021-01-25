const btn = document.querySelector("#btn");
btn.addEventListener("click", hideText);
function hideText() {
  const text = document.querySelector("#text");
  text.style.display = "none";
}

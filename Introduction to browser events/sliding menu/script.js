const list = document.querySelector("ul");
list.addEventListener("click", hideList);
function hideList() {
  const container = document.querySelector("div");
  let cur = "none";

  if (container.style.display === cur) {
    cur = "block";
  }
  container.style.display = cur;
}

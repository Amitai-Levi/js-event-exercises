const items = document.querySelectorAll("li");
for (const item of items) {
  item.addEventListener("click", choose);
}

function choose(event) {
  const chosen = document.querySelectorAll(".selected");

  if (!event.ctrlKey) {
    for (const item of chosen) {
      // item.removeAttribute("class","selected");
      item.classList.remove("selected");
    }
  }
  event.target.classList.add("selected");
}

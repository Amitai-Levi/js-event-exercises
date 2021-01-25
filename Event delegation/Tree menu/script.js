document.addEventListener("click", hideChilds);

function hideChilds(event) {
  if (event.target.dataset.hideChilds != null) {
    const child = event.target.parentNode.querySelector("ul");
    if (child != null) {
      if (child.style.display != "none") {
        child.style.display = "none";
      } else {
        child.style.display = "block";
      }
    }
  }
}

function show(event) {
  console.log(event.target.type);
}

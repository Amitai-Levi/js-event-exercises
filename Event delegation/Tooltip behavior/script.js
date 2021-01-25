document.addEventListener("mouseover", tooltip);
document.addEventListener("mouseout", tooltipDelete);

function tooltip(event) {
  if (event.target.dataset.tooltip != null) {
    const element = event.target;
    const tip = element.dataset.tooltip;
    const tooltip = document.createElement("span");
    tooltip.innerText = tip;
    //element.appendChild(tooltip);
    document.body.appendChild(tooltip);
    const elementLoc = element.getBoundingClientRect();

    let top = elementLoc.top - 5 - tooltip.offsetHeight;
    if (top < element.parentNode.getBoundingClientRect().top) {
      top = elementLoc.top + 5 + element.offsetHeight;
    }
    tooltip.style.top = top + "px";
    tooltip.style.left =
      elementLoc.left + (element.offsetWidth - tooltip.offsetWidth) / 2 + "px";
    tooltip.className = "tooltip";
  }
}
function tooltipDelete(event) {
  if (event.target.dataset.tooltip != null) {
    const element = event.target;
    const tooltip = document.body.querySelector(".tooltip");

    if (tooltip !== undefined) {
      tooltip.remove();
    }
  }
}

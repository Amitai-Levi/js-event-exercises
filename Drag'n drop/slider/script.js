const btn = document.querySelector("#btn");

btn.addEventListener("mousedown", dragButton);

function dragButton(event) {
  const papa = btn.parentNode;
  event.preventDefault();

  document.addEventListener("mousemove", drag);

  document.addEventListener("mouseup", dragEnd);

  function drag(event) {
    let mouseX = event.pageX - papa.getBoundingClientRect().left;
    switch (true) {
      case mouseX - 10 < 0:
        btn.style.left = "0px";
        break;
      case mouseX + 10 > papa.offsetWidth:
        btn.style.right = "0px";
        break;
      default:
        btn.style.left = mouseX - 10 + "px";
    }
  }

  function dragEnd() {
    document.removeEventListener("mousemove", drag);
    document.removeEventListener("mousemup", dragEnd);
  }
}

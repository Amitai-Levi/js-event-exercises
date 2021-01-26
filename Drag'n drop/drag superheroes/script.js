document.addEventListener("mousedown", dragButton);

function dragButton(event) {
  if (event.target.classList.contains("draggable")) {
    const element = event.target;
    event.preventDefault();
    drag(event);

    function drag(event) {
      let width = element.offsetWidth;
      let elementX = event.pageX - width / 2;

      switch (true) {
        case elementX < 0:
          element.style.left = "0px";
          break;
        case elementX + width > window.innerWidth:
          element.style.left = window.innerWidth - width + "px";
          break;
        default:
          element.style.left = elementX + "px";
      }
      let height = element.offsetHeight;
      const elementY = event.pageY - height / 2;

      switch (true) {
        case elementY < 0:
          element.style.top = "0px";
          break;
        case elementY + height > 1000:
          element.style.top = "866px";
          break;
        case event.clientY - height / 2 < 0:
          element.style.top = elementY + "px";
          window.scrollBy(0, -10);
          break;
        case window.innerHeight < event.clientY + height / 2:
          element.style.top = elementY + "px";
          window.scrollBy(0, 10);
          break;
        default:
          element.style.top = elementY + "px";
      }
    }

    function dragEnd() {
      document.removeEventListener("mousemove", drag);
      document.removeEventListener("mousemup", dragEnd);
    }
    document.addEventListener("mousemove", drag);

    document.addEventListener("mouseup", dragEnd);
  }
}

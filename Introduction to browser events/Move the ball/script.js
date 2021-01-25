const field = document.querySelector("#field");
field.addEventListener("click", moveBall);
function moveBall(event) {
  const ball = document.querySelector("#ball");
  console.log(event.clientX + ":" + event.clientY);
  let newLocX = event.clientX - ball.clientWidth / 2;
  let newLocY = event.clientY - ball.clientHeight / 2;
  if (newLocX < 0) {
    newLocX = 0;
  }
  if (newLocY < 0) {
    newLocY = 0;
  }
  if (newLocX > field.clientWidth - ball.clientWidth) {
    newLocX = field.clientWidth - ball.clientWidth;
  }
  if (newLocY > field.clientHeight - ball.clientWidth) {
    newLocY = field.clientHeight - ball.clientWidth;
  }

  ball.style.top = newLocY + "px";
  ball.style.left = newLocX + "px";
}

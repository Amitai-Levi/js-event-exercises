const pictures = document.querySelectorAll(".regular");

for (const picture of pictures) {
  picture.addEventListener("click", chooseImage);
}

function chooseImage(event) {
  const current = document.querySelector("#main");
  current.id = "";

  event.currentTarget.id = "main";
}

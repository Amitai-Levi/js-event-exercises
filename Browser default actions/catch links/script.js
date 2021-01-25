const links = document.querySelectorAll("#sure");
for (const link of links) {
  link.onclick = function () {
    return confirm("Are you sure you want to leave?");
  };
}

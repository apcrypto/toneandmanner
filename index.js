var image = document.querySelector("#back1");
var footer = document.querySelector(".footer");
var copyright = document.querySelector(".copyright");

function setFooterHeight() {
  footer.style.top = image.clientHeight - 40 + "px";
  copyright.style.top = image.clientHeight - 100 + "px";
}

setFooterHeight();

window.addEventListener("resize", setFooterHeight);

var image = document.querySelector("#back1");
var footer = document.querySelector(".footer");
var copyright = document.querySelector(".copyright");

window.addEventListener("load", (event) => {
  setFooterHeight();
});

function setFooterHeight() {
  footer.style.top = image.clientHeight - 40 + "px";
  copyright.style.top = image.clientHeight - 100 + "px";
}

window.addEventListener("resize", setFooterHeight);

// check if a screen object exists and show it for current slide
if (objects[index] != null) objects[index].showAction(ctx, {}, noop);
// hide objects for slides that aren't in view
var currentObject = index;
var filteredObjects = objects.filter((value, index) => index !== currentObject);
filteredObjects.forEach(function (object) {
  if (object != null) {
    object.hideAction(ctx, {}, noop);
  }
});

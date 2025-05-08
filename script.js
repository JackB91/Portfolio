let scroll_top = document.getElementById("scroll-up");

function scrollUp() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

scroll_top.addEventListener("click", scrollUp);

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    scroll_top.style.display = "block";
  } else {
    scroll_top.style.display = "none";
  }
});

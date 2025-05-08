let scroll_top = document.getElementById("scroll-up");

function scrollUp() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

scroll_top.addEventListener("click", scrollUp);

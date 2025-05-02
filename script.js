let scroll_top = document.getElementById("scroll-to-top")

function scrollUp() {
    window.scrollTo({top:0, behavior:'smooth'})
}


scroll_top.addEventListener("click", scrollUp)
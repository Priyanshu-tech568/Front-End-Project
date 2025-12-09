function reveal() {
    let sections = document.querySelectorAll(".reveal");
    sections.forEach(sec => {
        let top = sec.getBoundingClientRect().top;
        if (top < window.innerHeight - 120) { sec.classList.add("active"); }
    })
}
window.addEventListener("scroll", reveal);
reveal();

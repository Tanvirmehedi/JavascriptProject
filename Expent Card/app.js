const panels = document.querySelectorAll(".panel");


panels.forEach((panel) => {
    panel.addEventListener("click", () => {
        removeActiveClass();
        panel.classList.add('active');
    })
})

let removeActiveClass = function() {
    panels.forEach((panel) => {
        panel.classList.remove('active');
    })
}
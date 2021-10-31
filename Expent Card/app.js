const panels = document.querySelectorAll(".panel");

// for (let i = 0; i <= panels.length; i++) {
//     panels[i].addEventListener("click", () => {
//         // removeActiveClass();
//         panels[i].classList.add("active");
//     })
// }

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
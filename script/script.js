const cursor = document.querySelector(".cursor");
const links = document.querySelectorAll("a");
const buttons = document.querySelectorAll("button");
const coordsX = document.querySelector(".coords__x");
const coordsY = document.querySelector(".coords__y");

document.addEventListener("mousemove", updateCoords);

const addActiveClass = () => cursor.classList.add("cursor--hover");
const removeActiveClass = () => cursor.classList.remove("cursor--hover");

function updateCoords({ clientX, clientY }) {
    cursor.style.left = clientX + "px";
    cursor.style.top = clientY + "px";
    coordsX.textContent = clientX;
    coordsY.textContent = clientY;
}

links.forEach((link) => {
    link.addEventListener("mouseenter", () => {
        addActiveClass()
    });

    link.addEventListener("mouseleave", () => {
        removeActiveClass();
    });


});



buttons.forEach((button) => {
    button.addEventListener("mouseenter", () => {
        addActiveClass();
    });

    buttons.addEventListener("mouseLeave", () => {
        removeActiveClass();
    });
});


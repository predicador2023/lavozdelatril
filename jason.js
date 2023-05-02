

const barraNav = document.querySelector("#barraNav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
const body = document.querySelector("#body");

abrir.addEventListener("click", () => {
    barraNav.classList.add("visible");
    body.classList.add("no-scroll");
})

cerrar.addEventListener("click", () =>  {
    barraNav.classList.remove("visible");
    body.classList.remove("no-scroll");
})

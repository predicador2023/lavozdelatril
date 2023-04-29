

const barraNav = document.querySelector("#barraNav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    barraNav.classList.add("visible");
})

cerrar.addEventListener("click", () =>  {
    barraNav.classList.remove("visible");
})

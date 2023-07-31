import { userServicios } from "../servicios/user-service.js"

const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.querySelector("[data-name]").value
    const email = document.querySelector("[data-email]").value
    const password = document.querySelector("[data-password]").value


    console.log(name, email);

    userServicios.newUser(name, email, password)
    .then(response => {
        window.location.href = "../screens/login.html"
    })
        .catch(err => console.log(err))       
});
document.addEventListener("DOMContentLoaded", () => {
    const email = document.getElementById("email");
    const form = document.getElementById("form");
    const nombre = document.getElementById("nombre");
    const parrafo = document.getElementById("warning");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let warnings = "";
        let entrar = false;
        let regexMail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

        parrafo.innerHTML = ""; // Clear previous warnings

        if (nombre.value.length < 6) {
            warnings += "El nombre es demasiado corto. <br>";
            entrar = true;
        }
        if (!regexMail.test(email.value)) {
            warnings += "Ingrese un email válido. <br>";
            entrar = true;
        }
        if (entrar) {
            parrafo.innerHTML = warnings;
        } else {
            parrafo.innerHTML = "¡Gracias!";
            
        }
    });
});

let continuar = true;

console.log("Bienvenido al simulador de la academia deportiva");

do {
    let nombre = prompt("Ingresá tu nombre:");

    if (nombre === null || nombre.trim() === "") {
        alert("Debés ingresar un nombre válido.");
    } else {
        let edadIngresada = prompt("Ingresá tu edad:");

        if (
            edadIngresada === null ||
            edadIngresada.trim() === "" ||
            !Number.isFinite(Number(edadIngresada)) ||
            !Number.isInteger(Number(edadIngresada)) ||
            Number(edadIngresada) < 1
        ) {
            alert("Ingresá una edad válida.");
        } else {
            let edad = Number(edadIngresada);
            let categoria = "";

            if (edad <= 12) {
                categoria = "Infantil";
            } else if (edad <= 15) {
                categoria = "Cadetes";
            } else if (edad <= 18) {
                categoria = "Juvenil";
            } else {
                categoria = "Adultos";
            }

            console.log("------------------------------");
            console.log("Nombre: " + nombre);
            console.log("Edad: " + edad);
            console.log("Categoría: " + categoria);
            console.log("------------------------------");

            alert(
                "Hola " + nombre +
                "\nTu edad es: " + edad +
                "\nTu categoría es: " + categoria
            );
        }
    }

    let respuesta = prompt(
        "¿Querés realizar otra consulta?\nEscribí SI para continuar o NO para salir."
    );

    if (respuesta === null || respuesta.trim().toUpperCase() !== "SI") {
        continuar = false;
    }

} while (continuar);

console.log("Simulador finalizado. ¡Gracias por participar!");

alert("Gracias por utilizar el simulador.");

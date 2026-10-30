
// FUNCION 1: Solicitar datos al usuario
function solicitarDato(mensaje) {
    let dato = prompt(mensaje);
    return dato;
}

// FUNCION 2: Validar la edad
const validarEdad = (edadIngresada) => {
    if (
        edadIngresada === null ||
        edadIngresada.trim() === "" ||
        !Number.isFinite(Number(edadIngresada)) ||
        !Number.isInteger(Number(edadIngresada)) ||
        Number(edadIngresada) < 1
    ) {
        return false;
    }

    return true;
};

// FUNCION 3: Determinar la categoria
function determinarCategoria(edad) {
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

    return categoria;
}

// FUNCION 4: Mostrar los resultados
const mostrarResultado = (nombre, edad, categoria) => {
    console.log("------------------------------");
    console.log("Nombre: " + nombre);
    console.log("Edad: " + edad);
    console.log("Categoria: " + categoria);
    console.log("------------------------------");

    alert(
        "Hola " + nombre +
        "\nTu edad es: " + edad +
        "\nTu categoria es: " + categoria
    );
};

// INICIO DEL SIMULADOR
let continuar = true;

console.log("Bienvenido al simulador de la academia deportiva");

do {
    // ENTRADA DE DATOS
    let nombre = solicitarDato("Ingresá tu nombre:");

    if (nombre === null || nombre.trim() === "") {
        alert("Debés ingresar un nombre válido.");

    } else {
        let edadIngresada = solicitarDato("Ingresá tu edad:");

        // VALIDACION DE DATOS
        if (!validarEdad(edadIngresada)) {
            alert("Ingresá una edad válida.");

        } else {
            // PROCESAMIENTO DE DATOS
            let edad = Number(edadIngresada);
            let categoria = determinarCategoria(edad);

            // SALIDA DE RESULTADOS
            mostrarResultado(nombre.trim(), edad, categoria);
        }
    }

    // CONSULTA PARA REPETIR EL SIMULADOR
    let respuesta = prompt(
        "¿Querés realizar otra consulta?\nEscribí SI para continuar o NO para salir."
    );

    if (respuesta === null || respuesta.trim().toUpperCase() !== "SI") {
        continuar = false;
    }

} while (continuar);

// FINALIZACION
console.log("Simulador finalizado. ¡Gracias por participar!");
alert("Gracias por utilizar el simulador.");

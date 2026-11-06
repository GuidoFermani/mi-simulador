
// SIMULADOR DE ACADEMIA DEPORTIVA

// ARRAY INICIAL: LISTA DE JUGADORES
const jugadoresAcademia = [
    "Juan",
    "Pedro",
    "Lucas",
    "Martin",
    "Santiago"
];

// FUNCION 1: SOLICITAR DATOS
function solicitarDato(mensaje) {
    let dato = prompt(mensaje);
    return dato;
}

// FUNCION 2: VALIDAR EDAD
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

// FUNCION 3: DETERMINAR CATEGORIA
function determinarCategoria(edad) {
    if (edad <= 12) {
        return "Infantil";
    } else if (edad <= 15) {
        return "Cadetes";
    } else if (edad <= 18) {
        return "Juvenil";
    } else {
        return "Adultos";
    }
}

// FUNCION 4: MOSTRAR RESULTADOS
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

// FUNCION 5: LISTAR JUGADORES CON FOR...OF
function listarJugadores(lista) {
    console.log("===== LISTA DE JUGADORES =====");

    for (const jugador of lista) {
        console.log("Jugador: " + jugador);
    }

    console.log("Total de jugadores: " + lista.length);
    console.log("==============================");
}

// INICIO DEL SIMULADOR
let continuar = true;

console.log("Bienvenido al simulador de la academia deportiva");

// MOSTRAR LISTA INICIAL
listarJugadores(jugadoresAcademia);

do {

    // ENTRADA DE DATOS
    let nombre = solicitarDato("Ingresá el nombre del jugador:");

    if (nombre === null || nombre.trim() === "") {
        alert("Debés ingresar un nombre válido.");

    } else {

        let edadIngresada = solicitarDato("Ingresá la edad del jugador:");

        if (!validarEdad(edadIngresada)) {
            alert("Ingresá una edad válida.");

        } else {

            // PROCESAMIENTO DE DATOS
            let edad = Number(edadIngresada);
            let categoria = determinarCategoria(edad);

            // AGREGAR JUGADOR AL FINAL DEL ARRAY
            jugadoresAcademia.push(nombre.trim());

            // MOSTRAR RESULTADO
            mostrarResultado(nombre.trim(), edad, categoria);

            console.log("Jugador agregado al final de la lista.");
        }
    }

    // PREGUNTAR SI SE DESEA CONTINUAR
    let respuesta = solicitarDato(
        "¿Querés registrar otro jugador?\nEscribí SI para continuar o NO para salir."
    );

    if (respuesta === null || respuesta.trim().toUpperCase() !== "SI") {
        continuar = false;
    }

} while (continuar);


// MANIPULACION DE EXTREMOS

// AGREGAR UN JUGADOR AL PRINCIPIO
const jugadorPrioritario = solicitarDato(
    "Ingresá el nombre de un jugador prioritario para agregar al principio:"
);

if (jugadorPrioritario !== null && jugadorPrioritario.trim() !== "") {
    jugadoresAcademia.unshift(jugadorPrioritario.trim());
    console.log("Jugador prioritario agregado al principio de la lista.");
}

// ELIMINAR EL ULTIMO JUGADOR
const jugadorEliminado = jugadoresAcademia.pop();

console.log("Se ha eliminado el elemento: " + jugadorEliminado);
alert("Se ha eliminado el jugador: " + jugadorEliminado);


// BUSQUEDA Y VALIDACION

const jugadorBuscado = solicitarDato(
    "¿Qué jugador querés buscar en la academia?"
);

if (
    jugadorBuscado !== null &&
    jugadoresAcademia.includes(jugadorBuscado.trim())
) {
    const posicion = jugadoresAcademia.indexOf(jugadorBuscado.trim());

    console.log(
        "El jugador " + jugadorBuscado +
        " está registrado en la posición: " + posicion
    );

    alert("El jugador " + jugadorBuscado + " está en la academia.");

} else {
    console.log("El jugador buscado no se encuentra en la academia.");
    alert("El jugador no se encuentra registrado.");
}


// ACTUALIZACION POR INDICE CON SPLICE

const jugadorReemplazo = solicitarDato(
    "Ingresá el nombre para reemplazar al jugador ubicado en la posición 2:"
);

if (jugadorReemplazo !== null && jugadorReemplazo.trim() !== "") {

    const jugadorAnterior = jugadoresAcademia[2];

    jugadoresAcademia.splice(2, 1, jugadorReemplazo.trim());

    console.log(
        "Se reemplazó a " + jugadorAnterior +
        " por " + jugadorReemplazo
    );
}


// REPORTE FINAL
console.log("===== REPORTE FINAL DE LA ACADEMIA =====");

listarJugadores(jugadoresAcademia);

console.log("Simulador finalizado. ¡Gracias por participar!");

alert("Gracias por utilizar el simulador de la academia deportiva.");

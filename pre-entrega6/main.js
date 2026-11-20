// ========================================
// PRE-ENTREGA 5: INSTANCIANDO OBJETOS
// SIMULADOR DE ACADEMIA DEPORTIVA
// ========================================
// CLASE JUGADOR
class Jugador {
    constructor(id, nombre, edad, categoria, posicion) {
        this.id = id;
        this.nombre = nombre;
        this.edad = edad;
        this.categoria = categoria;
        this.posicion = posicion;
    }

    // METODO PARA MOSTRAR INFORMACION
    mostrarInformacion() {
        console.log("------------------------------");
        console.log("ID: " + this.id);
        console.log("Nombre: " + this.nombre);
        console.log("Edad: " + this.edad);
        console.log("Categoria: " + this.categoria);
        console.log("Posicion: " + this.posicion);
        console.log("------------------------------");
    }

    // METODO PARA ACTUALIZAR LA CATEGORIA
    actualizarCategoria() {
        if (this.edad <= 12) {
            this.categoria = "Infantil";
        } else if (this.edad <= 15) {
            this.categoria = "Cadetes";
        } else if (this.edad <= 18) {
            this.categoria = "Juvenil";
        } else {
            this.categoria = "Adultos";
        }
    }
}

// FUNCION PARA SOLICITAR DATOS
function solicitarDato(mensaje) {
    return prompt(mensaje);
}

// FUNCION FLECHA PARA VALIDAR EDAD
const validarEdad = (edadIngresada) => {
    if (
        edadIngresada === null ||
        edadIngresada.trim() === "" ||
        !Number.isInteger(Number(edadIngresada)) ||
        Number(edadIngresada) < 1
    ) {
        return false;
    }

    return true;
};

// FUNCION PARA DETERMINAR CATEGORIA
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

// FUNCION PARA LISTAR JUGADORES
function listarJugadores(lista) {
    console.log("===== LISTA DE JUGADORES =====");

    for (const jugador of lista) {
        jugador.mostrarInformacion();
    }

    console.log("Total de jugadores: " + lista.length);
}

// ========================================
// INSTANCIACION DE OBJETOS CON NEW
// ========================================

const jugador1 = new Jugador(
    1, "Juan", 12, "Infantil", "Base"
);

const jugador2 = new Jugador(
    2, "Pedro", 15, "Cadetes", "Alero"
);

const jugador3 = new Jugador(
    3, "Lucas", 18, "Juvenil", "Pivot"
);

// ARRAY CON LOS OBJETOS
const jugadoresAcademia = [
    jugador1,
    jugador2,
    jugador3
];

// ========================================
// VERIFICACION DE LOS METODOS
// ========================================

console.log("JUGADORES REGISTRADOS INICIALMENTE");

jugador1.mostrarInformacion();
jugador2.mostrarInformacion();
jugador3.mostrarInformacion();

// Actualizar categoria de un jugador
jugador1.edad = 13;
jugador1.actualizarCategoria();

console.log("Categoria actualizada del jugador 1:");
jugador1.mostrarInformacion();

// ========================================
// INICIO DEL SIMULADOR
// ========================================

let continuar = true;
let siguienteId = 4;

console.log("Bienvenido al simulador de la academia deportiva");

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

            let posicion = solicitarDato(
                "Ingresá la posición del jugador (Base, Escolta, Alero, Ala-Pivot o Pivot):"
            );

            if (posicion === null || posicion.trim() === "") {
                alert("No se registró el jugador porque la posición es inválida.");

            } else {
                // CREAR NUEVO OBJETO
                const nuevoJugador = new Jugador(
                    siguienteId,
                    nombre.trim(),
                    edad,
                    categoria,
                    posicion.trim()
                );

                // AGREGAR OBJETO AL ARRAY
                jugadoresAcademia.push(nuevoJugador);
console.log("===== NUEVA ALTA DE JUGADOR =====");
console.log("ID: " + nuevoJugador.id);
console.log("Nombre: " + nuevoJugador.nombre);
console.log("Edad: " + nuevoJugador.edad);
console.log("Categoría: " + nuevoJugador.categoria);
console.log("Posición: " + nuevoJugador.posicion);
console.log("Total de jugadores: " + jugadoresAcademia.length);
                siguienteId++;

                // MOSTRAR RESULTADO
                console.log("Nuevo jugador registrado:");
                nuevoJugador.mostrarInformacion();

                alert(
                    "Jugador registrado correctamente.\n" +
                    "Nombre: " + nuevoJugador.nombre +
                    "\nCategoria: " + nuevoJugador.categoria
                );
            }
        }
    }

    // CONSULTAR SI SE DESEA CONTINUAR
    let respuesta = solicitarDato(
        "¿Querés registrar otro jugador?\nEscribí SI para continuar o NO para salir."
    );

    if (respuesta === null || respuesta.trim().toUpperCase() !== "SI") {
        continuar = false;
    }

} while (continuar);

// ========================================
// GESTION DEL ARRAY DE JUGADORES
// ========================================

// AGREGAR JUGADOR AL PRINCIPIO
const nombrePrioritario = solicitarDato(
    "Ingresá el nombre de un jugador prioritario:"
);

if (nombrePrioritario !== null && nombrePrioritario.trim() !== "") {
    const jugadorPrioritario = new Jugador(
        siguienteId,
        nombrePrioritario.trim(),
        16,
        "Juvenil",
        "Base"
    );

    jugadoresAcademia.unshift(jugadorPrioritario);
    siguienteId++;

    console.log("Jugador prioritario agregado al principio.");
}

// ELIMINAR ULTIMO JUGADOR
const jugadorEliminado = jugadoresAcademia.pop();

if (jugadorEliminado) {
    console.log("Se ha eliminado el elemento: " + jugadorEliminado.nombre);
    alert("Se ha eliminado el jugador: " + jugadorEliminado.nombre);
}
// BUSCAR JUGADOR
const nombreBuscado = solicitarDato(
    "¿Qué jugador querés buscar en la academia?"
);

if (nombreBuscado !== null && nombreBuscado.trim() !== "") {
    const posicionJugador = jugadoresAcademia.findIndex(
        jugador => jugador.nombre.toLowerCase() === nombreBuscado.trim().toLowerCase()
    );

    if (posicionJugador !== -1) {
        console.log(
            "Jugador encontrado en la posición: " + posicionJugador
        );
        alert("El jugador está registrado en la academia.");

    } else {
        console.log("El jugador no se encuentra registrado.");
        alert("El jugador no se encuentra en la academia.");
    }
}
// REEMPLAZAR JUGADOR CON SPLICE
if (jugadoresAcademia.length > 2) {
    const nombreReemplazo = solicitarDato(
        "Ingresá un nuevo nombre para reemplazar al jugador de la posición 2:"
    );

    if (nombreReemplazo !== null && nombreReemplazo.trim() !== "") {
        const jugadorAnterior = jugadoresAcademia[2];

        const jugadorNuevo = new Jugador(
            siguienteId,
            nombreReemplazo.trim(),
            17,
            "Juvenil",
            "Alero"
        );

        jugadoresAcademia.splice(2, 1, jugadorNuevo);
        siguienteId++;

        console.log(
            "Se reemplazó a " + jugadorAnterior.nombre +
            " por " + jugadorNuevo.nombre
        );
    }
}

// ================================
// REPORTE FINAL
// ================================
// MENU DE CONSULTAS DE LA ACADEMIA
let opcionConsulta;

do {
    opcionConsulta = solicitarDato(
        "===== CONSULTAS DE LA ACADEMIA =====\n" +
        "1 - Buscar jugador por nombre\n" +
        "2 - Filtrar jugadores por categoria\n" +
        "3 - Mostrar nombres y posiciones\n" +
        "4 - Calcular edad promedio\n" +
        "0 - Salir de las consultas"
    );

    switch (opcionConsulta) {

        // FIND: BUSCAR UN JUGADOR POR NOMBRE
        case "1": {
            const nombreBuscado = solicitarDato(
                "Ingresá el nombre del jugador que querés buscar:"
            );

            if (nombreBuscado !== null && nombreBuscado.trim() !== "") {
                const jugadorEncontrado = jugadoresAcademia.find(
                    jugador =>
                        jugador.nombre.toLowerCase() ===
                        nombreBuscado.trim().toLowerCase()
                );

                if (jugadorEncontrado) {
                    console.log("===== JUGADOR ENCONTRADO =====");
                    jugadorEncontrado.mostrarInformacion();
                    alert("Jugador encontrado: " + jugadorEncontrado.nombre);
                } else {
                    console.log("No se encontró el jugador.");
                    alert("No se encontró ese jugador.");
                }
            }
            break;
        }

        // FILTER: FILTRAR JUGADORES POR CATEGORIA
        case "2": {
            const categoriaBuscada = solicitarDato(
                "Ingresá la categoría que querés consultar:\n" +
                "Infantil, Cadetes, Juvenil o Adultos"
            );

            if (categoriaBuscada !== null && categoriaBuscada.trim() !== "") {
                const jugadoresFiltrados = jugadoresAcademia.filter(
                    jugador =>
                        jugador.categoria.toLowerCase() ===
                        categoriaBuscada.trim().toLowerCase()
                );

                console.log("===== JUGADORES DE LA CATEGORIA =====");
                console.log(jugadoresFiltrados);

                if (jugadoresFiltrados.length > 0) {
                    jugadoresFiltrados.forEach(jugador => {
                        jugador.mostrarInformacion();
                    });

                    alert(
                        "Se encontraron " +
                        jugadoresFiltrados.length +
                        " jugadores."
                    );
                } else {
                    alert("No hay jugadores en esa categoría.");
                }
            }
            break;
        }

        // MAP: TRANSFORMAR LOS DATOS DE LOS JUGADORES
        case "3": {
            const listadoJugadores = jugadoresAcademia.map(
                jugador => ({
                    nombre: jugador.nombre,
                    posicion: jugador.posicion
                })
            );

            console.log("===== NOMBRES Y POSICIONES =====");
            console.log(listadoJugadores);

            alert("La lista de nombres y posiciones está en la consola.");
            break;
        }

        // REDUCE: CALCULAR LA EDAD PROMEDIO
        case "4": {
            if (jugadoresAcademia.length > 0) {
                const sumaEdades = jugadoresAcademia.reduce(
                    (acumulador, jugador) => acumulador + jugador.edad,
                    0
                );

                const edadPromedio =
                    sumaEdades / jugadoresAcademia.length;

                console.log("===== EDAD PROMEDIO =====");
                console.log("Edad promedio: " + edadPromedio.toFixed(2));

                alert(
                    "La edad promedio de los jugadores es: " +
                    edadPromedio.toFixed(2) +
                    " años."
                );
            } else {
                alert("No hay jugadores registrados.");
            }
            break;
        }

        case "0":
            alert("Saliendo de las consultas.");
            break;

        default:
            alert("Opción inválida. Elegí una opción del menú.");
    }

} while (opcionConsulta !== null && opcionConsulta !== "0");

console.log("===== REPORTE FINAL DE LA ACADEMIA =====");
listarJugadores(jugadoresAcademia);
console.log("Simulador finalizado.");
alert("Gracias por utilizar el simulador de la academia deportiva.");

/* Recomiendo comentar todo e ir probando cada seccion */

/* Sección */

let numeroUno = prompt("Introduce un numero para saber si es mayor")
let numeroDos = prompt("Introduce otro numero")

if (numeroUno > numeroDos) {
    console.log("El primer numero es mayor")
} else{
    console.log("El primer numero no es mayor al segundo")
}

numeroUno = prompt("Introduce un numero para evaluar su igualdad")
numeroDos = prompt("Introduce otro numero")

if (numeroUno === numeroDos) {
    console.log("Los numeros son iguales")
}else{
    console.log("Los numeros son diferentes")
}


numeroUno = prompt("Introduce un numero para evaluarlo")
numeroDos = prompt("Introduce otro numero")

if (numeroUno > numeroDos) {
    console.log("El primer numero es mayor")
} else if(numeroUno < numeroDos){
    console.log("El Segundo numero es mayor")
}else if(numeroUno === numeroDos){
    console.log("Los numeros son iguales")
}

/* Sección */

let numeroTres = prompt("Introduce un numero para otro ejercico")
let numeroCuatro = prompt("Introduce otro numero")
let numeroCinco = prompt("Introduce un numero mas")

if (numeroTres < numeroCuatro && numeroTres <numeroCinco) {
    console.log("El primer numero es el mas chico")
} else if (numeroCuatro < numeroTres  && numeroCuatro <numeroCinco) {
    console.log("El Segundo numero es el mas chico")
} else if (numeroCinco < numeroTres && numeroCinco <numeroCuatro) {
    console.log("El Tercer numero es el mas chico")
} else{
    console.log("los numero son iguales ingrese diferentes para evaluar")
}

/* Sección */

let personaUno = {
    nombre: prompt("Persona 1 ingresa tu nombre"),
    edad: prompt("Persona 1 ingresa tu edad"),
    altura: prompt("Persona 1 ingresa altura en cm")
}

/* console.table(personaUno) */ /* Esto es por si se quiere visualizar el objeto */

let personaDos = {
    nombreDos: prompt("Persona 2 ingresa tu nombre"),
    edadDos: prompt("Persona 2 ingresa tu edad"),
    alturaDos: prompt("Persona 2 ingresa altura en cm")
}
/* console.table(personaDos) */ /* esto es por si se quiere visualizar el objeto */

if (personaUno.altura > personaDos.alturaDos) {
    console.log("La persona 1 es mas Alta")
} else if(personaUno.altura < personaDos.alturaDos) {
    console.log("La persona 2 es mas Alta")
}

if (personaUno.edad > personaDos.edadDos) {
    console.log("La persona 1 tiene mas edad")
} else if(personaUno.edad < personaDos.edadDos) {
    console.log("La persona 2 tiene mas edad")
}

/* Sección */

let nombreConducir = prompt("Requisitos conducir, Introduce tu nombre")
let edadConducir = prompt("Introduce tu edad")
let alturaConducir = prompt("Introduce tu altura en cm")
let visionConducir = prompt("Introduce tu rango de vision 1-10")

if (edadConducir >= 18 && alturaConducir >= 150 && visionConducir >= 10) {
    console.log(nombreConducir + " Eres apto para conducir")
} else {
    console.log(nombreConducir + " No eres apto para conducir")

}

/* Sección */

let nombreVip = prompt("Accesos, Introduce tu nombre por favor")
let paseVip  = prompt("Introduce tu pase vip o normal")
let confirmacion
let usar
let noConfirmacion
let compra


if (nombreVip == "carlos" || paseVip == "vip") {
    console.log("Bienvenido");
}else {
    confirmacion = prompt("Tiene una entrada? si o no")
    if (confirmacion == "si") {
        usar = prompt("Desea usar su entrada? si o no")
        if(usar == "si"){
            console.log("bienvenido");
        }else{
            console.log("Gracias por su interes, chao");
        }
    }else{
        noConfirmacion = prompt("Desea comprar su acceso? si o no")
        if (noConfirmacion == "si") {
            compra = prompt("Introdusca su dinero")
            if (compra >= 1000) {
                console.log("venta concretada, bienvenido");
            }else{
                console.log("venta fallida falta dinero");
            } 
        } else{
            console.log("Gracias por su interes, chao");
        }
    }
}

/* Sección */

let numeroIncognita = 7
let numeroIngresado = prompt("Juguemos adivina el adivinaNumero, ingresa un numero entre 1 y 10: Intento uno")

if (numeroIngresado == numeroIncognita){
    console.log("Ganaste, adivinaste el numero");
}else {
    if (numeroIngresado > numeroIncognita){
        console.log("El numero ingresado es mayor, vuelve a intentarlo");
    } else{
        console.log("El numero ingresado es menor, vuelve a intentarlo");
    }

    numeroIngresado = prompt("Juguemos adivina el adivinaNumero, ingresa un numero entre 1 y 10: Intento dos")

    if (numeroIngresado == numeroIncognita){
        console.log("Ganaste, adivinaste el numero");
    }else {
        if (numeroIngresado > numeroIncognita){
            console.log("El numero ingresado es mayor, vuelve a intentarlo");
        } else{
            console.log("El numero ingresado es menor, vuelve a intentarlo");
        }
        numeroIngresado = prompt("Juguemos adivina el adivinaNumero, ingresa un numero entre 1 y 10: Intento tres")

        if (numeroIngresado == numeroIncognita){
            console.log("Ganaste, adivinaste el numero");
        }else {
           console.log("Lo sentimos, acabaron los intentos acabaron, jugamos despues");

        }
    }    

}

/* Sección */

let edadRango = prompt("Ingresa tu edad para rankearte :D")

if (edadRango >= 0 && edadRango <= 12) {
    console.log("Eres un infante");
}else if(edadRango >= 13 && edadRango <= 18){
    console.log("Eres un adolecente");
}else if(edadRango >= 19 && edadRango <= 45){
    console.log("Eres un mayor joven");
}else if(edadRango >= 45 && edadRango <= 99){
    console.log("Eres un anciano");
}else if(edadRango >= 100){
    console.log("En realidad eres tan lonjevo? (mayor)");
}

/* Sección */

let playerUno = prompt("Jugador uno: Ingresa piedra, papel o tijeras   -ingresar cualquier otro valor sera trampa-")
let playerDos = prompt("Jugador dos: Ingresa piedra, papel o tijeras   -ingresar cualquier otro valor sera trampa-")

if (playerUno == "piedra" && playerDos == "tijeras") {
    console.log("Felicidades, ganaste jugador uno");
}else if (playerUno == "tijeras" && playerDos == "papel") {
    console.log("Felicidades, ganaste jugador uno");
}else if (playerUno == "papel" && playerDos == "piedra") {
    console.log("Felicidades, ganaste jugador uno");
}else if (playerDos == "piedra" && playerUno == "tijeras") {
    console.log("Felicidades, ganaste jugador dos");
}else if (playerDos == "tijeras" && playerUno == "papel") {
    console.log("Felicidades, ganaste jugador dos");
}else if (playerDos == "papel" && playerUno == "piedra") {
    console.log("Felicidades, ganaste jugador dos");
}else if (playerUno == playerDos){
    console.log("Tenemos un empate");
}else{
    console.log("Algun jugador ha hecho trampa");

}

/* Sección */

let colorswichado = prompt("Hola, ingresa un color!!")

switch (colorswichado) {
        case "blanco":
        console.log("Falta de color");
        break;
        case "negro":
        console.log("Falta de color");
        break;
        case "verde":
        console.log("El color de la naturaleza");
        break;
        case "azul":
        console.log("El color del agua");
        break;
        case "amarillo":
        console.log("El color del sol");
        break;
        case "rojo":
        console.log("El color del fuego");
        break;
        case "marron":
        console.log("El color de la tierra");
        break;
    default:
        console.log("Excelente eleccion, no lo teniamos pensado");
        break;
}

/* Sección */

let operacionValor = parseInt(prompt ("ingrese un numero por favor"))
let operacionValorDos = parseInt(prompt ("ingrese otro numero por favor"))
let operador = prompt("Ingresa la operacion deseada,  suma, resta, multiplicacion o division")

if (operador == "suma") {
    console.log(operacionValor + operacionValorDos);
}else if (operador == "resta") {
    console.log(operacionValor - operacionValorDos);
}else if (operador == "multiplicacion") {
    console.log(operacionValor * operacionValorDos);
}else if( operacionValor == 0 || operacionValorDos == 0){
    console.log("No se puede dividir entre cero, intente de nuevo");
}else if (operador == "division") {
    console.log(operacionValor / operacionValorDos);
}

/* Sección */

let documento = {
    documentoNombre: prompt("Introduce el nombre en tu documento"),
    documentoEdad: prompt("Introduce la edad en tu documento"),
    docuemntoSexo: prompt("Introduce tu genero, el cual figura tu documento"),
    documentoPais: prompt("Introduce el pais que figura en tu documento"),
    documentoFolio: prompt("Introduce el folio de tu documento"),

}

let respuesta = prompt("Tus datos son correctos? si o no, Nombre: " + documento.documentoNombre + "| Edad: " + documento.documentoEdad + "| Genero: " + documento.docuemntoSexo
    + "| Pais: " + documento.documentoPais + "| Folio: " + documento.documentoFolio)

    if (respuesta == "si") {
        console.table(documento)
        console.log("Registro exitoso");
    }else{
        console.log("Algo salio mal reintente mas tarde");
    }


    
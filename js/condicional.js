console.log("Inicio");

var nota = prompt("Ingrese una nota");

console.log("IF ELSE:");
if (nota >= 9) {
    console.log("Aprobado con Beca");
} else {
    if (nota >= 7) {
        console.log("Aprobado");
    } else {
        console.log("Desaprobado")
    }
}

console.log("SWITCH:");
switch (nota) {
    case "10":
    case "9":
        console.log("Aprobado con Beca");
        break;

    case "8":
    case "7":
        console.log("Aprobado");
        break;

    default:
        console.log("Desaprobado");
        break;
}

console.log("Fin");
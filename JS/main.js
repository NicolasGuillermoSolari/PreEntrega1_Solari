/*Condicional*/
const mayorDeEdad = prompt("Ingrese su edad por favor");
if (mayorDeEdad >= 18) {
  alert("acceso aprobado");
} else {
  alert("Debe ser mayor de edad para ingresar");
}
/*ciclo*/
let nombresInquilinos = prompt(
  "ingrese nombre de una de las personas que va a alquilar, o escriba SALIR"
);
while (nombresInquilinos != "SALIR") {
  alert("El nombre del inquilino es " + nombresInquilinos);
  nombresInquilinos = prompt(
    "ingrese nombre de una de las personas que va a alquilar, o escriba SALIR"
  );
}
if ((nombresInquilinos = " ")) {
  alert(" no puede dejar vacio el estacio, escriba SALIR");
}

const porcentajeComision = 0.2;
const valorInmuebleAlquiler = prompt("ingrese valor del alquiler");
const valorConComision = valorInmuebleAlquiler * porcentajeComision;
alert("pagara: " + valorConComision);

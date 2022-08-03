//Obtenemos los datos del cliente y del vehiculo seleccionado//

const vehiculoElegido = JSON.parse(localStorage.getItem("Eleccion"));
let telCliente = localStorage.getItem("Telefono");
let nameCliente = localStorage.getItem("Cliente");

const imagen = document.querySelector(".imagen");
imagen.innerHTML = `<img src=${vehiculoElegido.img}>`;

const eleccion = document.querySelector(".eleccion");
eleccion.textContent = `Usted a optado por el modelo: ${vehiculoElegido.modelo}`;

//Calculamos precio final y valor de cada cuota para el cliente//

const selectElement = document.querySelector(".cuotas");

selectElement.addEventListener("change", (event) => {
    const resultado = document.querySelector(".resultado");
    resultado.textContent = `Ha elegido ${event.target.value} cuota/s`;
    const precioFinal = document.querySelector(".precio");
    precioFinal.textContent =
        `El precio total es U$S: ` +
        vehiculoElegido.precio * 1.22 +
        `.El valor de cada cuota es: U$S` +
        (vehiculoElegido.precio * 1.22) / event.target.value +
        `. Muchas gracias por su compra ${nameCliente}, nos contactaremos por el ${telCliente}`;
    Swal.fire({
        title: "Compra confirmada",
        text: "En breves nos comunicaremos con usted por el " + telCliente,
        icon: "success",
        confirmButtonText: "Cerrar",
    });
});

//Creamos las variables globales//

let cliente = document.getElementById("cliente")
let telefono = document.getElementById("telefono")
let edad = document.getElementById("edad")
let toast = document.getElementById("toast")

//Almacenamos los datos del cliente en Local Storage//

cliente.addEventListener("focusout", function() {
    localStorage.setItem("Cliente", cliente.value);
  })

telefono.addEventListener("focusout", function() {
    localStorage.setItem("Telefono", telefono.value);
  })

edad.addEventListener("focusout", function() {
    localStorage.setItem("Edad", edad.value);
  })

toast.addEventListener("click", function(){
  Toastify({
    text: "Datos guardados!",
    duration: 3000
}).showToast();
})

console.log(localStorage.getItem("Cliente"))
console.log(localStorage.getItem("Telefono"))
console.log(localStorage.getItem("Edad"))

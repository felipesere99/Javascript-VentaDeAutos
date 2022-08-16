//Obtenemos datos del cliente//

let edadCliente = localStorage.getItem('Edad')

//Creamos la clase para los objetos//

class Vehiculo{
    constructor(modelo, precio, anio, km, img) {
    this.modelo = modelo;
    this.precio = precio;
    this.anio = anio;
    this.km = km;
    this.img = img;
    }
}

// Llamado al fetch para transferir los objetos en JSON y asi crear el listado de vehiculos//

const arrayDeVehiculos = []

fetch('https://felipesere99.github.io/Javascript-VentaDeAutos/public/vehiculos.json')
    .then( (resp) => {return resp.json()} )
    .then( (data) => {
        data.forEach((vehiculos) => {
            arrayDeVehiculos.push(new Vehiculo(vehiculos.modelo, vehiculos.precio, vehiculos.anio, vehiculos.km, vehiculos.img))
        }
    )

    for (const vehiculos of arrayDeVehiculos ) {
    
        const ul = document.createElement("ul");
        
        const modelo = document.createElement("h4");
        modelo.innerText = vehiculos.modelo;
    
        const precio = document.createElement("li");
        precio.innerText = 'Precio(sin Iva): U$S ' + vehiculos.precio
    
        const antiguedad = document.createElement('li');
        antiguedad.innerText = 'Año: ' + vehiculos.anio;
    
        const kilometraje = document.createElement('li');
        kilometraje.innerText = 'KM: ' + vehiculos.km
    
        function display_image(src, width, height, alt) {
            var a = document.createElement("img");
            a.src = src;
            a.width = width;
            a.height = height;
            a.alt = alt;
            ul.append(a);
        }
        display_image(vehiculos.img, 
                            340, 
                            180, 
                            vehiculos.modelo);
        
    
        const comprar = document.createElement("button");
        
        comprar.innerHTML = `Comprar ${vehiculos.modelo}`
    
        comprar.onclick = () => {
            if(edadCliente<18) {
                alert('No vendemos vehiculos a menores, pero puede permanecer en la pagina')
            } 
            else if(edadCliente >= 18){
                const enJSON = JSON.stringify(vehiculos)
                localStorage.setItem("Eleccion", enJSON)
                window.location.href = "/pago.html"
            }
        }
        ul.append(modelo, precio, antiguedad, kilometraje, comprar);
        contenedor.appendChild(ul)
    }
})

/*document.addEventListener("keyup", e=>{
    if (e.target.matches("#buscador")){
        document.querySelectorAll(".contenedor").forEach(vehiculoBuscar => {
            vehiculoBuscar.modelo.toLowerCase().includes(e.target.value.toLowerCase())
                ?vehiculoBuscar
                :vehiculoBuscar.classList.add("filtro")
        })
    }
})*/
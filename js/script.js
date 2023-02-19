/* class Producto {
    constructor (nombre, precio) {
        this.id
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat (precio);
        this.vendido = false;    
    }
    
    sumalva() {
        this.precio = this.precio * 1.21;
    }
}
    
    //Declaramos un array de productos para almacenar objetos
    const productos = [];
    
    productos.push (new Producto ("arroz", "125"));
    productos.push (new Producto ("fideo", "70"));
    productos.push (new Producto ("pan", "50"));
    
    //Iteramos el array con for...of para modificarlos a todos
    for (const producto of productos)
    
    producto.sumalva ();

    console.log(productos); */



/* class Producto {
    constructor (nombre, precio) {
        this.id
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat (precio);
        this.vendido = false;    
    }
}

let input;
let cont = [];

while (input !== "stop") {
  input = prompt("ingrese dato:");
  if (input !== "stop") {
    cont.push(input);
  }
}

console.log(cont); */




function datosProducto(){
	
	let nombsre = prompt("Ingrese el nombre del producto:").toUpperCase();
	let color = prompt("Ingrese el color");
	var cantidad = parseInt(prompt("Ingrese la cantidad"));
	let producto1 = new producto(nombre,color,cantidad);
	producto1.mostrarDatos();
    validar();
}

function producto (nombre,color,cantidad) {

	this.nombre = nombre;
	this.color = color;
	this.cantidad = cantidad;

	this.mostrarDatos = function () {
		let msg = "Ha cargado un nuevo producto ";
	    msg = msg + 'Los datos del producto cargado son  \n  - Nombre: ' + this.nombre + " \n  - color: " + this.color + "\n  - con un total de: " + this.cantidad + " unidades";

	    console.log(msg);

	};
}

/* const productos = [];
let cant = 3;a
productos.push (new producto(datosProducto())) */

const productos = [];
productos.push (new producto(datosProducto()));


function validar(){
    let validar = prompt("quieres agregar algo mas?")
    if (validar == "si" ){
        datosProducto();
    } 
    else{
        console.log("adios")
    }
}



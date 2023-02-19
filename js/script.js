
//listado array de objetos disponibles de la tienda
const productos = [
    {nombre: "gorra", precio: 1000},
    {nombre: "remera", precio: 5500 } ,
    {nombre: "pantalon", precio: 15000 },
    {nombre: "medias", precio: 500 },
    {nombre: "zapatillas", precio: 25000 },
]   
//array vacio para ir llenando 
    let carrito = []
//mensaje de inicio para el user
    let seleccion = prompt("Bienvenido a nuestra tienda ¿Desea comprar algo? \n SI \n NO ")
//bucle para saber si el usuario quiere continuar o no
//se solicita si o si una respuesta para avanzar o salir del programa
    while(seleccion != "si" && seleccion != "no"){
        alert("Por favor, ingresa una opcion \n SI para comprar \n NO para salir")
        seleccion = prompt("¿Desea comprar algo? \n SI para ir a la tienda  \n NO para salir")
    }
//si el user selecciona si mostramos nuestros productos a elegir 
    if(seleccion == "si"){
        alert("A continuación nuestros productos y sus precios")
//utilizamos el metodo map para poder recorrerlos y que se muestre en el alert (mapealo y devolve uno por uno)
        let todoslosProductos = productos.map((producto) => producto.nombre + " $" + producto.precio  
        );
//lo separamos haciendo un salto de renglon
    alert(todoslosProductos.join(" \n " ))
//si seleccioneamos NO, el pragrama sale 
    } else if (seleccion == "no"){
        alert("Gracias por visitarnos, esperamos que vuelvas pronto!");
    }

//una vez que el user selecciona si empezamos agregar prod al carrito
    while(seleccion != "no"){
        let producto = prompt("Escribe el nombre del producto que quieres agregar a tu carrito")
        let precio = 0 //var precio para ir modificandolo segun el producto

//si el user selecciona una de estas opciones el programa carga el precio corresondiente 
    if(producto == "gorra" || producto == "remera" || producto == "pantalon" ||producto == "medias" || producto == "zapatillas"){
        switch (producto) {
            case "gorra":
                precio = 1000;
                break;
            case "remera":
                precio = 5500;
                break;
            case "pantalon":
                precio = 15000;
                break;
            case "medias":
                precio = 500;
                break;
            case "zapatillas":
                precio = 25000;
                break;
            default:
                break;
        }
//numero de unidades para  cargar el producto y calcular precio
        let unidades = parseInt(prompt("Cuantas unidades de este producto quiere llevar?"))     

//agregaamos al array en forma de objeto
        carrito.push({producto, unidades, precio})
        console.log(carrito)
    } else{
        alert("Actualmente no disponemos de ese producto, disculpe las molestias")
    }


//para evitar un bucle infinito le preguntamos al user si quiere seguir agregando productos
    seleccion = prompt("Desea seguir comprando? \n SI \n NO")

//si es no, recorremos el carrito, lo despedimos y se lo mostramos  
    while(seleccion === "no"){
        alert("Gracias por la visita! a continuaciion verá su carrito, hasta pronto!")
       
        carrito.forEach((carritoFinal) => {
//mostramos por alert y consola
           alert(` Producto: +  ${carritoFinal.producto} // unidades: ${carritoFinal.unidades} // precio por producto sin impuestos $" ${carritoFinal.precio * carritoFinal.unidades}`)

           console.log(` Producto: +  ${carritoFinal.producto} // Unidades: ${carritoFinal.unidades} // Precio por producto sin impuestos $${carritoFinal.precio * carritoFinal.unidades}`)
        })
        break;
    }
}
TotalAPagar()

//funcione para calcular precio total de la compra mas el IVA
function TotalAPagar(){
    const total = carrito.reduce((acumulador, elemento) => acumulador + elemento.precio * elemento.unidades * 1.21, 0)
    console.log("el total a pagar con IVA es: $" + total)
    alert("el total a pagar con IVA es: $" + total)
}



    
let nombre = prompt("Ingrese su nombre o escriba SALIR para abandonar el sitio").toUpperCase();

while (nombre != "SALIR"){
    AgregarProducto()
    AgregarCantidad()
    AgregarCupon()
    AgregarPago()

    let continuar = prompt("Desea comprar algo mas? SI o NO").toUpperCase();
    if (continuar = "NO"){
        alert("gracias por visitarnos, esperamos que vuelvas pronto")
        break;
    }
    else{}
}


//seleccionar producto
function AgregarProducto(){
let producto = parseInt (prompt ("Bienvenido " + nombre + ", ¿Qué querés comprar hoy? \n Selecciona una opcion \n 1. Remera $7500 + IVA \n 2. Pantalon $14000 + IVA  \n 3. Zapatilla 25000 + IVA " ));
switch (producto) {
    default:
        alert("No ingreso una opcion valida, intente nuevamente"); 
        console.log("No ingreso una opcion valida, intente nuevamente"); 
        AgregarProducto()
        break;
    case 1 :
        PrecioProd = 7500 ;
        alert("Ud selecciono remera");
        console.log("Ud selecciono remera");
        break;
    case  2:
        alert("Ud selecciono Pantalon");
        console.log("Ud selecciono Pantalon");
        PrecioProd = 14000 ;
        break;
    case 3 :
        alert("Ud selecciono Zapatillas");
        console.log("Ud selecciono Zapatillas");
        PrecioProd = 25000 ;
        break;
    }
}


//seleccionar Cantidad
function AgregarCantidad(){
let cantidad = parseInt (prompt ("Ingrese la cantidad que necesita" ));
let precio = PrecioProd * cantidad;

PrecioIva = precio * 1.21;
    alert("Precio con IVA es $" + PrecioIva);
    console.log("Precio con IVA es $" + PrecioIva); 
}



//seleccionar medio de pago
function AgregarPago(){
let pago = parseInt (prompt ("Selecciona una opcion para abonarlo\n 1. Efectivo -10% \n 2. Debito o transferencia  \n 3. Tarjeta de credito +25%"));

switch (pago) {
    default:
        alert("No ingreso una opcion valida, intente nuevamente"); 
        console.log("No ingreso una opcion valida, intente nuevamente"); 
        AgregarPago() 
        break;
    case 1 :
        Preciofinal = PrecioIva * 0.9 ;
        alert("El precio final a abonar es de " + Preciofinal);
        console.log("El precio final a abonar es de " + Preciofinal);
        break;
    case  2:
        Preciofinal = PrecioIva ;
        alert("El precio final a abonar es de " + Preciofinal);
        console.log("El precio final a abonar es de " + Preciofinal);
        break;
    case 3 :
        Preciofinal = PrecioIva * 1.25 ;
        alert("El precio final a abonar es de $" + Preciofinal);
        console.log("El precio final a abonar es de $" + Preciofinal);
        break;
}
}



function AgregarCupon(){
    let TieneCupon = parseInt (prompt ("Tienes algun cupon de descuento  \n 1. SI TENGO \n 2. NO TENGO"));
    if (TieneCupon == 1){
        let cupon = prompt("ingrese su cupon para verificar la validez").toUpperCase();
        if (cupon == "50%OFF"){
            alert("Cupon valido " );
            console.log("Cupon valido");
            PrecioIva = PrecioIva /2 ;
        }
        else{
            alert("CUPON INVALIDO");
        }
    }
    else{}
}

function AgregarIva(){ 
    PrecioIva = precio * 1.21;
    alert("Precio con IVA es $" + PrecioIva);
    console.log("Precio con IVA es $" + PrecioIva); 
}
 



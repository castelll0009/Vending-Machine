//crear instancia de Maquina
const machine1 = new VendingMachine();
AgregarProductos();
AgregarMonedas();
// Imprimir la listaProductosA1
console.log("listaProductosA1:", machine1.listaProductosA1);
// Imprimir la listaProductosB
console.log("listaProductosB:", machine1.listaProductosB);
// Imprimir la listaMonedas
console.log("listaMonedas:", machine1.listaMonedasD);


/////FUNCIONESSS////////////////////////////////////
function AgregarMonedas(){
    //crear instancia de Monedas D1,D2,D3,D4     

    // Agregar monedas a ListaMonedaD1
    let valorD1 = 100;let cantidadD1= 1;
    let valorD2 = 200;let cantidadD2= 1;
    let valorD3 = 500;let cantidadD3= 1;
    let valorD4 = 1000;let cantidadD4= 1;    
    
//D1
const MonedaD11 = new Moneda(valorD1, cantidadD1);
const MonedaD12 = new Moneda(valorD1, cantidadD1);
const MonedaD13 = new Moneda(valorD1, cantidadD1);
const MonedaD14 = new Moneda(valorD1, cantidadD1);
const MonedaD15 = new Moneda(valorD1, cantidadD1);
//D2 

const MonedaD21 = new Moneda(valorD2, cantidadD2);
const MonedaD22 = new Moneda(valorD2, cantidadD2);
const MonedaD23 = new Moneda(valorD2, cantidadD2);
const MonedaD24 = new Moneda(valorD2, cantidadD2);
const MonedaD25 = new Moneda(valorD2, cantidadD2);
//D3
const MonedaD31 = new Moneda(valorD3, cantidadD3);
const MonedaD32 = new Moneda(valorD3, cantidadD3);
const MonedaD33 = new Moneda(valorD3, cantidadD3);
const MonedaD34 = new Moneda(valorD3, cantidadD3);
const MonedaD35 = new Moneda(valorD3, cantidadD3);
//D4
const MonedaD41 = new Moneda(valorD4, cantidadD4);
const MonedaD42 = new Moneda(valorD4, cantidadD4);
const MonedaD43 = new Moneda(valorD4, cantidadD4);
const MonedaD44 = new Moneda(valorD4, cantidadD4);
const MonedaD45 = new Moneda(valorD4, cantidadD4);

// Agregar listaMonedaD1 a ListaMonedasD
const listaMonedasD1 = [];
listaMonedasD1.push(MonedaD11);
listaMonedasD1.push(MonedaD12);
listaMonedasD1.push(MonedaD13);
listaMonedasD1.push(MonedaD14);
listaMonedasD1.push(MonedaD15);
machine1.listaMonedasD.push(listaMonedasD1);
// Agregar listaMonedaD2 a ListaMonedasD
const listaMonedasD2 = [];
listaMonedasD2.push(MonedaD21);
listaMonedasD2.push(MonedaD22);
listaMonedasD2.push(MonedaD23);
listaMonedasD2.push(MonedaD24);
listaMonedasD2.push(MonedaD25);
machine1.listaMonedasD.push(listaMonedasD1);
// Agregar listaMonedaD3 a ListaMonedasD
const listaMonedasD3 = [];
listaMonedasD3.push(MonedaD31);
listaMonedasD3.push(MonedaD32);
listaMonedasD3.push(MonedaD33);
listaMonedasD3.push(MonedaD34);
listaMonedasD3.push(MonedaD35);
machine1.listaMonedasD.push(listaMonedasD3);

// Agregar listaMonedaD4 a ListaMonedasD
const listaMonedasD4 = [];
listaMonedasD4.push(MonedaD41);
listaMonedasD4.push(MonedaD42);
listaMonedasD4.push(MonedaD43);
listaMonedasD4.push(MonedaD44);
listaMonedasD4.push(MonedaD45);
machine1.listaMonedasD.push(listaMonedasD4);
    
}
function AgregarProductos() {
//crear instancialas listas de productos A1 B1,B2,B3 C1,C2,C3
// Crear instancias de la clase Producto  
//A1

let nombreProductoA1 = "Cocacola";
let precioProductosA1 = 1700;
const producto1 = new Producto(nombreProductoA1, precioProductosA1);
const producto2 = new Producto(nombreProductoA1, precioProductosA1);
const producto3 = new Producto(nombreProductoA1, precioProductosA1);
const producto4 = new Producto(nombreProductoA1, precioProductosA1);
const producto5 = new Producto(nombreProductoA1, precioProductosA1);
//B1 
let nombreProductoB1 = "Papitas";
let precioProductosB1 = 1700;
const productoB11 = new Producto(nombreProductoB1, precioProductosB1);
const productoB12 = new Producto(nombreProductoB1, precioProductosB1);
const productoB13 = new Producto(nombreProductoB1, precioProductosB1);
const productoB14 = new Producto(nombreProductoB1, precioProductosB1);
const productoB15 = new Producto(nombreProductoB1, precioProductosB1);
//B2

let nombreProductoB2 = "Detodito";
let precioProductosB2 = 1900;
const productoB21 = new Producto(nombreProductoB2, precioProductosB2);
const productoB22 = new Producto(nombreProductoB2, precioProductosB2);
const productoB23 = new Producto(nombreProductoB2, precioProductosB2);
const productoB24 = new Producto(nombreProductoB2, precioProductosB2);
const productoB25 = new Producto(nombreProductoB2, precioProductosB2);
//B3
let nombreProductoB3 = "Choclitos";
let precioProductosB3 = 1000;
const productoB31 = new Producto(nombreProductoB3, precioProductosB3);
const productoB32 = new Producto(nombreProductoB3, precioProductosB3);
const productoB33 = new Producto(nombreProductoB3, precioProductosB3);
const productoB34 = new Producto(nombreProductoB3, precioProductosB3);
const productoB35 = new Producto(nombreProductoB3, precioProductosB3);

// Agregar listaProductosB1 a listaProductosB
const listaProductosB1 = [];
listaProductosB1.push(productoB11);
listaProductosB1.push(productoB12);
listaProductosB1.push(productoB13);
listaProductosB1.push(productoB14);
listaProductosB1.push(productoB15);
machine1.listaProductosB.push(listaProductosB1);
// Agregar listaProductosB2 a listaProductosB
const listaProductosB2 = [];
listaProductosB2.push(productoB21);
listaProductosB2.push(productoB22);
listaProductosB2.push(productoB23);
listaProductosB2.push(productoB24);
listaProductosB2.push(productoB25);
machine1.listaProductosB.push(listaProductosB2);
// Agregar listaProductosB3 a listaProductosB
const listaProductosB3 = [];
listaProductosB3.push(productoB31);
listaProductosB3.push(productoB32);
listaProductosB3.push(productoB33);
listaProductosB3.push(productoB34);
listaProductosB3.push(productoB35);
machine1.listaProductosB.push(listaProductosB3);

// Agregar productos a listaProductosA1
machine1.listaProductosA1.push(producto1);
machine1.listaProductosA1.push(producto2);
machine1.listaProductosA1.push(producto3);
machine1.listaProductosA1.push(producto4);
machine1.listaProductosA1.push(producto5);

machine1.listaProductosB.push(producto1);
machine1.listaProductosB.push(producto2);
machine1.listaProductosB.push(producto3);
machine1.listaProductosB.push(producto4);
machine1.listaProductosB.push(producto5);
}






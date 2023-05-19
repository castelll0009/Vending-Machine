class Producto {
    constructor(nombre, precio, cantidad) {
      this.nombre = nombre;
      this.precio = precio;
      this.cantidad = cantidad;
    }
  }

  // Crear el array de Productos
let listaProductos = [];

// Agregar objetos Producto al array
let producto1 = new Producto("Papitas", 1500, 3);
let producto2 = new Producto("Detoditos", 1800, 2);
let producto3 = new Producto("Choclitos", 1000, 1);
let producto4 = new Producto("Yogo-yogo", 1000, 1);
let producto5 = new Producto("BonYourt", 1000, 1);

listaProductos.push(producto1);
listaProductos.push(producto2);
listaProductos.push(producto3);
listaProductos.push(producto4);
listaProductos.push(producto5);

// Acceder a los elementos del array
console.log(listaProductos[0]); // Primer objeto Producto
console.log(listaProductos[1]); // Segundo objeto Producto

// Recorrer el array
listaProductos.forEach((producto) => {
  console.log(producto.nombre, producto.precio, producto.cantidad);
});
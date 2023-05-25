//crear instancia de Maquina
const machine1 = new VendingMachine();
machine1.inicializar_maquina();
// Imprimir la listaProductosA1
console.log("listaProductosA1:", machine1.listaProductosA1);
// Imprimir la listaProductosB
console.log("listaProductosB:", machine1.listaProductosB);
// Imprimir la listaMonedas
console.log("listaMonedas:", machine1.listaMonedasD);

//recibir Moneda
let credito = 0;
const monedaIngresada1 = new Moneda(100);
const monedaIngresada2 = new Moneda(200);
const monedaIngresada3 = new Moneda(500);
const monedaIngresada4 = new Moneda(1000);
const ingresa_100 = () => {  
    machine1.recibir_moneda(monedaIngresada1);    
}
const ingresa_200 = () => {  
    machine1.recibir_moneda(monedaIngresada2);    
}
const ingresa_500 = () => {  
    machine1.recibir_moneda(monedaIngresada3);    
}
const ingresa_1000 = () => {  
    machine1.recibir_moneda(monedaIngresada4);    
}
   

// machine1.recibir_moneda(monedaIngresada1);
// machine1.recibir_moneda(monedaIngresada2);
// machine1.recibir_moneda(monedaIngresada3);
// machine1.recibir_moneda(monedaIngresada4);

//validar Pago
const esSuficiente = machine1.validar_pago(1700,5000);
console.log(esSuficiente); // Salida: true

//entregar dulce
if(esSuficiente){
    machine1.entregar_dulce("A1"); //dulce A1 = Bebidas
}
if(esSuficiente){
    machine1.entregar_dulce("B1"); //dulce A1 = Bebidas
}

//calcular el cambio 
let cambio  =machine1.calcular_cambio(1700,5000);

//entregar cambio 
console.log("resultado cambio");
const resultadoCambio = machine1.entregar_cambio(cambio);
machine1.eliminarDenominaciones(machine1.listaMonedasD, resultadoCambio);

//mostrar el inventario de dulces
// machine1.mostrar_inventario_dulces(){
    
// }


console.log(resultadoCambio);
// Imprimir la listaMonedas
console.log("listaMonedas:", machine1.listaMonedasD);
// Imprimir la listaProductosA1
console.log("listaProductosA1:", machine1.listaProductosA1);
// Imprimir la listaProductosB
console.log("listaProductosB:", machine1.listaProductosB);
// Imprimir la listaMonedas
console.log("listaMonedas:", machine1.listaMonedasD);





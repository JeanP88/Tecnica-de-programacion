// ➢ Define una clase Coche que tenga propiedades para marca, modelo y año.
class Coche {
    constructor(marca,modelo,año){
    this.marca = marca
    this.modelo = modelo
    this.año = año
}
}
let choche1 = new Coche ("mazda",6,2024)
console.log (choche1)

//  Descripción: Escribe una función que tome un array de nombres y los transforme a mayúsculas

function transMayus(lista_names,nom_mayus) {
    for (let i = 0; i < lista_names.length; i++) {
       nom_mayus = lista_names[i].toUpperCase()
       console.log(nom_mayus)
}
}
transMayus( ["jean","pierre","gloria"])

//Descripción: Crea una función que reciba un arreglo de números y devuelva un nuevo arreglo que solo contenga los números mayores que 10

lista_N = [1,2,10,11,12,13,3,4,5,6]

function mayores_A_10(numeros) {
return numeros > 10
        
 }




let x = lista_N.filter(mayores_A_10)
console.log(x)

//Descripción: Escribe una función que imprima los primeros 10 números naturales usando un bucle while.




let numeroFinal = [10]
let i = 0
function imprimir() {
    while (i < numeroFinal) {
        i++
        console.log(i)
          
    }

}
let z = numeroFinal.map(imprimir)

//➢ Descripción: Utiliza filter y map para encontrar todos los números en un arreglo que sean mayores que 10 y luego multiplícalos por 2.

// utilize el filter del anterior ejercicio solo use una nueva funcion para multiplicar los numeros que ya tenia con el filter
function May_Mult(numer) {
    return numer*2
}
let c = x.map(May_Mult)
console.log(c)


//➢ Descripción: Implementa una función que recorra una lista hasta encontrar el número 0, momento en el que el bucle deberá terminar.
 
let lista_nueva = [1, 2, 3, 0, 4, 3, 2];

function stop0() {
    for (let i = 0; i < lista_nueva.length; i++) {
        console.log(lista_nueva[i]);
        if (lista_nueva[i] == 0) {
            break;
        }
    }
}

stop0(); 

//➢ Descripción: Crea una clase Persona que tenga propiedades para nombre, edad y un método que devuelva una descripción básica de la persona.


class Persona {
    constructor (nombre,edad){
        this.nombre = nombre
        this.edad = edad
    }
}
let descrp1 = new Persona("Jean",20)
console.log(descrp1)

// ➢ Descripción: Define una clase Libro con propiedades para título, autor, y año. Agrega un método que devuelva un string con el título y el autor del libro.
 class libro{
    constructor(titulo,autor,año){
        this.titulo = titulo
        this.autor = autor
        this.año = año
    }
 }
 let libro_1 = new libro("la venganza","jean",2003)
 console.log(libro_1.titulo,libro_1.autor)

 // ➢ Descripción: En la clase CuentaBancaria, añade propiedades privadas para titular y saldo. Usa getters y setters para modificar el saldo.
 class CuentaBancaria{
    constructor(titular,saldo){
        this.titular = titular
        this.saldo = saldo  
    }
    get saldo(){
        return this._saldo
    }
    set saldo(nuevo_saldo){
        return this._saldo = nuevo_saldo 
    }

 }
 let cuenta1 = new CuentaBancaria("Jean",200)
 console.log(cuenta1.titular)
 console.log(cuenta1.saldo)

 cuenta1.saldo = 300
 
 console.log(cuenta1.saldo)

 // Descripción: Crea una clase Utilidad que tenga un método estático que convierta grados Celsius a Fahrenheit.
 class Utilidad {
    static celcius (a){
        return a *9/5 +32
    }
    }
console.log(Utilidad.celcius(120))  

//➢ Descripción: Define una clase Empleado que herede de la clase Persona y añade una propiedad salario.
 
class Empleado extends Persona {
    constructor(nombre,edad,salario){
        super(nombre,edad);
        this.salario = salario
    }
}
let trabajador = new Empleado("jean",20,200)
console.log(trabajador)

 //➢ Descripción: Implementa una clase Coche que encapsule las propiedades marca, modelo, y kilometraje y prevenga el acceso directo a kilometraje.
class COCHE {
    constructor(marca,model,kilometraje){
        this.marca = marca;
        this.model = model;
        this._kilometraje = kilometraje
    }
    get obkm(){
        return this._kilometraje;
    }
}
let coch = new COCHE("mazda","2023",1000)
console.log(coch._kilometraje)



// ➢ Descripción: Crea una clase Tienda que contenga un array de objetos de la clase Producto. Implementa métodos para añadir, remover y buscar productos.

class Producto{
    constructor(id,nombre,precio){
        this.id = id
        this.nombre = nombre
        this.precio = precio
    }
}

class Tienda {
    constructor() {
        this.productos = [];
    }

    añadirProducto(producto) {
        this.productos.push(producto);
        console.log(`Producto ${producto.nombre} añadido.`);
    }


    removerProducto(id) {
        const index = this.productos.findIndex(producto => producto.id === id);
        if (index !== -1) {
            const productoRemovido = this.productos.splice(index, 1)[0];
            console.log(`Producto ${productoRemovido.nombre} removido.`);
        } else {
            console.log(`Producto con id ${id} no encontrado.`);
        }
    }


    buscarProducto(id) {
        const producto = this.productos.find(producto => producto.id === id);
        if (producto) {
            console.log(`Producto encontrado: ${producto.nombre}, Precio: ${producto.precio}`);
            return producto;
        } else {
            console.log(`Producto con id ${id} no encontrado.`);
            return null;
        }
    }
}
// Creo productos
let producto1 = new Producto(1, "Manzana", 0.5);
let producto2 = new Producto(2, "Naranja", 0.6);
let producto3 = new Producto(3, "Plátano", 0.7);

// añado los productos 
let tienda = new Tienda();
tienda.añadirProducto(producto1);
tienda.añadirProducto(producto2);
tienda.añadirProducto(producto3);


tienda.buscarProducto(2); 


tienda.removerProducto(1); 


tienda.buscarProducto(1); 


// Descripción: En la clase Usuario, permite que se añadan propiedades dinámicas que no están definidas en el constructor como hobbies o intereses.

class Propiedades_Dina extends Persona{
    constructor(nombre,edad){
        super(nombre,edad);
    }
    añadirPropiedad(clave, valor) {
        this[clave] = valor;
    }
    obtenerPropiedad(clave) {
        return this[clave];
    }
    eliminarPropiedad(clave) {
        delete this[clave];
    }

}
let usuario1 = new Propiedades_Dina("Carlos", 30);

// Añado las nuevas propiedades 
usuario1.añadirPropiedad("hobbies", ["leer", "correr"]);
usuario1.añadirPropiedad("intereses", ["tecnología", "viajes"]);

// accedo a las propiedades que cree 
console.log(usuario1.obtenerPropiedad("hobbies"));
console.log(usuario1.obtenerPropiedad("intereses")); 
// elimino una de la propiedades que cree
usuario1.eliminarPropiedad("hobbies");
console.log(usuario1.obtenerPropiedad("hobbies")); 

// veo si se realizo bien la eliminacion y la añadidura de los productos llamando a mi variable usuar
console.log(usuario1);

// ➢ Descripción: Define una clase Configuracion donde ciertas propiedades como nombreDeUsuario no puedan modificarse después de ser inicializadas.
class Config{
    constructor (NombreDeUsuario){
    this._NombreDeUsuario = NombreDeUsuario
    Object.freeze(this);
       
    }
}
let Configu = new Config("pedro")
console.log(Configu)
//intento 
Configu.NombreDeUsuario = "jean"
console.log(Configu)


//➢ Descripción: En la clase Persona, asegura que la edad no pueda ser menor que 0 ni mayor que 120 usando setters
class persona {
    constructor (nombre,edad){
        this.nombre = nombre
        this._edad = edad
    }
    get edad (){
        return this._edad
    }
    set edad(restriccion){
       
        if (restriccion < 0 || restriccion >=120) {
            console.log("no puede ser menor que 0 y no puede ser mayor que 120")
        }else{
            this._edad = restriccion
            console.log("su esdad esta correcta")
        }
    }
}
let descrp2 = new persona("Jean",20)
descrp2.edad = 200
console.log(descrp2.edad)

// ➢ Descripción: Implementa una clase Cadena que tenga métodos para contar número de vocales, invertir la cadena, y verificar si es un palíndromo.

class cadena {
    
     static contarVocales(contar){
        let count = 0
        for (let i = 0; i < contar.length; i++) {
            
        if (contar[i] == "a" || contar[i] == "e" || contar[i] == "i"  || contar[i] == "o" || contar[i] == "u") {
            count++;
        } 
        }
        return count
    }

        static inv_cad(inve){
            let resultado_invertido = ""
            for (let i = inve.length -1 ; i >=0  ; i--) {
                
                resultado_invertido += inve[i]
            }
            return resultado_invertido
        }


        static PALINDROMA (frase){
            frase = frase.toLowerCase().replace(/[^a-z0-9]/g, '');

            let fraseInvertida = cadena.inv_cad(frase);

            return frase === fraseInvertida;
        }

        
        
}
let nom = "Anita Lava La Tina"
let b = cadena.inv_cad(nom)
console.log(b)



// ➢ Descripción: Implementa la clase Calculadora de modo que se puedan encadenar métodos como sumar, restar, etc.

class Calculadora{
    static sumar (a,b){
    return a+b
}
    static restar (a,b){
    return a-b
    }

    static multiplicar(a,b){
        return a*b
    }
}

let v = Calculadora.multiplicar(2,2)
console.log(v)




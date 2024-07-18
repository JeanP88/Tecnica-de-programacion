// practica de ejercicios 

const { error } = require("console")
const { errorMonitor } = require("events")

// manejo de  matrtices 
function contar(matriz,elemento) {
     let contador = 0
    for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        if (matriz[i][j] === elemento) {
            contador ++
        }
        
    }
        
    }
    return contador
}


let matriz = [
    [1,2,3],
    [4,2,6],
    [7,2,9]
]
let elemento = 2
let contar_E = contar(matriz,elemento)
console.log(`el elemento ${elemento} se encuentra ${contar_E} en la matriz`);
//2. Crea una matriz de 3x3 con valores numéricos y muestra sus elementos en la
//consola.
function mostrarE(matriz) {
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
          console.log(matriz[i][j])
            
        }
        
    }
}

    

let matriz1 = [
    [1,2,3],
    [4,2,6],
    [7,2,9]
]
mostrarE(matriz1)

// 3. Multiplica todos los elementos de una matriz por un escala

function Mult(matriz) {
    for (let i = 0; i < matriz.length; i++) {
       for (let j = 0; j < matriz[i].length; j++) {
        console.log(matriz[i][j]*2);
        
       }
        
    }
}
let matriz2 = [
    [1,2,3],
    [4,2,6],
    [7,2,9]
]

Mult(matriz2)
//4. Crea dos matrices de 2x2 y calcula la suma de ambas matrices
function sumarM(matriz1, matriz2) {
    let resultado_MIG = []
    for (let i = 0; i < matriz.length; i++) {
        resultado_MIG[i]=[]
    for (let j = 0; j < matriz[i].length; j++) {
        resultado_MIG[i][j] = matriz1[i][j] + matriz2[i][j]
       
        
    }
        
    }
    return resultado_MIG
}
let matriz_IG = [
    [1,2,3],
    [4,2,6],
    [7,2,9]
]
let matriz_IG2 = [
    [1,2,3],
    [4,2,6],
    [7,2,9]
]
 let Sumar=sumarM(matriz_IG,matriz_IG2)
console.log(Sumar)
// 5. Encuentra el mayor elemento en una matriz.
function Encon_M(matriz) {
    let mayor = matriz[0][0]
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
          if (matriz[i][j] > mayor) {
            mayor = matriz[i][j]
          }
            
        }
        
    }
    return mayor
}
let matriz_May = [
    [1,2,3],
    [4,10,6],
    [7,2,11]
]
 
let encontrar_mayor = Encon_M(matriz_May)

console.log(encontrar_mayor)


// manejo del tray cath 

// //8. Intenta dividir dos números, captura la excepción si se intenta dividir por cero
function dividir(a,b) {
    try {
        if (b===0) {
            throw new Error("no se puede dividir por 0")
        }
        let resultado = a/b
        return resultado
    } catch (error) {
        return error.message
    }

}

let num1 = 7
let num2 = 0
let resultado = dividir(num1,num2)
console.log(resultado)

//9. Accede a una propiedad que no existe en un objeto, captura la excepción.
let propiedad_E = "nombre"
let propiedad_N = "id"
let objeto = {
    nombre: "jean",
    edad: 20
}
function accederP(obj,propiedad) {
    try {
        if (!(propiedad in obj)) {
            throw new Error("no existe esta propiedad")
        }
        return obj[propiedad]
    } catch (error) {
        return error.message
    }
}

let Accd = accederP(objeto,propiedad_E)

console.log(Accd)

//10. Crea una función que espera dos argumentos y llámala con solo uno. Captura la
//excepción.

function MF(arg1,arg2) {
    try {
        if (arg1 === undefined || arg2 === undefined) {
            throw new Error(" es esparan 2 argumentos ")
    
        }
        return `argumnto 1: ${arg1}  argumento 2: ${arg2}`
    } catch (error) {
        return error.message
    }
}

let mf = MF("jean","xsds")
console.log(mf)

//11. Intenta crear un objeto con una propiedad llamada class, captura la excepción
function crearO() {
    try {
        let objeto = {
            "class": "miclase" // No hay problema en usar 'class' como nombre de propiedad entre comillas
        };
    
        return objeto;
    } catch (error) {
        // Este bloque capturará el TypeError y devolverá su mensaje
        return error.message;
    }
}

let CradoO = crearO();
if (CradoO !== null) {
    console.log("Objeto creado", CradoO);
}
else {
    console.log("ocurrió un error: ", CradoO);
}

//12. Intenta acceder a un índice que está fuera del rango de un arreglo.
let array = [1,2,3,4,5]
let indice = 7
function accder (array,indice) {
    try {
        if (indice<0 || indice >= array.length ) {
            throw new Error(`el indice ${indice} se encuentra fuera de rango`)
        }
        return array[indice]
    } catch (error) {
        return error.message
    }
}

let acc = accder(array,indice)
console.log(acc)
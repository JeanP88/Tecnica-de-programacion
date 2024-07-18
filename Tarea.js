//1. Implementa una función que cuente cuántas veces aparece un elemento en una
//matriz
 function contarElemento(matriz, elemento) {
    let contador = 0;
    for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        if (matriz[i][j] === elemento) {
            contador ++;
        }
        
    }
        
    }
return contador;
}

     let matriz = [
        [1,2,3],
        [4,2,6],
        [7,0,9]
    ]
let elemento = 9
let cantidad = contarElemento(matriz,elemento)
console.log(`el elemtento,${elemento}, se encuentra ${cantidad}, en la matiz`)

//2. Crea una matriz de 3x3 con valores numéricos y muestra sus elementos en la
//consola.
function mostrarE(matiz) {
  
    for (let i = 0; i < matiz.length; i++) {
        for (let j = 0; j < matiz[i].length; j++) {
            console.log(matiz[i][j])
            
        }
    }
}
let matriz2 = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]


mostrarE(matriz2)

//3. Multiplica todos los elementos de una matriz por un escalar
function MultiEs(matiz) {
  
    for (let i = 0; i < matiz.length; i++) {
        for (let j = 0; j < matiz[i].length; j++) {
            console.log(matiz[i][j]*2)
            
        }
    }
}
let matriz3 = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]


MultiEs(matriz3)

//4. Crea dos matrices de 2x2 y calcula la suma de ambas matrices
function sumaMatrices(martriz1,matriz2){
    sumaM = []
    for (let i = 0; i < martriz1.length; i++) {
        sumaM[i] = []
       
        for (let j = 0; j < martriz1[i].length; j++) {
           sumaM[i][j] = martriz1[i][j] + matriz2[i][j]
   
        }
        
    }
    return sumaM
}
let matrizA = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
let matrizA2 = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
let matrizSuma = sumaMatrices(matrizA, matrizA2);
console.log(matrizSuma);

// 5. Encuentra el mayor elemento en una matriz.
function EncontrarM(matriz1) {
    let mayor = matriz1[0][0]
    for (let i = 0; i < matriz1.length; i++) {
        for (let j = 0; j < matriz1[i].length; j++) {
            if (matriz1[i][j]>mayor) {
                mayor = matriz1[i][j]
            }
            
        }
        
    }
    return mayor
}
let matrizM = [
    [1,2,3],
    [4,9,6],
    [7,8,9]
]
let Encontrado = EncontrarM(matrizM)
console.log(Encontrado)

//6. Crea una función que busque un elemento específico en una matriz.
function BuscarE(matriz) {
    let buscar = 9;
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if (matriz[i][j] === buscar) {
                console.log(`El elemento ${buscar} sí se encuentra en la matriz`);
                return true; 
            }
        }
    }
    console.log(`El elemento ${buscar} no se encuentra en la matriz`);
    return false; 
}

let matrizB = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let Conf_Busqueda = BuscarE(matrizB);
console.log(Conf_Busqueda); 

//7. Elimina un elemento en una posición específica de la matriz.

function Eliminar(matriz) {
    let elim_E = 1 
    let nueva_matriz = []
    for (let i = 0; i < matriz.length; i++) {
     nueva_matriz[i]=[]
        for (let j = 0; j < matriz[i].length; j++) {
           if (matriz[i][j] !== elim_E) {
            nueva_matriz[i].push(matriz[i][j])
           }
            
        }
    }
    return nueva_matriz
}
let matrizE = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
let eliminar = Eliminar(matrizE)
console.log(eliminar)

//8. Intenta dividir dos números, captura la excepción si se intenta dividir por cero
function dividirN(a,b) {
    try {
        if (b === 0) {
            throw new Error("no se puede dividir por 0")
        }
        let resulta = a/b
        return resulta
    } catch (error) {
        console.error(error.message)
        return null;
    }
}
let num1 = 10
let num2 = 5
let resulta = dividirN(num1,num2)
if (resulta !== null) {
    console.log(`el resultado de la divicion es: ${resulta}`)
}else{
     console.log(`Ocurrio un error al intetar dividir los numeros`)

}
//9. Accede a una propiedad que no existe en un objeto, captura la excepción.

function accederPropiedad(obj, propiedad) {
    try {
        if (!(propiedad in obj)) {
            throw new Error(`La propiedad '${propiedad}' no existe en el objeto`);
        }
        return obj[propiedad];
    } catch (error) {
        return error.message
    }
}

let objeto = {
    nombre: "Juan",
    edad: 30
};

let propiedadExistente = "nombre";
let propiedadNoExistente = "id";

let valorExistente = accederPropiedad(objeto, propiedadExistente);
if (valorExistente !== null) {
    console.log(`El valor de la propiedad '${propiedadExistente}' es: ${valorExistente}`);
} else {
    console.log("Ocurrió un error al intentar acceder a la propiedad existente.");
}

let valorNoExistente = accederPropiedad(objeto, propiedadNoExistente);
if (valorNoExistente !== null) {
    console.log(`El valor de la propiedad '${propiedadNoExistente}' es: ${valorNoExistente}`);
} else {
    console.log("Ocurrió un error al intentar acceder a la propiedad no existente.");
}
//10. Crea una función que espera dos argumentos y llámala con solo uno. Captura la
//excepción.
function miFuncion(arg1, arg2) {
    try {
        if (arg1 === undefined || arg2 === undefined) {
            throw new Error("Faltan argumentos. Se requieren dos argumentos.");
        }

        return `Argumento 1: ${arg1}, Argumento 2: ${arg2}`;
    } catch (error) {
        console.error(error.message);
        return null;
    }
}

let resultado = miFuncion(5,3);
if (resultado !== null) {
    console.log(`Resultado de la función: ${resultado}`);
} else {
    console.log("Ocurrió un error al intentar llamar a la función.");
}
//11. Intenta crear un objeto con una propiedad llamada class, captura la excepción
function crearObjetoConClass() {
    try {
    
        let objeto = {
            class: "MiClase"
        };
        return objeto;
    } catch (error) {
        console.error(error.message);
        return null;
    }
}

let resultadO = crearObjetoConClass();
if (resultadO !== null) {
    console.log("Objeto creado exitosamente:", resultadO);
} else {
    console.log("Ocurrió un error al intentar crear el objeto.");
}

//12. Intenta acceder a un índice que está fuera del rango de un arreglo.
function accederIndiceArreglo(arr, indice) {
    try {
        if (indice < 0 || indice >= arr.length) {
            throw new Error("Índice fuera del rango del arreglo");
        }
        return arr[indice];
    } catch (error) {
        console.error(error.message);
        return null;
    }
}

let arreglo = [1, 2, 3, 4, 5];
let indice = 5;


let resultadP = accederIndiceArreglo(arreglo, indice);
if (resultadP !== null) {
    console.log(`El valor en el índice ${indice} es: ${resultadP}`);
} else {
    console.log("Ocurrió un error al intentar acceder a un índice válido.");
}
//13. Intenta abrir un archivo que no existe y captura la excepción.
const fs = require('fs');

function leerArchivo(ruta) {
    try {
        // Intentar leer el archivo
        let data = fs.readFileSync(ruta, 'utf8');
        return data;
    } catch (error) {
        console.error(`Error al intentar abrir el archivo: ${error.message}`);
        return null;
    }
}

let rutaArchivo = 'archivoInexistente.txt';

let contenido = leerArchivo(rutaArchivo);
if (contenido !== null) {
    console.log(`Contenido del archivo: ${contenido}`);
} else {
    console.log("Ocurrió un error al intentar abrir el archivo.");
}

//14. Utiliza fetch con una URL inválida y maneja la excepción
async function realizarSolicitud(url) {
    try {
        let respuesta = await fetch(url);
        
        if (!respuesta.ok) {
            throw new Error(`Error en la solicitud: ${respuesta.status} ${respuesta.statusText}`);
        }

        let datos = await respuesta.json();
        return datos;
    } catch (error) {
        console.error(`Ocurrió un error al intentar realizar la solicitud: ${error.message}`);
        return null;
    }
}

let urlInvalida = "https://ejemplo.de.url.invalida";

realizarSolicitud(urlInvalida).then((datos) => {
    if (datos !== null) {
        console.log("Datos recibidos:", datos);
    } else {
        console.log("No se pudo obtener datos debido a un error.");
    }
});
//15. Crea una función que sume todos los elementos de cada fila de una matriz y devuelva un arreglo con los resultados
function sumarFilasMatriz(matriz) {
    let resultados = [];
    
    for (let i = 0; i < matriz.length; i++) {
        let sumaFila = 0;
        for (let j = 0; j < matriz[i].length; j++) {
            sumaFila += matriz[i][j];
        }
        resultados.push(sumaFila);
    }
    
    return resultados;
}

// Ejemplo de uso:
let matrizz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let resultados = sumarFilasMatriz(matrizz);
console.log(resultados);  

//16. Encuentra el mayor elemento por columna en una matriz
function encontrarMayorPorColumna(matriz) {
    // Obtener el número de filas y columnas de la matriz
    let filas = matriz.length;
    let columnas = matriz[0].length; // Suponiendo que todas las filas tienen la misma longitud
    
    // Inicializar un array para almacenar los máximos por columna
    let maximosPorColumna = new Array(columnas).fill(Number.NEGATIVE_INFINITY);
    
    // Iterar sobre cada columna
    for (let col = 0; col < columnas; col++) {
        // Iterar sobre cada fila en la columna actual
        for (let fila = 0; fila < filas; fila++) {
            // Actualizar el máximo si encontramos un nuevo máximo en esta columna
            if (matriz[fila][col] > maximosPorColumna[col]) {
                maximosPorColumna[col] = matriz[fila][col];
            }
        }
    }
    
    return maximosPorColumna;
}
let matrizEjemplo = [
    [1, 5, 9],
    [3, 7, 2],
    [4, 6, 8]
];

let resultadoo = encontrarMayorPorColumna(matrizEjemplo);
console.log("El mayor elemento por columna es:", resultadoo); 


//7. Crea una función que sustituya todos los valores pares de una matriz por el valor -1
function sustituirParesPorMenosUno(matriz) {
    // Crear una copia de la matriz para no modificar la original
    let matrizSustituida = matriz.map(row => [...row]);
    
    // Iterar sobre cada elemento de la matriz
    for (let i = 0; i < matrizSustituida.length; i++) {
        for (let j = 0; j < matrizSustituida[i].length; j++) {
            // Verificar si el elemento es par
            if (matrizSustituida[i][j] % 2 === 0) {
                matrizSustituida[i][j] = -1; // Sustituir por -1 si es par
            }
        }
    }
    
    return matrizSustituida;
}


let matrizJ = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let matrizSustituida = sustituirParesPorMenosUno(matrizJ);
console.log("Matriz original:", matrizJ);
console.log("Matriz con pares sustituidos por -1:", matrizSustituida);

//18. Calcula el promedio de cada fila en una matriz

function calcularPromedioPorFila(matriz) {
    // Crear un array para almacenar los promedios de cada fila
    let promedios = [];
    
    // Iterar sobre cada fila de la matriz
    for (let i = 0; i < matriz.length; i++) {
        let fila = matriz[i];
        let suma = 0;
        
        // Iterar sobre cada elemento de la fila y sumarlos
        for (let j = 0; j < fila.length; j++) {
            suma += fila[j];
        }
        
        // Calcular el promedio de la fila
        let promedio = suma / fila.length;
        
        // Agregar el promedio al array de promedios
        promedios.push(promedio);
    }
    
    return promedios;
}

let matriZ = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let promediosPorFila = calcularPromedioPorFila(matriZ);
console.log("Promedio de cada fila:", promediosPorFila);

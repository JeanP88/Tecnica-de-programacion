//TAREA TECNICAS DE PROGRAMACION/*
/*1. Crea una función nombrada que sume dos números.*/
function suma(a,b) {
     return a + b;
}
console.log(suma(2,2));


/*2. Escribe una función nombrada que reste dos números.*/
function resta(a,b) {
     return a-b;
}
console.log(resta(5,3));
/*3. Desarrolla una función nombrada que multiplique dos números.*/
function multiplicacion(a,b) {
     return a*b;
}
console.log(multiplicacion(5,5));
/*4. Implementa una función nombrada que divida dos números.*/
function divicion(a,b) {
     return a/b;
}
console.log(divicion(10,2));

/* 5. Diseña una función nombrada que calcule el módulo de dos números.*/


let modulo = function (a,b) {
     return a % b;
}
console.log(modulo(10,3));


/* 6. Asigna una función anónima a una variable que eleve un número al cuadrado.*/
let Elevar = function (a) {
     return a**2;
}
console.log(Elevar(5));

/*  Usa una función anónima para convertir grados Celsius a Fahrenheit.*/
let Conversor = function(C) {
     return (C *9/5)+ 32
}
console.log(Conversor(3))

/* 8. Crea una función anónima que calcule el perímetro de un rectángulo.*/
let perimetro = function(L,A) {
     return L*2+A*2
}
console.log(perimetro(18,12))
/*9. Implementa una función anónima que determine si un número es par o impar*/
let Par_impar = function(a) {
     if (a % 2 == 0) {
          return `el número ${a} es par`;
     } else {
          return `el número ${a} es impar`;
     }
}
console.log(Par_impar(5));

/* 10. Escribe una función anónima que devuelva el número mayor entre dos números */

let mayor = function (n,n1) {
     if (n < n1) {
          return `el mayor es ${n1}`
     }
     else{
          
          return `el mayor es ${n}`
     }

}
console.log(mayor(7,9))

/*11. Desarrolla una función flecha que calcule el área de un círculo.*/
let area = (radio) => Math.PI*radio**2;
console.log(area(5)) 


/*12. Crea una función flecha que convierta kilómetros a millas.*/
let kilm_millas = (kilometros) => kilometros/1.609
console.log(kilm_millas(1000))


/*13. Escribe una función flecha que retorne el nombre completo dado un nombre y apellido.*/
let NomCompleto = (nombre,apellido) => nombre + apellido
console.log( NomCompleto(" Jean"," Vivanco"))

/* 14. Implementa una función flecha que verifique si un texto contiene la letra 'a'.*/
let verificar_A = (text) => text.includes("a")
console.log(verificar_A("hola"))
/*15. Diseña una función flecha que cuente cuántos elementos en un array son números*/
let Num_array = (lista) => lista.filter((nuevalista) => typeof nuevalista == "number").length
console.log(Num_array([1,2,3,4,"pedro","hola"]))
/* 16. Escribe una función de orden superior que tome una función y la aplique a todos los
elementos de un array.*/
let aplicar = (lista,funcion) => lista.map(funcion)
console.log(aplicar([1,2,3,4],(nuevo) => nuevo*2))
 /*17. Crea una función de orden superior que filtre elementos de un array basándose en una
condición dada */
let filtrar = (lista,condicion) => lista.filter(condicion)  
console.log(filtrar([1,2,3,4,5,6],(nuevo)=> nuevo % 2 ==0))
/* 18. Desarrolla una función de orden superior que retorne una nueva función
incrementadora*/
let incre = (lista,funcion) => lista.map(funcion)
console.log(incre([1,2,3,4,5], (nuevo) => nuevo +1))
/* 19. Implementa una función de orden superior que tome dos funciones como argumentos
y elija una para ejecutar basada en una condición */
function elegir(funcion1, funcion2, condicion) {
     return condicion ? funcion1() : funcion2();
 }
 
 function saludar() {
     console.log("¡Hola!");
 }
 
 function despedirse() {
     console.log("¡Adiós!");
 }
elegir(saludar, despedirse,false); 
 
/*20. Diseña una función de orden superior que modifique un objeto utilizando otra función
proporcionada*/
let aplicarFuncion = (objeto, funcion) => funcion(objeto);
let persona = { nombre: "Jean", edad: 20 };
console.log(aplicarFuncion(persona, (persona) => persona.edad = 21));
/*21. Define una función constructora para un objeto "Coche" que tenga propiedades como
marca, modelo y año */

function consecionaria (marca,modelo,año){
     this.marca = marca
     this.modelo = modelo
     this.año = año
}
let carro_1 = new consecionaria("Ferrari","296GT","2024")
let carro_2 = new consecionaria("Chevrolet", "Corvet","2024")
console.log(carro_2)

/*22. Crea una función constructora para un objeto "Libro" con propiedades de autor, título
y año de publicación. */

function Libro(Autor,Titulo,AñoP) {
     this.Autor = Autor
     this.Titulo = Titulo
     this.AñoP = AñoP

}
let libro1 = new Libro("Juan","La Aventura","2000")

console.log(libro1)

/*23. Implementa una función constructora que cree objetos "Usuario" con nombre, correo
electrónico y contraseña.*/
function Usuario(Nombre,Correo,Contraseña) {

     this.Nombre = Nombre
     this.Correo = Correo
     this.Contraseña = Contraseña

}
let usuario1 = new Usuario("Pedro","Pedro@gmail.com","Pedrito123")
console.log(usuario1)

/* 24. Escribe una función constructora para "Producto" con propiedades de nombre, precio y
cantidad.*/
function Producto(Nombre,Precio,Cantidad) {

     this.Nombre = Nombre
     this.Precio = Precio
     this.Cantidad = Cantidad

}
let producto1 = new Producto("Guineo","3.99","3")
console.log(producto1)

/* 25. Desarrolla una función constructora que inicialice objetos "Estudiante" con nombre,
matrícula y carrera.*/

function Estudiante(Nombre,Matrucula,Carrera) {
     this.Nombre = Nombre
     this.Matricula = Matrucula
     this.Carrera = Carrera
}
let Estudiante1  = new Estudiante ("Jean","2022-2024","Ing Software")
console.log(Estudiante1)

/* 26. Escribe una función recursiva para calcular el factorial de un número*/
function Factorial(N) {
     if ( N == 0) {
          return 1
     }
     else{
          return N * Factorial(N-1)
     }
}
console.log(Factorial(5))

/*27. Crea una función recursiva que sume todos los números hasta un número dado.*/
function suma(n) {
     if (n ==0) {
          return 1
     }
     else{
          return n+Factorial(n-1)
     }
}
console.log(suma(4))
/* 28. Implementa una función recursiva que encuentre el máximo común divisor (MCD) de
dos números. */
function MCD(a,b) {
     if (b == 0) {
          return a
     }
     else{
          return MCD(b,a%b)
     }
}
console.log(MCD(12,18))

/* 29.  Diseña una función recursiva que genere la secuencia de Fibonacci hasta un número
específico.  */

function fibonacciHastaLimite(limite, secuencia = [0, 1]) {
     const siguienteNumero = secuencia[secuencia.length - 1] + secuencia[secuencia.length - 2];
     
     if (siguienteNumero > limite) {
         return secuencia;
     } else {
         secuencia.push(siguienteNumero);
         return fibonacciHastaLimite(limite, secuencia);
     }
 }
 const limite = 50; 
 const resultado = fibonacciHastaLimite(limite);
 console.log("Secuencia de Fibonacci hasta el número", limite, ":", resultado);


 /*30. Desarrolla una función recursiva que invierta una cadena de texto. */
 function texto(frase,fraseinver)
     {
          if (frase.length == 0) {
          return fraseinver;
          }
          else{
          fraseinver = frase[0] + fraseinver;
          return texto(frase.substr(1),fraseinver)
          }
     }
     console.log(texto("hola",""));


     /*31. Demuestra el uso de una variable global modificándola dentro de una función */
     x = 5
     function camviar(x) {
     x = x + 5
     return x
}
     console.log(camviar(x))



/*32. Escribe un código donde una variable local oculte una variable global del mismo nombre. */
let variableGlobal = "Hola";
function ocultarVariableGlobal() {
     let variableGlobal = "Adiós"; 
     return variableGlobal;
 }
 console.log(ocultarVariableGlobal());
 console.log(variableGlobal); 


      
/* 33. Explica mediante un ejemplo cómo las variables locales pueden evitar conflictos de
nombres. */
// Función que calcula el área de un rectángulo
function calcularArea(base, altura) {
     var area = base * altura; // La variable 'area' es local a esta función
     return area;
 }
 
 // Función que calcula el perímetro de un rectángulo
 function calcularPerimetro(base, altura) {
     var perimetro = 2 * (base + altura); // La variable 'perimetro' es local a esta función
     return perimetro;
 }
 console.log(calcularArea(5,5))
 console.log(calcularPerimetro(5,5))

 /* 34. Implementa un contador utilizando una variable global */
 let i = 0;
     function contador() {
          if (i = 3) {
               return i;
          }
          else{
          i = i + 1;
          }
         }
     console.log(contador());

     /*35. Crea una función que intente modificar una variable local definida en otra función. */
     function modificarVariableLocal() {
          var VariableLocal = "Hola";
          return VariableLocal;

      }

      
      function intentarModificarVariableLocal() {
          VariableLocal = "Adios"; 
          return VariableLocal;

      }
          console.log(modificarVariableLocal());
          console.log(intentarModificarVariableLocal());

      /*36. Escribe una función que determine si un año es bisiesto.   */
      function añoBisiesto(año) {
          if ((año % 4 == 0 && año % 100 != 0) || año % 400 == 0) {
              return `El año ${año} es bisiesto`;
          } else {
              return `El año ${año} no es bisiesto`;
          }
      }
      
      console.log(añoBisiesto(2021)); 


      /*37. Implementa una función que evalúe tres números y retorne el mayor  */
      
      function mayo(n1, n2, n3) {
          if (n1 > n2 && n1 > n3) {
              return `el mayor es ${n1}`;
          } else if (n2 > n1 && n2 > n3) {
              return `el mayor es ${n2}`;
          } else {
              return `el mayor es ${n3}`;
          }
      }
      
      console.log(mayo(1, 4, 6));

      /*38. Diseña una función que decida si un estudiante aprueba o reprueba basado en su nota.  */
      function Aprobar(NotaEstudiante) {
          if (NotaEstudiante >= 7) {
               return `el estudiantes esta aprobado con la nota de ${NotaEstudiante}`
          }
          else{
               return `el estudiante esta reprobado con la nota de ${NotaEstudiante}`
          }
      }
      console.log(Aprobar(7))
      
      

      /*39. Crea una función que clasifique una edad en categorías (niño, adolescente, adulto,anciano).  */
      function Clasificar_Edad(edad) {
          if (edad <=13) {
               console.log(" Niño")
          }else if (edad >13 && edad <= 17) {
               console.log("Adolecente")
          }else if (edad > 17 && edad <= 70) {
               console.log("Adulto")
          }else {
               console.log("Anciano")
          }
      }
      Clasificar_Edad(80)




      /* 40. Desarrolla una función que verifique si un usuario tiene acceso basado en su edad.*/
      function Acceso(Usuario) {
          if (Usuario >= 18) {
               console.log("tiene acceso")
          }
          else{
               console.log("no tiene acceso")
          }
      }
Acceso(18)

     /* 41. Escribe un bucle while que cuente de 1 a 100.  */
     i = 0
      while (i < 100) {
          console.log(i)
          i++
      }
      


      /*42. Implementa un bucle while que sume los primeros 50 números naturales.   */
      contado = 0
      i = 0
      while (i <= 50) {
          
      contado = contado + i
      i++
      }
      console.log(contado)

      /*43. Crea un bucle while que repita un saludo hasta que el usuario decida parar.  */

      let continuar = true;

      while (continuar) {
          let entrada = prompt("Ingrese algo (o escriba 'parar' para detener):");
      
          if (entrada.toLowerCase() === "parar") {
              continuar = false;
              console.log("Adios");
          } else {
              console.log("Hola");
          }
      }
      /*44. Desarrolla un bucle while que encuentre el primer número divisible por 7 en un rango.  */
      
     let lista = [1,2,3,4,5,6,7,8,9,10]
     i = 0
  while (i < lista.length) {
     i++
     if (lista[i] % 7 == 0) {
          console.log(lista[i])
     }
     }
     /*45. Diseña un bucle while que verifique la entrada del usuario hasta que sea válida.   */

     let verificar = true
     while (verificar) {
   
          let entrada = prompt("Ingrese su edad si no es mayor de edad no entra")
          if (entrada.toLowerCase() > 18) {
               console.log("Su entrada es valida ")
               break
          } else{console.log("Usted no puede entrar")
          }
     }
     /*46. Escribe una función que use switch para asignar calificaciones (A, B, C, D, F) basado en puntos*/
     let nota = 9;

     switch (true) {
         case nota >= 1 && nota <= 9:
             console.log("F");
             break;
         case nota >= 10 && nota <= 19:
             console.log("D");
             break;
         case nota >= 20 && nota <= 29:
             console.log("C");
             break;
         case nota >= 30 && nota <= 39:
             console.log("B");
             break;
         case nota >= 40 && nota <= 50:
             console.log("A");
             break;
         default:
             console.log("Nota fuera de rango.");
     }
     
     //  47. Implementa una función que use switch para responder a diferentes comandos de un chatbot.
     let pregunta = "hola"
     switch (pregunta) {
          case pregunta = "hola":
               console.log("Hola como estas en que puedo ayudarte")
               break
          case pregunta = "como estas":
                console.log("Bien i Tu ")
               break;
     
          default:
               console.log("Bueno un placer ayudarte")
               break;
     }

          //48. Crea un switch para manejar diferentes tipos de métodos de pago (efectivo, tarjeta, cheque).
          console.log("Eliga los uno de los diferentes metodos de pago: (efectivo),(tarjeta),(cheque)")

          let metodo = "cheque"
          switch (metodo) {
               case metodo = "efectivo":
                    console.log("Eliguio el metodo de pago Efectivo")
                    break;
               case metodo = "tarjeta":
                    console.log("Eliguio el metodo de pago por Tarjeta")
                    break
               case metodo = "cheque":
                    console.log("Eliguio el metodo de pago Cheque")
                    break
          
               default:
                    console.log("No a seleccionado un metodo de pago")
                    
          }

         // 49. Desarrolla una función que utilice switch para realizar cálculos básicos (+, -, *, /)
          function Operaciones(a,b,respuesta){
               let Eleguir = "Suma"
               switch (Eleguir) {
                    case Eleguir = "Suma":
                        respuesta = a + b
                    console.log(respuesta)
                    break;
                    case Eleguir = "resta":
                         respuesta = a-b
                          console.log(respuesta)
                          break;
                    case Eleguir = "mult":
                         respuesta = a*b
                         console.log(respuesta)
                         break;
                    case Eleguir = "div":
                         respuesta = a/b
                         console.log(respuesta)
                         break;
                                   
                    default:
                         console.log("no a eleguido ninguna opcion ")
                         break;
               }
          }
          Operaciones(5,5)




     //50. Diseña un switch para cambiar entre diferentes idiomas de un sitio web
          console.log("Pudes alternar el idioma entre Español(Esp),Ingles(ing),Italiano(Itali)")
     let Cidioma = ""
     switch (Cidioma) {
          case Cidioma = "Esp":
               console.log("Has eleguido el idioma Español")
               break;
          case Cidioma = "ing":
          console.log("you have selected the English language")
               break;
          case Cidioma = "Itali":
               console.log("hai selezionato la lingua italiana")
               break;
          default:
               console.log("No has seleccionado ningun idioma para cambiar")
               break;
     }
     // 51. Implementa un bucle for que imprima todos los elementos de un array.
     lista = [1,2,3,4]
     for (let i = 0; i < lista.length; i++) {
          console.log(lista[i])
          
     }
     //52. Escribe un bucle for que multiplique todos los elementos de un array
     lista = [1,2,3,4,5,6,7,8,9,10]
     let resp = []
     for (let i = 0; i < lista.length; i++) {
        resp = lista[i]*2
        console.log(resp)
     }

     //53. Crea un bucle for para encontrar el menor número en un array
      lista = [110, 22, 33, 44, 55, 69, 76, 87, 98, 100];
     let res = lista[0]; // Comenzamos asumiendo que el primer elemento es el menor
     
     for (let i = 0; i < lista.length; i++) {
         if (lista[i] < res) {
             res = lista[i]; // Si encontramos un número menor, actualizamos nuestra variable del menor número
         }
     }
     
     console.log("El número menor en el array es:", res); 

     //54. Desarrolla un bucle for para verificar si un array contiene un elemento específico.

     lista = [1,2,3,1,4,]
     let buscar = 2
     const nuevoarray = lista.filter(elemento => elemento === buscar)
     nuevoarray.forEach(nuevoarray => {
     console.log(nuevoarray)
});
     if (nuevoarray == 0){
     console.log("no se encontraron numeros que busque")
     }

// 55. Diseña un bucle for que copie un array en otro
lista = [ 1,2,3]
const nuevalista = lista.map(elemento => elemento)
console.log(nuevalista)

     //56. Utiliza un bucle do-while para pedir al usuario que ingrese un número hasta que sea mayor que 10.
     let numeros;

     do {
         numeros = parseInt(prompt("Ingrese un número mayor a 10:"));
     } while (numeros <= 10 && numeros !== null && !isNaN(numeros));
     
     console.log("Su número ingresado: " + numeros);


//57. Implementa un for-in para mostrar todas las propiedades de un objeto.
persona = {
     nombre: "Juan",
     edad: 30,
     ciudad: "Madrid"
 };
 for (const nuevop in persona) {
     console.log(nuevop,":",persona[nuevop])
 }

 //58. Usa un for-of para iterar sobre un array de nombres y saludar a cada uno.//
 let nombres = ['Juan', 'María', 'Pedro', 'Ana'];

 for (const nombre of nombres) {
   console.log( "hola",nombre);
 }
 


//59. Crea un forEach para aplicar un descuento del 10% a precios en un array.//

let precios = [100, 200, 300];
let descuentos = [];

precios.forEach((precio) => {
  descuentos.push(precio * 0.10);
});

console.log("Los descuentos son:", descuentos);

//60. Escribe un código que use map para convertir todas las temperaturas de un array de Celsius a Fahrenheit//

let gradosc = [100, 200];

function conversor(grados) {
  return (grados * 9 / 5) + 32;
}

let x = gradosc.map(conversor);

console.log(x);



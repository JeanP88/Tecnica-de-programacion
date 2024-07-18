//  1. implementa una funcion flecha que verifique si un texto contiene la letra a //
let verifique = (contiene) => {
    if (contiene.includes ("a")) {
        return "si contiene la letra a el texto"
    }
    return "no contien la letra a"
}
let tex = "jensjsjdan"
let z = verifique(tex)
console.log(z)



//2. crea una funcion constructora para un objeto libro con propiedades de autor, titulo, y año de publicacion//

function libro(autor,titulo,año) {
    this.autor = autor
    this.titulo = titulo
    this.año = año
}
let libro1 = new libro("jean","la venganza",2004)
console.log(libro1)

//3.Escribe una funcion de orden superior que tome una funcion y filtre los numeros pares   //
function parrs(pares) {
    return pares % 2 == 0
 
}
let num = [1,2,3,4,5]
let c = num.filter(parrs)
console.log(c)

// 4. Emplee funciones de orden superior para filtrar nombres de 4 o mas caracteres.  lista_names=["Ana","Maria","Pedro","Juan"]   //
function fil(nombres) {
    return nombres.length >= 4
}
lista_names=["Ana","Maria","Pedro","Juan"]
let v = lista_names.filter(fil)
console.log(v)
// 5. Elaborar un algoritmo que me permita ingresae una palabra y presentarla inversa    //
let nombre = "jean"
function iv(inversa, nuevainversa) {
    nuevainversa = ""
for (let i = inversa.length -1; i >= 0; i--) {
    nuevainversa += inversa[i]
}
return nuevainversa
}
let b =iv(nombre)
console.log(b)



//en la clase persona posee propiedades nombre,apellido,edad y asegura que la edad no pueda ser menor que 0 mi meyor que 120 usando setters

class propiedades{
    constructor(nombre,apellido,edad){
        this._nombre = nombre
        this._apellido = apellido
        this._edad = edad

    }
    get edad(){
        return this._edad
    }
    set edad (nuevaedad){
        if (nuevaedad <0 || nuevaedad >=120) {
         console.log("su edad no puede ser menor que 0 ni mayor q 120")
        } else{
            return this._edad = nuevaedad
        }
    }
}

let nv_propiedead = new propiedades ("jean","vivanco",6)

console.log(nv_propiedead)
nv_propiedead.edad = -1
console.log(nv_propiedead.edad)


// implementa una clase Cadena que tenga metodos para invertir la cadena
class cadena {
     inver(Palabra){
        let nueva_palabra = ""
        for (let i = Palabra.length -1 ; i >=0; i--) {
            nueva_palabra += Palabra[i]
        }
        return nueva_palabra
    }
}
let cade = new cadena()
let nomB = "jean"
let m = cade.inver(nomB)
console.log(m)
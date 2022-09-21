// para mostrar info

console.log("Un texto")
console.log(3*2)
console.log("mañana es",21+1,"de septiembre")
console.log("mañana es"+21+1+"de septiembre")//si no le pongo la coma concatena toda la serie de valores, no realiza la suma
console.info(3)
console.warn("texto de alerta")
console.error("text ode error")
// alert("pop-up hola mundo")

document.write("hola desde JS")

// Otras alertas

console.log("este es el número",3)
console.log("Este es el resultado de 3-4:",3-4)//con la coma interpreta que es una operación matemática
console.log("Este es el resultado de 3+4:",3+4)

// VARIABLES

var alumno = "Damian"

console.log(alumno)

//let alumno = "pepe"//con let, reservas la palabra nomrbe de la variable....jeuga como uan constante....vabiables ya no se usan ????
// con esto rompo todo
 console.log(alumno)

 var nota = 10
const entidad = "Buenos Aires Ciudad"

//entidad = "Nacion"

console.log("El nombre del alumo es "+ alumno +" y su nota es "+nota)

var dato = 36
console.log(typeof(dato))
dato = "pepe"
console.log(typeof(dato))
dato = true
console.log(typeof(dato))
dato = (36+4)*2/3.1
console.log(typeof(dato))


// Buenas practicas para varaibles 

let nombreApeliido = "Juan Carlos" //camelCase cuando cambio de palabra cambio a mayus para no yusar guiuones ni espacios
let User = "Juan Carlos"//Mayuscula a la entrada
let _usuario
let $usuario
let nombre_apellido = "Sneak Case" //snake case uso guines bajos para separa palabras
let NombreApellido = "Pascal Case" //cada palabra empieza con mayuscula

//let 1nombre // no puedo mezclar con numeros al principio
//let nombre-apellido //no se puede usar guion medio lo toma como resta
/* let var
let super
let break
let this 
no puedo usar ninguna de estas porque son PALABRAS RESERVADAS DE JS*/

// TIPOS DE STRINGS 

let str1="String entre comilals dobrles"
let str2='String entre comillas simplres'
let str3=`bactiks` //comillas raras

console.log (str1+" y "+str2)

let str4= str1+" y "+str2

console.log(str4)



// Operaciones básicas 

// let num1=2
// let num2=3
// podria ingresarlos por teclado 

// pero para que no lo tome como string lo convierto con pasrseINT (no permite numerao con coma)
// puedo usar floats con parseFloat

let num1 = parseFloat(prompt("Ingrese el primer número"))
let num2 = parseFloat(prompt("Ingrese el segundo número"))


console.log(num1+num2)

let suma= num1+num2

console.log(suma)

let resta= num1-num2

console.log(resta)

let multi= num1*num2

console.log(multi)

let div= num1/num2

console.log(div)


/*
  en typescript se pueden declarar variables con 
  tipos de datos(primitivos o compuestos) con la siguiente istrucción:
    let variable: type <- aca solo se declara la variable con su tipo de dato(type)
    let variable: type = value <- aca se declara e inicializa la variable con un tipo de dato(let variable: type) y valor(=value)
    let variable = value <- donde value puede ser cualquier tipo de dato admitido, y luego de inicializado no puede cambiar su tipo de dato ej: declarar un number y en la linea siguiente asignar un string
  tambien se puede utilizar const en lugar de let

  RECORDATORIO:
  los tipos primitivos en javascript son: string | number | boolean | null | undedfined | NaN 
  los tipos compuestos son: object | array | function | class | etc...
*/

// let x: number; // <- se declara explicitamente x con el tipo de dato number
// let y = 1; // <- se declara el tipo de dato number a la variable asignadole un numero
// let z; // <- se declara la variable sin tipo de dato, typescript le asigna el tipo de dato any por defecto, esto quiere decir que: la variable puede tomar cualquier tipo de dato existente

/*
  NOTA: cuando se le declara la variable con el tipo de dato, esta solo aceptara ese tipo de dato y dara error si trata de asignarle un tipo diferente
*/ 
// x = 'one'
// y = 'two'

// z = 1
// z = 'one' // <- en este caso al tener z un tipo de dato any la variable puede ser de cualquier tipo, esto debido a que any puede ser cualquier valor en javascript sin restricciones


/* Tipos primitivos en typescript */
// // boolean:
// let flag: boolean;
// let yes = true
// let no = false

// // Tipos numericos(number) y BigInteger
// let x: number;
// let y = 0
// let z: number = 10
// // let big: bigint = 100n

// // Tipo cadena o string

// let str: string
// let strEmpty = ""
// let abc = 'abc'

// let username: string = 'Bluedev'
// let  sentence: string = `my nickname is: ${username}
// and I'm learning typescript.`
// console.log(sentence)

/*
Los tipos void, null y undefined
JavaScript y TypeScript tienen dos valores primitivos que se usan para indicar un valor ausente o con inicialización anulada: null y undefined.
*/ 

// Tipo de dato enums
// los enums empiezan enumerados desde 0 hasta n pero se le puede especificar el numero de inicio
enum ContractStatus {
  Permanent,
  Temp,
  Apprentice
}

let employeeStatus: ContractStatus = ContractStatus.Temp
console.log(employeeStatus) // devuelve el index de la propiedad del enum

console.log(ContractStatus[employeeStatus]) // esto devuelve el nombre de la propiedad del enum

// Tipo any
// let randomValue: any = 10
// randomValue = true
// randomValue = 'Mateo'

// console.log(randomValue.name);  // Logs "undefined" to the console
// randomValue();                  // Returns "randomValue is not a function" error
// randomValue.toUpperCase();      // Returns "randomValue is not a function" error

// Tipo unknown
// let randomValue: unknown = 10;
// randomValue = true;
// randomValue = 'Mateo';

// console.log(randomValue.name);  // Error: Object is of type unknown
// randomValue();                  // Error: Object is of type unknown
// randomValue.toUpperCase();      // Error: Object is of type unknown

// Tipo de union (|)

let multiType: boolean | number;

multiType = true
multiType = 20
// multiType = 'string'

const add = (x: number | string, y: number | string) => {
  if((typeof x === 'number') && (typeof y === 'number')) {
    return x + y;
  }
  if (typeof x === 'string' && typeof y === 'string') {
    return x.concat(y)
  }
  throw new Error("Parameters must be a number or string");
}

console.log(add(2, 2)) // OK
console.log(add('one', 'two')) // OK 
console.log(add('one', 2)) // Returns a error


// Tipo Interseccion (&)
interface Employee {
  employeeID: number
  age: number
}

interface Manager {
  stackPlan: boolean
}

type ManageEmployee = Employee & Manager;

let newManager: ManageEmployee = {
  employeeID: 12345,
  age: 34,
  stackPlan: true
}

type ofice = {
  tools: string
  position: string
}

type person = {
  username: string
  lastname: string
  age: number
}

type oficePerson = person & ofice;

let employeeOfice: oficePerson = {
  username: 'bluedev',
  lastname: 'developer',
  age: 27,
  tools: 'computer, desktop',
  position: 'Programing'
}

// Tipos literales

// type dificulty = "Easy" | "Medium" | "Hard"

// let game: dificulty = 'Easy'
// let play: dificulty = 'Medium'
// let profesional: dificulty = 'Profesional'


// type numbers = 1 | 2 | 3 | 4 | 5

// let anyVariable: numbers = 5
// let anyVariable2: numbers = 4
// let anyVariable3: numbers = 6

// Tipos de Colecciones en typescript 

// Matrices o Arrays 
// Se pueden declarar de dos maneras
  // 1. let variableName: type[]
  let numbers: number[] = [
    1,2,3,4,5,6,7,8,9,0
  ]
  // 2. let variableName:Array<type>

  let users:Array<string> = [
    'Alejandro', 'Pedro', 'Jonh', 'Carlos'
  ]

// Tuplas o tuples
let user: [string, number]

user = ['Pedro', 30]
// user = ['pedro', 29, true]
// user = [30, 'Pedro']
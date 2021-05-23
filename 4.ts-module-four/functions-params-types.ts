/***
 * - message tiene implícitamente un tipo any  
 * - y su return es implicitamente un tipo void
******/
// function displayAlert(message) {
//   alert('The message is ' + message)
// }

/***
 * - message tiene explicitamente un tipo string o(|) un tipo number
 * - y su return es implicitamente un tipo void
******/
function alertDisplay(message: string | number) {
  alert('The message is ' + message)
}

alertDisplay('mensaje')
alertDisplay(60)

/***
 * - input tiene explicitamente tipo de valor arreglo de numbers(number[])
 * - y su return es implicitamente un tipo void
******/
function sumar(input: number[]) {
    let total =  0;
    for(let count = 0; count < input.length; count++) {
        if(isNaN(input[count])){
            continue;
        }
        total += Number(input[count]);
    }
    return total;
}

console.log(sumar([
  5,6,7,8,9,0
]))

/***
  Parámetros obligatorios
  Todos los parámetros de función son necesarios, a menos que se especifique lo contrario, y el número de argumentos pasados a una función debe coincidir con el número de parámetros necesarios que espera la función.
** */

function obligatoryParams (x: number, y: number): number {
   return x + y;
}

obligatoryParams(1, 2); // Returns 3
// obligatoryParams(1);    // Returns an error

/***
 * Parámetros opcionales
  Los parámetros de ruta se pueden convertir en opcionales si se anexa un signo de interrogación (?) al final del nombre del parámetro.
  En este ejemplo, x es necesario y y es opcional. 
***/

// function optionalParams(x: number, y?: number): number {
//   return x + y; 
// }


// optionalParams(1, 2); // Returns 3
// optionalParams(1);    // Returns 1

/**
 * Parámetros predeterminados
  También puede asignar valores predeterminados a los parámetros opcionales. Si se pasa un valor como argumento al parámetro opcional, se le asignará ese valor. De lo contrario, se le asignará el valor predeterminado. Al igual que con los parámetros opcionales, los parámetros predeterminados deben aparecer después de los parámetros necesarios en la lista de parámetros.

  En este ejemplo, x es necesario y y es opcional. Si el valor no se pasa a y, el valor predeterminado es 10. 
****/

function defaultParams(x: number, y = 10): number {
  return x + y
}

defaultParams(5,5) // return 10
defaultParams(5) // return 15

/**
 * Parámetros de REST
  Si desea trabajar con varios parámetros como grupo (en una matriz) o no sabe cuántos parámetros tomará una función en última instancia, puede usar los parámetros de REST. Los parámetros de REST se tratan como un número sin límite de parámetros opcionales. Puede dejarlos desactivados o tener tantos como desee.

  Este ejemplo tiene un parámetro necesario y un parámetro opcional denominado restOfNumbers que puede aceptar cualquier número de números adicionales. Los puntos suspensivos (...) antes de restOfNumbers indican al compilador que compile una matriz de los argumentos pasados a la función y le asigna el nombre que le sigue para poder usarse en la función. 
**/ 

let addAllNumbers = (firstNumber: number, ...restOfNumbers: number[]): number => {
   let total: number =  firstNumber;
   for(let counter = 0; counter < restOfNumbers.length; counter++) {
      if(isNaN(restOfNumbers[counter])){
         continue;
      }
      total += Number(restOfNumbers[counter]);
   }
   return total;
}

addAllNumbers(1, 2, 3, 4, 5, 6, 7);  // returns 28
addAllNumbers(2);                    // returns 2
// addAllNumbers(2, 3, "three");        // flags error due to data type at design time, returns 5


/**
 * Parámetros de objeto desconstruido
  Los parámetros de función son posicionales y deben pasarse en el orden en el que se definen en la función. Esto puede provocar que el código sea menos legible al llamar a una función con varios parámetros que son opcionales o el mismo tipo de datos.

  Para habilitar los parámetros con nombre, puede usar una técnica denominada "parámetros de objeto desconstruido". Esto permite usar una interfaz para definir parámetros con nombre, en lugar de posicionales, en las funciones.

  En el ejemplo siguiente se define una clase base abstracta denominada Message que define dos propiedades. En la función displayMessage, el objeto Message se pasa como parámetro y proporciona acceso a las propiedades como si fueran parámetros normales.
 * */ 
interface MessageI {
  text: string
  sender: string
}

function textMessage({text, sender}: MessageI) {
  return `His Message is ${text} and was sended from ${sender}`
}

textMessage({
  sender: 'Alex',
  text: 'this is a message'
})

/*********************** 3. Types definition ************************/

// Tipo Calculator: type CalculatorType = (x: number, y: number ) => number;
// Interface Calculator:
interface CalculatorI {
  (x: number, y: number): number
}

const sumNumbers: CalculatorI = (x: number, y: number): number => x + y 
const substractNumbers: CalculatorI = (x: number, y: number): number => x - y 

console.log(sumNumbers(10,5))
console.log(substractNumbers(5,10))

/**------------------------------------------------------------------------**/
const doCalculation = (operation: 'sumar' | 'restar'): CalculatorI => {
  const result = (operation === 'sumar')
    ? sumNumbers
    : substractNumbers
  return result
}

console.log(doCalculation('sumar')(2,2))

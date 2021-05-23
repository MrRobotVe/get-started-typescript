/*********************** Funciones en Typescript 
 * - Permite escribir parámetros y valores devueltos.
 * - Puede optar por hacer que los parámetros sean necesarios u opcionales en TypeScript.
 * - Agregar tipos a parametros y valores devueltos a funciones
* ************************/

/*********************** 1. Funciones Declaradas ************************/

/***  function addNumber (x: number, y: number): number {}
  * Donde:
  * - addNumber: nombre que tendra la funcion
  * - x: number, y: number: parametros que recibira la funcion con su tipo de dato
  * - number: tipo de dato que devolvera('return') la funcion, donde 'number' puede ser cualquier tipo de dato existente en typescript 
***/

function addNumber(x: number, y: number): number {
  const result = x + y;
  return result;
}
addNumber(1,2)

/*********************** 2. Funciones Anonimas o Funciones Expresadas ************************/

const addNumbersExpresed = function (x: number, y: number): number {
  const result = x + y;
  return result;
}
addNumbersExpresed(1,2)

// Anonymous function
const sum = function (input: number[]): number {
  let total: number = 0
  for (let i = 0; i < input.length; i++) {
    if (isNaN(input[i])) continue
    total += Number(input[i])
  }
  return total
}

// Arrow function
let total2 = (input: number[]): number => {
    let total: number =  0;
    for(let i = 0; i < input.length; i++) {
        if(isNaN(input[i])) continue;
        total += Number(input[i]);
    }
    return total;
}
/*********************** 3. Arrow Functions ************************/
// Anonymous function
let addNumbers1 = function (x: number, y: number): number {
   return x + y;
}

// Arrow function
let addNumbers2 = (x: number, y: number): number => x + y;
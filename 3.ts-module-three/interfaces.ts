import Employee from './Employee'

let employee: Employee = {
    firstName : "Emil",
    lastName: "Andersson",
    fullName(): string {
      return this.firstName + " " + this.lastName;
    }
}

interface IceCreamI {
  flavor: string;
  scoops: number;
  instructions?: string;
}

interface SundaeI extends IceCreamI {
  sauce: 'Chocolate' | 'Caramel' | 'Strawberry';
  nuts?: boolean;
  whippedCream?: boolean;
  instructions?: string;
}

const tooManyScoops = (dessert: SundaeI) => {
  if (dessert.scoops >= 4) {
    return dessert.scoops + " " + "are too many scoops"
  } 
  return "your older will really soon!"
}

console.log(tooManyScoops({
  flavor: 'Vainilla',
  scoops: 5,
  sauce: 'Strawberry',
  nuts: true

}))

/*
Creación de tipos indexables
Puede usar interfaces que describan los tipos de matriz en los que se puede indexar.

Los tipos indexables tienen una signatura de índice que describe el tipo que se puede usar para indexar en el objeto, junto con los tipos de valores devueltos correspondientes al indexar.

Por ejemplo, la interfaz IceCreamArray declara una signatura de índice como number y devuelve un tipo string. Esta signatura de índice indica que la interfaz IceCreamArray está indexada con un número y devolverá una cadena.
*/ 

interface IceCreamArray {
  [index: number]: string;
}

let myIceCream: IceCreamArray;

myIceCream = ['chocolate', 'vanilla', 'strawberry'];

let myStr: string = myIceCream[0];
console.log(myStr);
/**
  - Conceptos Basicos: 
    * Objeto: un objeto es un entidad independiente con propiedades, comportamiento o acciones.
    
    * Clase: es un modelo a partir el cual se crean o construyen objetos.
    
    * Propiedades: son las variables, atributos o datos que estaran dentro de la clase, son  las caracteristicas que definen el objeto.

    * Metodos: son funciones que definen los comportamientos o acciones que puede realizar el objeto.

    * Instancia: es la accion de crear un objeto, es decir, consiste en asignar la clase, como valor a una variable

  - Modificadores de acceso:
    * public	Si no especifica un modificador de acceso, el valor predeterminado es público. También puede establecer explícitamente el miembro en público mediante la palabra clave public.
    
    * private	Si modifica el miembro con la palabra clave private, no se puede tener acceso a él desde fuera de la clase contenedora.
    
    * protected	El modificador protected actúa de forma muy similar al modificador private, con la excepción de que también se puede tener acceso a los miembros declarados protected dentro de las clases derivadas.

  - Metodos Estaticos: son metodos los cuales pueden ser llamados sin crear una instacia de clase previamente, es decir, se crean de la siguiente manera:
  modificador de acceso luego la palabra reservada static y por ultimo nombreDeMetodo o NombredePropiedad: private static propiedad private static metodo y se llaman de la siguiente manera: Clase.propiedad && Clase.metodo, 

***/ 
// 1. Crear la Clase

interface Vehicle {
  make: string
  color: string
  doors: number
  accelerate(speed: number): string
  brake(): string
  turn(direction: 'left' | 'right'): string 
}

class Car implements Vehicle {
  // Propiedades:
  private static numberOfCars: number = 0
  private _make: string
  private _color: string
  private _doors: number
  // Constructor: es un metodo que permite inicializar un objeto de una clase, es decir, se asignan los valores iniciales del nuevo objeto, cabe destacar que, solo puede haber un constructor dentro de la clase, si este se omite la clase proporcionara uno automatico.
  constructor(make: string, color: string, doors = 4) {
    this._make = make
    this._color = color
    this._doors = doors
    Car.numberOfCars++ // llamamos a la propiedad estatica de la siguiente manera: ClassName.StaticProperty
  }
  // Accessors:
  // Getters: permiten obtener los valores de una propiedad. 
  get make() {
    return this._make
  }

  get color() {
    return `The color is: ${this._color}`
  }

  get doors() {
    return this._doors
  }
  // Setters: permiten Establecer los valores de una propiedad.
  set make(make) {
    this._make = make
  }

  set color(color) {
    this._color = color
  }

  set doors(doors) {
    if ((this._doors % 2) === 0) {
      this._doors = doors
    } else {
      throw new Error("Doors must be even a door");
    }
  }
  // Metodos
  accelerate(speed: number): string {
    return `${this.worker()} is accelerating to ${speed} MPH.`
  }

  brake(): string {
    return `${this.worker()} is braking with the standar system`
  }

  turn(direction: 'left' | 'right'): string  {
    return `${this.worker()} is turnig to ${direction}`
  }

  protected worker(): string {
    return this._make
  }

  // Metodos Estaticos
  public static getNumberOfCars(): number {
    return Car.numberOfCars
  }
}

// 2. Instanciar la clase 
const car = new Car('a Cool car', 'blue', 2)
const car2 = new Car('Mercedez', 'red') // doors by default return 4


//3. Acceder a sus metodos y propiedades
console.log(car.accelerate(35));
console.log(car.brake());
console.log(car.turn("right"));

// llamar metodos staticos: classname.prperty
console.log(Car.getNumberOfCars())



// Herencia de clases

class ElectricCar extends Car {
  // Propiedades de ElectricCar:
  private _range: number;
  // Constructor:
  constructor(range: number, make: string, color: string, doors = 4) {
    super(make, color, doors);
    this._range = range;
  }
  // Accesors:
  // Getters:
  get range() {
    return this._range;
  }

  // Setters
  set range(range) {
    this._range = range;
  }
  // Metodos
  charge() {
    console.log(this.worker() + " is charging.");
  }

  brake(): string {
    return this.brake() + " is braking with the regenerative braking system."
  
  }
}

let spark = new ElectricCar(124,'Spark Motors', 'Silver', 2)
let Ecar = new ElectricCar(263,'Electric Car co.', 'black')

console.log(Ecar.doors)
spark.charge()
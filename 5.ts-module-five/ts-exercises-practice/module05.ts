/*  Module 5: Declare and instantiate classes in TypeScript
    Lab Start  */

/*  EXERCISE 1 */

class BuildArray {
  // TODO Define the properties
  private _items: number;
  private _sortOrder: "ASC" | "DESC";
  // TODO Define the constructor
  constructor(items: number, sortOrder: "ASC" | "DESC") {
    this._items = items;
    this._sortOrder = sortOrder;
  }
  // TODO Define the accessors
  get items() {
    return this._items;
  }

  set items(items) {
    this._items = items;
  }

  get sortOrder() {
    return this._sortOrder;
  }

  set sortOrder(order) {
    this._sortOrder = order;
  }
  // TODO Define the methods

  private sortDescending(a: number, b: number) {
    if (a > b) {
      return -1;
    } else if (b > a) {
      return 1;
    } else {
      return 0;
    }
  }

  private sortAscending(a: number, b: number) {
    if (a > b) {
      return 1;
    } else if (b > a) {
      return -1;
    } else {
      return 0;
    }
  }

  public buildArrayMethod(): number[] {
    let randomNumbers: number[] = [];
    let nextNumber: number;
    for (let counter = 0; counter < this._items; counter++) {
      nextNumber = Math.ceil(Math.random() * (100 - 1));
      if (randomNumbers.indexOf(nextNumber) === -1) {
        randomNumbers.push(nextNumber);
      } else {
        counter--;
      }
    }
    if (this._sortOrder === "ASC") {
      return randomNumbers.sort(sortAscending);
    } else {
      return randomNumbers.sort(sortDescending);
    }
  }
}

/*  TODO: Instantiate the BuildArray objects. */
let buildArray1 = new BuildArray(12, 'ASC')
console.log(buildArray1.buildArrayMethod())

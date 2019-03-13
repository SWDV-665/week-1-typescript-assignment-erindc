class Grocery {
    item: string;
    constructor(public name: string, public quantity: number, public price: number, public aisle: number) {
        this.item = name + ": quantity: " + quantity + " price: $" + price + " aisle: " + aisle;
    }
}

let groceries:Grocery[] = [
    new Grocery("milk", 1, 3, 2),
    new Grocery("bread", 2, 2, 4),
    new Grocery("eggs", 1, 4, 3),
    new Grocery("frozen pizza", 2, 7, 6)
]

function listGroceries(groceries: Grocery[]): string {
    let list:string = ""
    for (let entry of groceries) {
        list += entry.item + "<br/>"
    }
    return list
}

document.body.innerHTML = listGroceries(groceries);
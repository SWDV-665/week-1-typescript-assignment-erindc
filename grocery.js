var Grocery = /** @class */ (function () {
    function Grocery(name, quantity, price, aisle) {
        this.name = name;
        this.quantity = quantity;
        this.price = price;
        this.aisle = aisle;
        this.item = name + ": quantity: " + quantity + " price: $" + price + " aisle: " + aisle;
    }
    return Grocery;
}());
var groceries = [
    new Grocery("milk", 1, 3, 2),
    new Grocery("bread", 2, 2, 4),
    new Grocery("eggs", 1, 4, 3),
    new Grocery("frozen pizza", 2, 7, 6)
];
function listGroceries(groceries) {
    var list = "";
    for (var _i = 0, groceries_1 = groceries; _i < groceries_1.length; _i++) {
        var entry = groceries_1[_i];
        list += entry.item + "<br/>";
    }
    return list;
}
document.body.innerHTML = listGroceries(groceries);

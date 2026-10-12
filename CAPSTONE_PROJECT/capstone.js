console.log("--- Initializing Inventory System ---");
console.log('[Prompt executed: User adds "Monitor" at "$150"]\n');
console.log("");
// 1. Data & Input Initialization
let inventory = [
    { name: 'Laptop', price: 800 },
    { name: 'Mouse', price: 25 },
    { name: 'Broken Item', price: NaN }
];
let newItemName = "Monitor";
let newItemPrice = Number("150");
inventory.push({ name: newItemName, price: newItemPrice });
// 2. Control Flow & Conditional Evaluation
const getCategory = (price) => {
    if (price >= 500) {
        return 'Premium';
    } else if (price >= 100) {
        return 'Standard';
    } else {
        return 'Budget';
    }
};
// 3. Loops & Flow Control
let cleanInventory = [];
for (let i = 0; i < inventory.length; i++) {
    if (typeof inventory[i].price !== 'number' || isNaN(inventory[i].price)) {
        continue; 
    }
    cleanInventory.push(inventory[i]);
}
inventory = cleanInventory; 
// 4. Functions & Scope
function calculateTotal(invArray) {
    let total = 0; 
    for (let i = 0; i < invArray.length; i++) {
        total += invArray[i].price;
    }
    return total;
}
// 5. Array Methods & Iteration
console.log("--- Processing Inventory Roster (forEach) ---");
inventory.forEach(item => {
    console.log(`* Item: ${item.name} ($${item.price}) -> Category: ${getCategory(item.price)}`);
});
console.log("");

console.log("--- Financial Analytics ---");
console.log(`Total Inventory Value: $${calculateTotal(inventory)}`);

const affordableItems = inventory.filter(item => item.price < 200).map(item => `"${item.name}"`);
console.log(`Filtered Affordable Items (Under $200): [${affordableItems.join(", ")}]`);

const formattedReport = inventory.map(item => `"${item.name.toUpperCase()}: $${item.price}"`);
console.log(`Formatted Report List: [${formattedReport.join(", ")}]`);
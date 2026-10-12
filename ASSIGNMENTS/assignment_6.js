const products = [
    { name: 'Laptop', price: 800 },
    { name: 'Mouse', price: 25 },
    { name: 'Keyboard', price: 45 }
];
console.log("-- All Products (forEach) --");
products.forEach(p => {
    console.log(`Item: ${p.name} - Price: $${p.price}`);
});
console.log("");
console.log("-- Filtered Products (Price < $50) --");
const filteredProducts = products.filter(p => p.price < 50);
const filteredString = "[ " + filteredProducts.map(p => `{ name: '${p.name}', price: ${p.price} }`).join(", ") + " ]";
console.log(filteredString);
console.log("");
console.log("-- Mapped Product Tags (map) --");
const mappedTags = products.map(p => `${p.name.toUpperCase()} costs $${p.price}`);
const mappedString = '[ "' + mappedTags.join('", "') + '" ]';
console.log(mappedString);
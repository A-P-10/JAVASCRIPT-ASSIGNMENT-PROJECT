function calcAreaStandard(length = 5, width = 4) {
    return length * width;
}

const calcAreaArrow = (length = 5, width = 4) => length * width;

console.log(`Standard Function Area (Default 5x4): ${calcAreaStandard()}`);
console.log(`Arrow Function Area (Custom 10x3): ${calcAreaArrow(10, 3)}`);

try {
    {
        let blockVar = "hidden";
    }
    console.log(blockVar);
} catch (error) {
    console.log(`Scope Test Error: ${error.name}: blockVar is not defined (when accessed outside block)\n`);
}
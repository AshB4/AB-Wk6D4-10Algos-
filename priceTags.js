//Price Tags: .map() numbers into strings with decimals: ["5.00", "10.00"].
// good for formatting prices for display in e-commerce apps or financial software.
const prices = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
function priceTags(arr) {
    return arr.map(price => price.toFixed(2));
}
console.log(priceTags(prices));
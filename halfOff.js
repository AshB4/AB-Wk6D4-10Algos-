//Half Price: .map() to take 50% off an array of prices.
// good for sales, discounts, or promotional pricing adjustments app or e-commerce site.
const prices = [20.00, 55.00, 100.00, 5.50, 10.00];
function halfOff(arr) {
    return arr.map(price => (price / 2).toFixed(2));
}
console.log(halfOff(prices));
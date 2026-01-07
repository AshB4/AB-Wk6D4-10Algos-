//Multiply by 10: .map() [1, 2, 3] → [10, 20, 30].
// good for scaling values, unit conversions, or adjusting data for calculations.
const numbers = [1, 2, 3, 4, 5];
function multiplyBy10(arr) {
    return arr.map(num => num * 10);
}
console.log(multiplyBy10(numbers));
//Even Only: .filter() to return only even numbers.
// good for when you need to process or analyze only even values from a dataset.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function evensOnly(arr) {
    return arr.filter(num => num % 2 === 0);
}
console.log(evensOnly(numbers));
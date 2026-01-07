// Uppercased: .map() strings to ALL CAPS.
// When might this be used? Maybe to standardize user input for comparison. 
// converting titles or tags to a consistent format or for a passwords check.
// or just for fun! j/k :)

const arr = ["hello", "world", "this", "is", "fun", "usually"];
function allUppercased(arr) {
    return arr.map(str => str.toUpperCase()); 
}
console.log(allUppercased(arr));
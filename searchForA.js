//Search for 'A': .filter() strings starting with "A".
// useful for filtering names, items, or categories that begin with a specific letter.
const names = ["Ashley", "Robert", "Adalyn", "Cindy", "Ashara", "Charlie"];
function searchForA(arr) {
    return arr.filter(name => name.startsWith("A"));
}
console.log(searchForA(names));
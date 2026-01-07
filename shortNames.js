//Short Names: .filter() names with < 5 letters from ["James", "Ada", "Lily", "Alberto"].
// useful for applications that need to filter or categorize names based on length.

const names = ["James", "Ada", "Lily", "Alberto", "Ava", "Rob", "Charlotte"];
function shortNames(arr) {
    return arr.filter(name => name.length < 5);
}
console.log(shortNames(names));
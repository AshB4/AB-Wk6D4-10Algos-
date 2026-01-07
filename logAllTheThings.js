// aka Log Everything => Log Everything: .forEach() to log every number + " - logged in terminal".
// good for a db migration log or just to confirm each step in a process.
const nums = [10, 20, 30, 40, 50];
function logAllTheThings(arr) {
    arr.forEach(num => console.log(`${num} - logged in terminal`));
}
logAllTheThings(nums);
console.log("Finished logging all the things.");
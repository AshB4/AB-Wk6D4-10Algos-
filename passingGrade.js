//Passing Grade: .filter() scores above 65 from [55, 60, 88, 92, 40].
// good for educational apps, grading systems, or performance evaluations.
const scores = [55, 60, 88, 92, 40, 34, 76, 81];
function passingGrade(arr) {
    return arr.filter(score => score > 65);
}
console.log(passingGrade(scores));
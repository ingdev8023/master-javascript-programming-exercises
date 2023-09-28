// Write your function here

function computeAverageOfNumbers (arr) {
    return arr.length == 0 ? 0 : arr.reduce((a,b) => a + b) / arr.length 
}

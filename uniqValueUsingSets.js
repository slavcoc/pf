// using Sets to store only unique values

let arr = [1, 1, 2, 2, 3, 3]
let uniqueVal = [...new Set(arr)]

console.log(uniqueVal) //[1, 2, 3]
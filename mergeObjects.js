const o1 = { a: 0} 
const o2 = { b: 1}
const o3 = { c: 2} 

//using Object assign we can merge all three objects into one

const mergeObj = Object.assign(o1, o2, o3)

console.log(mergeObj) //{a: 0, b: 1, c: 2}
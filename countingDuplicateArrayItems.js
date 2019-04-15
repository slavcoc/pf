// using reduce and obj to count items in array

const months = ['June', 'May', 'April', 'June', 'May', 'October', 'May']

// note that we are providing object as second argument to reduce function
//converting array to obj
const monthsObj = months.reduce((obj, name) => {
    //if obj[name] exist ++obj[name]
    //else add 1 as value
    obj[name] = obj[name] ? ++obj[name] : 1
    return obj
}, {})

console.log(monthsObj) //{June: 2, May: 3, April: 1, October: 1}
// using reduce method for both map and filter
// throw maping we add +1 year and then we filter all years greater than 2000
const years = [1988, 1998, 2008, 2018]
const addYear = years.reduce((finalList, year) => {
    year = year + 1 // map

    //filter
    if (year > 2000) {
        finalList.push(year)
    }
    return finalList
}, [])

console.log(addYear) //[2009,2019]
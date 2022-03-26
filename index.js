// returnFirstTwoDrivers()
// 1) should return a new array containing the first 
//    two drivers from the passed-in array
// function returnFirstTwoDrivers(arr) {
//     const newArr = []
//     for (let i = 0; i < 2; i++) {
//         newArr[i] = arr[i]
//     }
//     return newArr
// }
const returnFirstTwoDrivers = function(arr) {
    const newArr = []
    for (let i = 0; i < 2; i++) {
        newArr[i] = arr[i]
    }
    return newArr
}
//  returnLastTwoDrivers()
//  2) should return an array of the last two drivers
const returnLastTwoDrivers = function(arr) {
    const newArr = []
    for (let i = 0; i < 2 ; i++) {
        newArr[i] = arr[(arr.length - 2) + i]
    }
    return newArr
}
// selectingDrivers
// 3) has the `returnFirstTwoDrivers` function to as its first element
// 4) has the `returnLastTwoDrivers` function to as its last element
// 5) allows us to invoke either function from the array
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
// createFareMultiplier()
// 6) returns a function
// 7) should multiply a given value using the created multiplier
function createFareMultiplier(integer) {
    return function(fare) {
        return fare * integer
    }
}
// fareDoubler()
// 8) is a function
// 9) doubles fares
const fareDoubler = createFareMultiplier(2)
// fareTripler()
// 10) is a function
// 11) triples fares
const fareTripler = createFareMultiplier(3)
// selectDifferentDrivers(arrayOfDrivers, function)
// 12) returns the first two drivers when passed returnFirstTwoDrivers() as the second argument
// 13) returns the last two drivers when passed returnLastTwoDrivers() as the second argument
function selectDifferentDrivers(arrayOfDrivers, callback) {
    return callback(arrayOfDrivers)
}
const arr1 = [1, 2, 3]
const arr2 = [6, 5, 4]

// const margeSortedArray = (arr1, arr2) => {
//     for (let i = 0; i < arr2.length; i++) {
//         arr1.push(arr2[i])
//     }
//     //console.log(arr1)
//     let arr3 = []
//     for (let i = 0; i < arr1.length; i++) {
//         for (let j = 0; j < arr1.length; j++) {
//             if (arr1[j] < arr1[j + 1]) {
//                 let temp = arr1[j]
//                 arr1[j] = arr1[j + 1]
//                 arr1[j + 1] = temp
//             }
//         }
//     }
//     console.log(arr1)
// }
// margeSortedArray(arr1, arr2)
console.log('hello')
const margeSortedArray = (arr1, arr2) => {
    let i = 1
    j = 1
    const margedArr = []
    if (arr1.length === 0) {
        return arr2;
    }
    if (arr2.length === 0) {
        return arr1;
    }
    while (arr1 || arr2) {
        if (arr1[0] < arr2[0]) {
            margedArr.push(arr1[0])
            arr1[0] = arr1[i]
            i++
        } else {
            margedArr.push(arr2[0])
            arr2[0] = arr2[j]
            j++
        }
    }
    console.log(margedArr)
}
margeSortedArray(arr1, arr2)
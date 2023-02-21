const str = 'abcde'
const reverse = (str) => {

    const arr = []
    const length = str.length
    for (let i = length - 1; i >= 0; i--) {
        arr.push(str[i])
    }
    return arr.join('')
}
console.log(typeof (reverse(str)))

const reverse2 = (str) => {
    return str.split('').reverse().join('')
}
console.log(reverse2(str))
console.log([...str])
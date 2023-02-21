const strings = ['a', 'b', 'c', 'd']

//4*4 =16 bytes of storage

strings[2]

strings.push("e")//O(1)

//string unshift
strings.unshift('x')

strings.splice(2, 0, 'alien') //O(n/2)
console.log(strings)
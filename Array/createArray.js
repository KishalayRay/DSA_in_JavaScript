class MyArray {
    constructor() {
        this.length = 0
        this.data = {}
    }
    get(index) {
        return this.data[index]
    }
    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length
    }
    pop() {
        console.log(this.length)
        delete this.data[this.length - 1]
        this.length--
        return this.data

    }
    delete(index) {
        delete this.data[index]

        console.log(this.length)
        this.shiftItems(index)
        return this.data
    }
    shiftItems(index) {
        console.log(index, this.length - 1)
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1]
        }
        delete this.data[this.length - 1]
        this.length--
        console.log(this.length)
    }
}
const newArray = new MyArray()
newArray.push('a')
newArray.push('b')
newArray.push('c')
newArray.push('d')
//newArray.pop()
//newArray.delete(1)
console.log(newArray.delete(1))
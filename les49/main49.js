// tự code ra phương thức reduce()

Array.prototype.reduce2 = function(callback, initiaValue) {
    var i = 0

    if(arguments.length < 2){
        i = 1
        initiaValue = this[0]
    }
    for(; i < this.length; i++){
        initiaValue = callback(initiaValue, this[i], i, this)
    }
    return initiaValue
}

const numbers = [1, 2, 3, 4, 5, 6]

const result = numbers.reduce2((total, number) => {
    return total + number
})

console.log(result)
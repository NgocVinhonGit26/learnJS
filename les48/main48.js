// array method: map()

var courses = [
    {
        id: 1,
        name: 'javascript',
        coin: 250
    },
    {
        id: 2,
        name: 'HTML,CSS',
        coin: 0
    },
    {
        id: 3,
        name: 'Ruby',
        coin: 0
    },
    {
        id: 4,
        name: 'PHP',
        coin: 400
    },
    {
        id: 5,
        name: 'ReactJS',
        coin: 500
    }
]
 var newCourse = courses.map(function(course) {
    //  console.log(course)
     return {
         id: course.id,
         name: 'Khoa hoc: '+ course.name,
         coin: 'Gia: '+ course.coin
     }
 })

 console.log(newCourse)

 // aray method: reduce()

function coinHandler(accumulator, currentValue, currentIndex, originArray) {
    return accumulator + currentValue.coin
}

var totalCoin = courses.reduce(coinHandler, 0)

console.log(totalCoin)
 

// bai toan
// var inputs = [true,123,'dsd',[],'aloalo']

// var sum = 0
// function total(a,b,c,d) {
//     if((typeof b) === 'number'){
//         // console.log('check')
//         a = a+b
//     }
//     return a
// }
// var totalSum = inputs.reduce(total, 0)

// console.log(totalSum)

// if(typeof sum === 'number') console.log('true')

function sumNumbers(inputs) {
    return inputs.reduce((a,b)=>{
        b = Number(b)?b:0
        return a+b
    },0)
}


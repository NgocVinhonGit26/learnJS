//toán tử 3 ngôi - Ternary operator

var course = {
    name: 'Java Script',
    coin: 267
}

// if(course.coin > 0){
//     console.log( course.coin + ' coin')
// } else console.log('Free')

var result = course.coin
 
result > 0 ? console.log( course.coin + ' coin') : console.log('Free')

console.log('' == 0 ? 1 : 2)
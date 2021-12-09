// // array

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
    },
    {
        id: 6,
        name: 'PHP',
        coin: 450
    }
]

courses.forEach(function(course) {
    console.log(course.name +': '+course.coin)
})

var isFree = courses.every(function(course) {
                 return course.coin === 0
            })

console.log(isFree)

var haveFree =  courses.some(function(course) {
                    return course.coin === 0
                })

console.log(haveFree)

var course = courses.find(function(course) { // trả về đúng 1 kqua tìm kiếm
    return course.name === 'ReactJS'
})

console.log(course)

var list_course = courses.filter(function(course) { // trả về nhiều hơn 1 kqua tìm kiem
    return course.name === 'PHP'
})

console.log(list_course)


var proFile = [
    {field : 'name', value: 'Vinh'},
    {field : 'age', value: 20},
    {field : 'address', value: 'Ha Noi'}
]

var list = {}

proFile.forEach(function(infor) {
    var a = infor.field
    list[infor.field] = infor.value
    console.log(infor)
})

console.log(list)
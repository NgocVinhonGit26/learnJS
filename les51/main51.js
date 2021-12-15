// call back

Array.prototype.map2 = function(callback) {
    var resutl = []

    for(var i = 0; i < this.length; i++){
        resutl.push(callback(this[i], i))
    }

    return resutl
}

var courses1 = [
    'javascript',
    'PHP',
    'Ruby'
]


var htmls = courses1.map2(function(course) {
    return '<h2>'+ course +'</h2>'
    })

console.log(htmls.join(''))

Array.prototype.filter2 = function(callback) {
    var resutl1 = []
    for(var i in this){
        if(this[i].coin == 0) resutl1.push(callback(this[i], i))
    }
    return resutl1
}

var courses2 = [
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
    },
    ,
    ,
    ,
]

// console.log(courses2)

var free = courses2.filter2(function(course) {
    return course
})

console.log(free)


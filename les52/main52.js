var courses2 = [
    {
        id: 1,
        name: 'javascript',
        coin: 250,
        isFinish: true
    },
    {
        id: 2,
        name: 'HTML,CSS',
        coin: 0,
        isFinish: true
    },
    {
        id: 3,
        name: 'Ruby',
        coin: 0,
        isFinish: true
    },
    {
        id: 4,
        name: 'PHP',
        coin: 400,
        isFinish: true
    },
    {
        id: 5,
        name: 'ReactJS',
        coin: 500,
        isFinish: true
    },
    {
        id: 6,
        name: 'PHP',
        coin: 450,
        isFinish: true
    },
    ,
    ,
    ,
]

// ForEach() array method

Array.prototype.forEach2 = function(callback) {
    var result1 = []
    for(var i in this){
        // console.log(i)
        if(this.hasOwnProperty(i)) {  //loại bỏ gtra i = foreach2
            result1.push(callback(this[i],i))
        }
    }
    return result1
}


courses2.forEach2(function(course) {
    console.log(course)
})


// console.log(courses2)

//filter() Method

Array.prototype.filter2 = function(callback) {
    var result2 = []
    for(var i in this){
        if(this.hasOwnProperty(i)) {
            var tmp = callback(this[i], i)
            if(tmp) {
                result2.push(this[i])
                // result2.push(tmp)
            }
        }
    }
    return result2
}

var filterCourses = courses2.filter(function(course) {
    return course.coin > 0
})

console.log(filterCourses)

// some() method

Array.prototype.some2 = function(callback) {
    for(var i in this) {
        if(this.hasOwnProperty(i)) {
            var tmp = callback(this[i],i)
            if(tmp){
                return true
            }
        }
    }
    return false
}

var someCourse = courses2.some2(function(course) {
    return course.coin == 450
})

console.log(someCourse)

//every() method

Array.prototype.every2 = function(callback) {
    for(var i in this) {
        if(this.hasOwnProperty(i)){
            var tmp = callback(this[i], i)
            if(!tmp) return false
        }
    }
    return true
}

var everyCourse = courses2.every2(function(course) {
    return course.coin >= 100
})

console.log(everyCourse)
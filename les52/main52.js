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
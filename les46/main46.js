// while

var i  = 0;

var myArr = [
    'javascript',
    'PHP',
    'Java',
    'C++'
]

while ( i < myArr.length){
    console.log(myArr[i])
    i++
}

// Do - while
var j = 0
do {
    console.log(myArr[j])
    j++
} while ( j < myArr.length)

// vong lap long nhau - nested lood

var numArr = [
    [1, 2],
    [3, 4],
    [5, 6, 7, 8]
]

for(var i = 0 ; i < numArr.length; i++){
    for(var j = 0 ; j < numArr[i].length; j++){
        console.log(numArr[i][j])
    }
}
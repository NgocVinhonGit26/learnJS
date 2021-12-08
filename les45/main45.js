// vòng lặp for

for (var i = 0; i < 10; i++){
    console.log(i)
}

// for loop
var myArr = [
    'javascript',
    'PHP',
    'Java',
    'C++'
]

for(var i = 0; i < myArr.length ; i++){
    console.log(myArr[i])
}

// For - in

var myInfor = {
    name: 'ngoc vinh',
    age: 18,
    address: 'Ha Noi'
}
var myName = 'Phung Ngoc Vinh'

for(var key in myName){
    // console.log(key)
    // console.log(myInfor[key])
    console.log(myName[key])
}

// For - of: use for String or array

for(var value of myInfor){
    console.log(key)
}
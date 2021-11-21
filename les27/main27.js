var myString = 'Hoc JS tai JS JS JS JSF8'

console.log(myString.length)
// var dodai = myString.length
// alert(dodai)

//find in dex

console.log(myString.indexOf('JS'))
console.log(myString.indexOf('Vinh'))
console.log(myString.indexOf('JS', 6))
console.log(myString.lastIndexOf('JS'))

//cut string

var newString = 'Hoc JS tai F8'
console.log(newString.slice(4, 6))
console.log(newString.slice(4))
console.log(newString.slice(-6, -3 ))

//replace

console.log(myString.replace(/JS/g, 'Javascript'))


//

console.log(newString.toUpperCase()) //viet hoa
console.log(newString.toLowerCase()) //viet thuong

// trim: xoa khoang trang thua o hai dau

var fullName = '     Phung Ngoc Vinh     '
console.log(fullName.trim())

//Split

console.log(fullName.trim().split(''))
console.log(fullName.trim().split(' '))

//charAt: lay ki tu trong chuoi

console.log(fullName.trim().charAt(0))
console.log(typeof fullName)

// var fullName = 'Phung Ngoc Vinh'

// function run(statusText) {
//     if((typeof statusText) != (typeof String)) result = false
//     else result = true
//     alert(result)
//     return result;
// }

// run(fullName)

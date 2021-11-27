var myInfor = {
    name: 'Phung Ngoc Vinh',
    age: 18,
    address: 'Ha Noi',
    getName: function(){
        return this.name
    }
};

myInfor.email = 'Vinh123456@gmail.com'// thêm biến vào object
var nameKey = 'name'

// console.log(myInfor)
console.log(myInfor.address)
console.log(myInfor[nameKey])
console.log('123 ' +myInfor.getName())

//xóa 1 key trong obj
delete myInfor.age
console.log(myInfor)
// function --> phương thức/method
// others --> thuộc tính/propety
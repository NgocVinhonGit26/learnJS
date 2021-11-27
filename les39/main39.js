// object contructor

function user(fisrtName, lastName, avatar) {
    this.fisrtName = fisrtName;
    this.lastName = lastName;
    this.avatar = avatar;
    this.getName = function(){
        return this.fisrtName+' '+this.lastName
    }
}
var authur = new user('Vinh','Phung Ngoc','neko ^^');
var User = new user('Dieu','Ngo Thi Huyen','neko ^^');

authur.title = 'hello word'
User.cmt = 'hi'
console.log(authur)
console.log(User)

console.log(authur.getName())
console.log(User.getName())
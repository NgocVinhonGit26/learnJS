// object prototype - basic
function user(fisrtName, lastName, avatar) {
    this.fisrtName = fisrtName;
    this.lastName = lastName;
    this.avatar = avatar;
    this.getName = function(){
        return this.fisrtName+' '+this.lastName
    }
}

user.prototype.className = 'F8'

var authur = new user('Vinh','Phung Ngoc','neko ^^');
var User = new user('Dieu','Ngo Thi Huyen','neko ^^');

// authur.title = 'hello word'
// User.cmt = 'hi'
console.log(authur.className)
console.log(User)
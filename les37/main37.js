//declaration function: có thể gọi trước khi được định nghĩa
function showMessage(){
    console.log('declaration function')
}

//expression function
var showMessage2 = function() {
    console.log('expression function')
}

showMessage()
showMessage2()
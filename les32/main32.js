function showDialog() {
    alert('Hi xin chao cac ban!')
}

showDialog()

function writeLog(Log, numType) {
    alert(Log)

    alert(typeof numType)
}

writeLog('Phung Ngoc Vinh', 26072001)
// writeLog('Phung Ngoc Vinh')

// đối tượng arguments

function writeArgument() {
    console.log(arguments)
}

writeArgument('phung ngoc vinh', '26/07/2001', 0867630856)

function writeForof() {
    for(var param of arguments){
        console.log(param)
    }
}

writeForof('phung ngoc vinh', '26/07/2001', 0867630856)

var a = 1
var b = 2
//toan tu and &&
var result = NaN && 'A' && false && 'D'

console.log('result', result)

if(result) console.log('Toan tu dung')
else console.log('Toan tu sai')

//toan tu or ||

var check = null || 'B' || '' || 'D'

console.log('check', check)

const c = 1 && NaN || 'Hi' && null && 100
const d = 1 || NaN && 'Hi' || null && 100
const e = NaN || 0 && true && false || 5 && 'k'

console.log(c , d, e)
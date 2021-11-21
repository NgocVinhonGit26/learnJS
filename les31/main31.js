// làm việc với mảng

var languages = [
    'Javascript',
    'PHP',
    'Ruby',
    'Python',
    NaN,
    789
];

console.log(languages.toString())
console.log(languages.join(' - '))

// console.log(languages.pop()) //xóa phần tử cuối mảng và trả lại phần tử bị xóa
// console.log(languages)

// console.log(languages.push('nodejs', 'HTML', 'CSS'))//thêm một hay nhiều phần tử vào cuối mảng và trả về độ dài của mảng mới
// console.log(languages)

// console.log(languages.shift()) //xóa phần tử đầu mảng và trả lại phần tử bị xóa
// console.log(languages)

// console.log(languages.unshift('Java'))//thêm một hay nhiều phần tử vào đầu mảng và trả về độ dài của mảng mới
// console.log(languages)

languages.splice(1, 1) // xóa: cú pháp splice([vị trí đặt con trỏ], [số phần tử muốn xóa])
console.log(languages)

languages.splice(1, 0, 'Java') // chèn: cú pháp splice([vị trí đặt con trỏ], 0, [phần tử mới])
console.log(languages)

var languages2 = [
    'html',
    'css',
]

console.log(languages.concat(languages2)) // nối 2 mảng 

console.log(languages.slice(1, 6))
console.log(languages)



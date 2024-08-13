// string
// loại biến khác biểu diễn các văn bản , thông điệp , tên người
// bất cứ gì ở giữa " " hay '', ` ` 

var myName = `Mạnh`;
myName = ` TranManh`;

var age = 14;
let lowerName = myName.toLowerCase();//rút ngắn tên
let upperName = myName.toUpperCase();//viết hoa all 
var slice = myName.slice(0, 5);//lấy đủ 5 ký tự tình từ 0

let hello = `hello , my name is ${myName} and my age is ${age}`
document.write(hello);

let length = myName.length;
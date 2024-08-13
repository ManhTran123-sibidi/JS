// aray mảng
// cung cấp cách để chứa nhiều dữ liệu tỏng cùng 1 biến
// truy suất thông tin qua chỉ số mảng(bắt đầu từ 0)

// Mảng items chứa các phần tử là các chuỗi
var items = ["shirt", "sword", "apple"];

// Thay đổi mảng items để chứa các phần tử mới
items = ["coat", "axe", "pear"];

// Truy cập vào phần tử thứ nhất trong mảng items và gán giá trị mới
items[0] = "coat";

// Truy cập vào phần tử thứ hai trong mảng items và gán cho biến weapon
var weapon = items[1]; // weapon = "axe"

// Truy cập vào chiều dài của mảng items (số phần tử trong mảng)
var arraylength = items.length; // length = 3

// Truy cập vào chiều dài của phần tử đầu tiên trong mảng items (chiều dài của chuỗi "coat")
length = items[0].length; // length = 4 (do "coat" có 4 ký tự)

items.push("water"); // ["coat" , "apple" "water"]
var water = items.pop(); // water

// *Mảng đa chiều(mảng của mảng)
// array of array
var mul_arr = [
 [1.1 , 1.2 , 1.3 ],
 [2.1 , 2.2 , 2.3 , 2.4 ],
 [3.1 , 3.2]

];

var first_row = mul_arr[0][0];
var ele = mul_arr[0][2];
mul_arr[0][2] = 1.4;
var third_row = mul_arr[2][0];

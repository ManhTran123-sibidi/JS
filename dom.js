

// DOM:DOM (Document Object Model) là một khái niệm quan trọng trong JavaScript và lập trình web.
// Nó cung cấp một mô hình có cấu trúc, cho phép JavaScript tương tác và thao tác với HTML và CSS của trang web. Dưới đây là một số khái niệm cơ bản về DOM và cách sử dụng nó trong JavaScript
/**DOM là một mô hình phân cấp của tài liệu HTML hoặc XML, biểu diễn tài liệu dưới dạng cây (tree) với các nút (nodes).
 *  Mỗi thành phần của tài liệu (như thẻ, thuộc tính và văn bản) đều là một nút trong cây này.
 * Truy cập phần tử theo ID: var element = document.getElementById("myElement");
 * 2.2 Truy cập phần tử theo tên thẻ: var elements = document.getElementsByTagName("div");
 * Truy cập phần tử theo tên lớp:var elements = document.getElementsByClassName("myClass");
 * 
 */


// element: ID , class , tag
//css selector, html collection
// atrribute
// text

var headingNode = document.querySelector('.heading');

console.log(headingNode);


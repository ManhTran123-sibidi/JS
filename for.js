// vòng lặp for
// định nghĩa trước điểm đầu , điểm cuối và toán tử lặp
var items = [`búa`, `áo`, `táo`];
var ket_qua = "Trong túi, tôi có: ";

for (var i = 0; i < items.length; i++) {
  var ten_items = items[i];
  ket_qua += ten_items + " ";
}

console.log(ket_qua);

// forEach
ket_qua = "Trong túi, tôi có: ";
items.forEach(function(element , index) {
ket_qua += element + " ";

})
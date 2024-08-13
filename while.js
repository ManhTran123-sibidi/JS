// vòng lập while
// cách tức để chúng ta thực hiện đoạn code nhiều lần
// cú pháp tương tự như câu lệnh if
// nếu code đúng thì chạy còn k thì tự kết thúc và thoát vòng lập
var vi_tri = 1;
var vi_tri_ket_thuc = 5;

while (vi_tri<vi_tri_ket_thuc) {
    vi_tri++; // tổng là lặp 4 lần
    vi_tri--; // vòng lặp vô hạn
};

var vi_tri_nhan_vat = 0; // di chuyển 1 lần 3 đơn vị
var enemies = 4; // 1 lần 1 đơn vị
var vi_tri_ket_thuc = 10;
var GameOver = false;

while (GameOver) {
    vi_tri_nhan_vat += 3;
    enemies +=1;
    if(vi_tri_nhan_vat >= vi_tri_ket_thuc || vi_tri_nhan_vat == enemies) {
        GameOver = true;
    }
};
// break: dừng ngay vòng lặp 
while(vi_tri_nhan_vat < vi_tri_ket_thuc) {
vi_tri_nhan_vat += 3;

enemies += 1;
if (vi_tri_nhan_vat == enemies) {
    break;
    } 
}
// continue : có tạc dụng lặp lại vòng lặp ngay lập tức
while(vi_tri_nhan_vat < vi_tri_ket_thuc) {
    if(vi_tri_nhan_vat % 2 == 0) {
        vi_tri_nhan_vat += 3;
        continue;
    }
    vi_tri_nhan_vat += 1;
    if (vi_tri_nhan_vat == enemies) {
        break;
        } 
    }
    // return: kết thúc 1 hàm , những câu lệnh phia sau tiếp tục thực hiện
function di_chuyen_nv() {
    while(vi_tri_nhan_vat < vi_tri_ket_thuc) {
        vi_tri_nhan_vat += 3;
        
        enemies += 1;
        if (vi_tri_nhan_vat == enemies) {
             return;
            } 
        }
        
}
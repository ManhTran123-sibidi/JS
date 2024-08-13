// function
// hàm cho phép đóng gói đoạn code và chọn thực thi chúng khi nào và ở đâu ta muốn

var HP = 50;
var HP_phuc_hoi = 5;
var maxHP = 100;

function phuc_hoi(HP_phuc_hoi = 5) {
    HP += HP_phuc_hoi;
    var newHP = HP + HP_phuc_hoi;
    HP = newHP > maxHP ? maxHP : newHP;
    return tinh_phan_tram(HP , maxHP);
}

phuc_hoi();

//input và return của hàm
function cau_chao_mung(ten = "bạn") {
    return "xin chào " + ten; // nằm cuối và kết thúc hàm
}


function tinh_phan_tram(a , b) {
    return (a / b) * 100
}

var ket_qua = phuc_hoi();
ket_qua = phuc_hoi(50);

var cau_chao = cau_chao_mung("Mạnh");
cau_chao = cau_chao_mung(); // xin chào bạn


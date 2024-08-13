// const let var
// var => toàn cục
// let khai báo trong code block khi đóng sẽ k sử dụng dc
const maxHP = 100;
// maxHP = 150 =>error

if (true) {
    var isGameOver = false;
    let isNotGameOver = true;

};

print(isGameOver); //false
print(isNotGameOver); //error đóng code block giá trị let khai báo sẽ bị xóa

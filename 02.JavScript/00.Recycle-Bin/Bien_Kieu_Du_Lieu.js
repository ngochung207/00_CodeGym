// i là kiểu số nguyên, có giá trị 10
let i = 10;
// Biến f kiểu số thực, có giá trị là 20.5
let f = 20.5;
// Biến b kiểu logic, có giá trị là true
let b = true;
// Biến s kiểu chuỗi, có giá trị là "Hà Nội"
let s = "Hà Nội";
// Sử dụng hàm document.write() để viết kết quả ra màn hình
document.write('i=' + i);
document.write('<br>');
document.write('f=' + f);
document.write('<br>');
document.write('b=' + b);
document.write('<br>');
document.write('s=' + s);
document.write('<br>');
// Viết mã khai báo chiếu dài và rộng hình chữ nhật, in ra diện tích hình chữ nhât:
let width = 20;
let height = 10;
let area = width * height;
document.write('Hình chữ nhật có chiều dài, chiều rộng:' + width + ',' + height);
document.write('<br>');
document.write('area =' + area);
//Dùng hàm prompt() để nhập 2 số từ bàn phím, lưu vào 2 biến là a và b.
// Kiểm tra xem a có phải là bội số của b hay không (tức là a có chia hết cho b hay không).
// Hiển thị kết quả ra màn hình bằng cách sử dụng hàm alert().
function myFunction(){
    let a = prompt("Nhập vào giá trị a:");
    let b = prompt("Nhập vào giá trị b:");
    if (a % b ==0){
        alert('a chia hết cho b');
    }
    else {
        alert('a không chia hết cho b');
    }
}
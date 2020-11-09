// Bài 1: Viết chương trình nhập điểm của một sinh viên cho các môn: Vật lý, Hóa học, và Sinh học.
// Sau đó hiển thị điểm trung bình và tổng của những điểm này.
let vatLy = parseFloat(prompt("Nhập điểm môn vật lý:"));
let hoaHoc = parseFloat(prompt("Nhập điểm môn hóa học:"));
let sinhHoc = parseFloat(prompt("Nhập điểm môn sinh:"));

let diemTrungBinh;
let tongDiem;

tongDiem = (vatLy + hoaHoc + sinhHoc);
diemTrungBinh = tongDiem/3;

document.write("Điểm trung bình: " + diemTrungBinh);
document.write("</br>");
document.write("Tổng điểm: " + tongDiem);
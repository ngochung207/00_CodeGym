let myStore = new Array();

function product(maHang, tenHang, dvt, soLuong){
    this.maHang = maHang;
    this.tenHang = tenHang;
    this.dvt = dvt;
    this.soLuong = soLuong;
}

function addProduct(){
    let maHang = document.getElementById("id-text-maHang").value;
    let tenHang = document.getElementById('id-text-tenHang').value;
    let dvt = document.getElementById('id-text-dvt').value;
    let soLuong = document.getElementById('id-text-soLuong').value;
    let newProduct = new product(maHang, tenHang, dvt, soLuong);
    myStore.push(newProduct);
}
function showProduct(){
    document.getElementById('id-result-maHang').innerHTML += myStore[myStore.length - 1].maHang + "<br>";
    document.getElementById('id-result-tenHang').innerHTML += myStore[myStore.length - 1].tenHang + "<br>";
    document.getElementById('id-result-dvt').innerHTML += myStore[myStore.length - 1].dvt + "<br>";
    document.getElementById('id-result-soLuong').innerHTML += myStore[myStore.length - 1].soLuong + "<br>";
}
function findProduct(){
    document.getElementById('id-result-find').innerHTML = '';
    let findWhat = document.getElementById('id-select').value;
    let findValue = document.getElementById('id-text-find').value;
    let str;
    myStore.forEach(function (element){
        if (element[findWhat].includes(findValue)){
            str = element.maHang + " - " + element.tenHang + " - " + element.dvt + " - " + element.soLuong;
            document.getElementById('id-result-find').innerHTML += str + "<br>";
        }
    });
}

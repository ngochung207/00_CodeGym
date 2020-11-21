function arr(keys, values){
    this.key = keys;
    this.item = values;
}

var dic1 = new Array();
var dic2 = new Array();

function addItem1(keys, values){
    dic1.push(new arr(keys, values));
    document.getElementById('id-key-arr-1').value = null;
    document.getElementById('id-value-arr-1').value = null;
}
function addItem2(keys, values){
    dic2.push(new arr(keys, values));
    document.getElementById('id-key-arr-2').value = null;
    document.getElementById('id-value-arr-2').value = null;
}
function showDic(dic,idR){
    document.getElementById(idR).innerHTML += dic[dic.length-1].key + ":" + dic[dic.length-1].item + "<br>"
}
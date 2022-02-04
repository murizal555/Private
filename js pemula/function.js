// function tambah(a, b) {
//     return a + b;
// }

// function kali(a, b) {
//     return a * b; 
//     // var a = parseInt(prompt('masukkan niali =1'));
//     // var b = parseInt(prompt('masukkan nilai =2'));
//     // var hasil = tambah(a * 3, b * 3);
//     // console.log(hasil);
// }

// function kurang(a, b) {
//     return a - b;
// }
// var hasil = kali(tambah(1, 2), tambah(3, 4), kurang(5, 6));
// console.log(hasil);

// function tambah() {
//     return arguments;
// }
// var aja = tambah(1, 2, 3, "tr", false);
// console.log(aja);

function tambah() { //parameter
    var hasil = 0;
    for (var i = 0; i < arguments.length; i++) {
        hasil += arguments[i];
    }
    return hasil;
}
var coba = tambah(1, 2, 3, 4, 6, 4, 6, 4, 6);
console.log(coba);
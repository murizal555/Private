// function jumlahkubus(a, b) {
//     var volumeA;
//     var volumeB;
//     var total;

//     volumeA = a * a * a;
//     volumeB = b * b * b;

//     total = volumeA + volumeB;
//     total = volumeA * volumeB;

//     return total;

// }
// alert(jumlahkubus(2, 3));
// alert(jumlahkubus(4, 4));


// var nama = prompt('masukkan nama');
// alert(nama);



// var tes = confirm('kamu setuju');
// if (tes === true) {
//     alert('user sentuh oky');
// } else {
//     alert('user menyentuh cancel');
// }


alert('selamat datang');
var lagi = true;

while (lagi === true) {
    var nama = prompt('masukkan nama:');
    alert('haloo' + nama);
    lagi = confirm('coba lagi?');
}
alert('thanks');
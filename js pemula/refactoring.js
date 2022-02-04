// function jumlahVolume(a, b) {
//     var volumeA;
//     var volumeB;
//     var total; 

//     volumeA = a * a * a;
//     volumeB = b * b * b;

//     total = volumeA + volumeB;

//     return total;
// }
// alert(jumlahVolume(3, 5));




// sama fungsinya sama yang di atas

// function jumlahVolume(a, b) {
//     return a * a * a + b * b * b;
// }
// alert(jumlahVolume(20, 90))








// function tes() {
//     return tes();
// }
// tes();



// for (var i = 12; i >= 1; i--) {
//     console.log(i);
// }



function tampil(n) {
    if (n === 0) {
        return;
    }
    console.log(n);
    return tampil(n - 1);
}
tampil(10);
//  while (true) {
//      console.log('hii');
//  } 


// var ulang = true;    //perulangan WHILE
// while (ulang) {
//     console.log('hello world');
//     ulang = confirm('lagi?');
// }

// var kuda = 4;          
// var sapi = 2;

// while (kuda <= sapi) {
//     console.log(kuda);
//     sapi++;
// }



// var jlhmobil = 10;
// var mobilbagus = 8;
// var nomobil = 1;
// while (nomobil <= mobilbagus) {
//     console.log('mobil no' + nomobil + 'mobilbagus');
//     nomobil++;
// }
// for (nomobil = mobilbagus + 1; nomobil <= jlhmobil; nomobil++) {
//     console.log('nommor angkot. ' + nomobil + 'sedang jalan.');

// }





// var jmlhangkot = 10;
// var angkotberoprasi = 6;
// for (var noangkot = 1; noangkot <= jmlhangkot; noangkot++) {
//     if (noangkot <= 6) {
//         console.log('angkot no.' + noangkot + 'beroprasi dengan baik');
//     } else if (noangkot === 8) {
//         console.log('angkot no.' + noangkot + 'sedang lembur');
//     } else {
//         console.log('angkot no.' + noangkot + 'tidak beroprasi.');
//     }
// }




// var jlhangkot = 10;
// var angkotbagus = 6;
// for (var noangkot = 1; noangkot <= jlhangkot; noangkot++) {
//     if (noangkot <= 6 && noangkot !== 4) {
//         console.log('angkot no.' + noangkot + 'bagus');
//     } else if (noangkot === 8 || noangkot === 10 || noangkot === 4) {
//         console.log('ankot no.' + noangkot + 'lembur.');
//     } else {
//         console.log('angkot no.' + noangkot + 'operasi.');
//     }
// }

// var angka = prompt('Masukkan angka.');

// if (angka == 1) {

//     alert('msukkan angka 1');
// } else if (angka == 2) {
//     alert('anda masukkan angka 2 ');
// } else if (angka == 3) {
//     alert('anda masukkan angka 3');
// } else {
//     alert('angka yang anda masukkan');
// }


// var s = '';
// for (var i = 10; i > 1; i--) {
//     for (var j = 0; j < i; j++) {
//         for (var u = 12; u < 1; u++) {
//             u += '$';
//         }

//     }

// }
// console.log(s);

// var s = 8;
// var si = 3;
// var volume_s;
// var volume_si;
// var total;  

// volume_s = s * s * s;
// volume_si = si * si * si;

// total = volume_s + volume_si;
// alert(total);





// function jumlahvolume(a, b) {
//     var volumeA;
//     var volumeB;
//     var total;

//     volumeA = a * a * a;
//     volumeB = b * b * b;
//     total = volumeA + volumeB;
//     return total;
// }
// alert(jumlahvolume(2, 3));
// alert(jumlahvolume(23, 9));






// var angka = p rompt( 'masukkan anga');   W              KONDISI
// if (angka % 2 == 0) {
//     alert(angka + 'adalah bilangan genap');
// } else if (angka % 2 === 1) {
//     alert(angka + 'adalah ganjil');
// } else {
//     alert('bukan angka bro');

// }
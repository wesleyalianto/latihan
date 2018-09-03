// let nama = 'andi';
// let usia = 22;
// let jomblo = true;
// let kerja;

// console.log(typeof(nama));
// console.log(typeof(usia));
// console.log(typeof(jomblo));
// console.log(typeof(kerja));

// var x ='halo dunia';


// console.log(x.length);
// console.log(x.indexOf('a'));
// console.log(x.substr(5, 3));
// //mengambil string dari index ke 5 sebanyak 3
// console.log(x.slice(5, 8));
// //memotong string dari index ke 5 sampai index kurang dari 8
// console.log(x.split(' '));
//split spasi
// var x = 'haloha';
// var y = 'DUNIA';
// var z = 12345;

// console.log(x.toUpperCase().substr(2, 2));
// console.log(y.toLowerCase());

// console.log(x.replace('ha', 'mi'));
// //untuk mengganti string ha yg pertama dengan mi
// console.log(x.replace(/ha/g, 'mi'));
// // /ha/g maksudnya adalah ha yang global, berarti semua ha akan diganti dengan mi

// console.log(z.toString());
// console.log(typeof(z.toString()))

// usia = 22;
// nama = 'andi';

// console.log(usia+usia);
// console.log(nama + ' ' + nama);
// console.log(nama + usia);

// // type coersion, jika 2 tipe data yang berbeda digabungkan
// // maka akan otomatis diubah menjadi string

// var a = 3.14;
// var b = 3;

// var c = 123e5 //123 x 10pangkat5/ angka 0 dibelakangnya
// var d = 123e-5 //123 x 10pangkat-5/ angka 0 dibelakangnya

// var e = 999999999999999; //15x
// var f = 9999999999999999; //16x

// var g = 0.2 + 0.1;
// var h = (0.2 * 10 + 0.1 * 10) / 10;

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);
// console.log(f);
// console.log(g);
// console.log(h);

// var usiaAndi = 40;
// var usiaBudi = 20;

// console.log(usiaAndi * usiaBudi);
// console.log(usiaAndi / usiaBudi);
// console.log(usiaAndi + usiaBudi);
// console.log(usiaAndi - usiaBudi);
// console.log(usiaAndi % usiaBudi);

console.log(Math.PI);
console.log(Math.abs(-4.7));
console.log(Math.pow(8,2));
console.log(Math.sqrt(64));
console.log(Math.cbrt(8));

// console.log(Math.round(4.7));
// console.log(Math.round(4.4));
// console.log(Math.floor(4.7));
// console.log(Math.ceil(4.4));

// console.log(Math.random());
// console.log(Math.max(1,3,5));
// console.log(Math.min(1,3,5));

// var a = new Date()

// console.log(a.getFullYear())
// console.log(a.getMonth())
// console.log(a.getDate())
// console.log(a.getDay())
// console.log(a.getHours())
// console.log(a.getMinutes());
// console.log(a.getSeconds());
// console.log(a.getMilliseconds());

// var b
// if(a.getMinutes()<10)
// {
//    b = '0'+a.getMinutes(); 
// }
// else
// {
//     b = a.getMinutes();
// }
// console.log((a.getMonth()+1)+'/'+a.getDate()+'/'+a.getFullYear()+'\n'+a.getHours(),':',b)
// //jika menggunakan , maka akan ada space diantara string. Jika menggunakan + maka string akan menempel

//-----------------------------------------------------------------

// let x = 4
// let y = 3
// let z = 2

// let w = Math.pow(((x+y*z)/(x*y)), z);

// console.log(w);
// //ver 1
// let total = 7;
// let tahun = Math.floor(total/360);
// let bulan = Math.floor((total-(360*tahun))/30);
// let minggu = Math.floor(((total-(360*tahun))-(30*bulan))/7);
// let hari = Math.floor(((total-(360*tahun))-(30*bulan))-(7*minggu));
// console.log(total,'Hari adalah')
// console.log(tahun, 'Tahun');
// console.log(bulan, 'Bulan');
// console.log(minggu, 'Minggu');
// console.log(hari, 'Hari')

//ver 2
// let total = 485;
// let tahun = Math.floor(total/360);
// let bulan = Math.floor((total%360)/30);
// let minggu = Math.floor(((total%360)%30)/7);
// let hari = Math.floor(((total%360)%30)%7);
// console.log(total,'Hari adalah')
// console.log(tahun, 'Tahun');
// console.log(bulan, 'Bulan');
// console.log(minggu, 'Minggu');
// console.log(hari, 'Hari')



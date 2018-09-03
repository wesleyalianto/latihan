let alaskaki = 'sepatu';
let warna = 'merah';
let harga = 'murah';
switch (true) {
    case (alaskaki == 'sepatu' && warna == 'merah' && harga == 'murah'):
    console.log('Saya suka sepatu merah harga murah');
    break;
    case (alaskaki == 'sepatu' && warna == 'merah' && harga == 'mahal'):
    console.log('Saya suka sepatu merah harga mahal');
    break;
    case (alaskaki == 'sepatu' && warna == 'biru' && harga == 'murah'):
    console.log('Saya suka sepatu biru harga murah');
    break;
    case (alaskaki == 'sepatu' && warna == 'biru' && harga == 'mahal'):
    console.log('Saya suka sepatu biru.');
    break;
    case (alaskaki == 'sandal' && warna == 'merah' && harga == 'murah'):
    console.log('Saya suka sandal merah harga murah ');
    break;
    case (alaskaki == 'sandal' && warna == 'merah' && harga == 'mahal'):
    console.log('Saya suka sandal merah harga mahal');
    break;
    case (alaskaki == 'sandal' && warna == 'biru' && harga == 'murah'):
    console.log('Saya suka sandal biru harga murah');
    break;
    case (alaskaki == 'sandal' && warna == 'biru' && harga == 'mahal'):
    console.log('Saya suka sandal biru harga mahal');
    break;
    default:
    console.log('Tak suka alas kaki merah/biru.');
}
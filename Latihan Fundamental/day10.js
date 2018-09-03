var jomblo = true

var Budi = Object.assign({nama: 'Budi'}, {usia:32, job:'Pilot'});
var Caca = Object.assign({}, {job:'Akuntan'}, Budi);
var Dedi = Object.assign(Caca, {job:'Guru'}, {jomblo});

Object.assign
console.log(Budi);
console.log(Caca);
console.log(Dedi);
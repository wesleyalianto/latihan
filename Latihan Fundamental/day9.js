class orang {
    constructor(nama, usia, job) {
        this.namaDpn = nama;
        this.umur = usia;
        this.pekerjaan = job;
        this.ngomongHalo = function() {
            console.log(this.namaDpn + ' Ngomong Halo');
        };
        this.ubahNamaDpn = function(namaBaru) {
            this.namaDpn = namaBaru;
        };
        this.pekerjaanSaatIni = function(waktu) {
            if(waktu == 'Malam')
            {
                this.pekerjaan = 'Banci';
            }
            else if(waktu == 'Siang')
            {
                this.pekerjaan = 'Preman';
            }
            else
            {
                this.pekerjaan = 'Penjual Baso';
            }
        }
    }
} 
var Andi = new orang('Andi', 30, 'PNS');
Andi.ubahNamaDpn('Kacrut');
Andi.pekerjaanSaatIni('');
console.log(Andi.namaDpn + ' sedang jadi ' + Andi.pekerjaan);
// console.log('Nama Andi sekarang jadi ' + Andi.namaDpn);
// console.log(Andi.namaDpn);
// var Baron = new orang('Baron', 20, 'Guru');
// Andi.ngomongHalo();
// Baron.ngomongHalo();
// console.log(Andi);
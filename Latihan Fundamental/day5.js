var Distance = 120;
var A = 60;
var B = 40;

// Mulai pada jam 09:00, dalam menit: 9 x 60 menit
var Mulai = 9 * 60;



// A*(Hour) + B*(Hour) = Distance ---> Hour = Distance/(A+B)
// Hasilnya adalah waktu yang dibutuhkan untuk tabrakan dalam bentuk jam
var Hour = Distance / (A + B);

// Waktu yang dibutuhkan untuk tabrakan dalam bentuk menit
var HourMinute = Hour * 60;

// Total menit dalam hari itu sampai waktu tabrakan.
var Crash = Mulai + HourMinute;

var CrashHour = Math.floor(Crash / 60);
var CrashMinute = Math.floor(Crash % 60);

console.log('A & B bertabrakan pada pukul ' + CrashHour + ':' + CrashMinute);
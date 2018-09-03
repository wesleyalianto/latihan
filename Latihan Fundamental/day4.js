var distance = 120;
var speedA = 60;
var speedB = 40;
var speedAB = speedA + speedB;
var timeHour = (distance / speedAB);
var timeMinute = timeHour * 60;
var roundedHour = Math.floor(timeHour);
var remainingMinute = timeMinute % 60;
var leaveHour = new Date (2018, 4, 18,  9, 0, 0, 0);
var crashHour = leaveHour.getHours() + remainingMinute;
var crashTime = new Date(2018, 4, 18, timeHour, timeMinute, 0, 0)

console.log('sA + sB = ' + distance + ' km');
console.log('vA*tA + vB*tB = ' + distance + ' km');
console.log(speedA + 't = ' + distance + ' km');
console.log(speedAB + 't = ' + distance + ' km');
console.log('t = ' + timeHour + ' jam');
console.log('t = ' + timeHour + ' * ' + '60' + ' = ' + timeMinute + ' menit');
console.log('Sehingga, Mobil A dan Mobil B akan bertabrakan pada pukul ' + crashTime + 'setelah berjalan selama ' + roundedHour + ' jam ' + remainingMinute + ' menit');
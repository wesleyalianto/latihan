var x = setInterval(waktu, 1500);
var a = 0;

function waktu() {
    console.log(a);
    a++;
    if(a == 3)
    {
        clearInterval(x);
    }
}
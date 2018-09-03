console.log('Hello World');

document.getElementsByTagName('button')[0].addEventListener('click',function(){
    document.getElementById('text').innerHTML = '<span>' + (5+6) + '</span>'
})

var button = 1;

function printButton(){
    return button;
}

printButton();
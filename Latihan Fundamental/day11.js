let janji = new Promise(function(ingkari, tepati){
    let dipenuhi = true;
    if(dipenuhi){
        tepati('Janji Kutepati.');
    } 
    else {
        ingkari('Janji Kuingkari.');
    }
});
janji.then(function(janjiDitepati) {
    console.log(janjiDitepati);
})
.catch(function(janjiDiingkari) {
    console.log('test');
    console.log(janjiDiingkari);
})
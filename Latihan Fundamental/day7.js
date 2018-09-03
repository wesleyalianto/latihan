var arrayKu = [5, 4, 10, 1, 2];

// min & max
var min = arrayKu[0];
var max = arrayKu[0];

for(var i = 1; i < arrayKu.length; i++)
{
    if(arrayKu[i] < min)
    {
        min = arrayKu[i];
    }
    if(arrayKu[i] > max)
    {
        max = arrayKu[i];
    }
}
console.log('Min: ' + min + ' Max: ' + max);
// sort asc
for(var i = 0; i < arrayKu.length; i++)
{
    for(var j = i; j < arrayKu.length; j++)
    {
        if(arrayKu[i] > arrayKu[j])
        {
            var temp = arrayKu[i];
            arrayKu[i] = arrayKu[j];
            arrayKu[j] = temp;
        }
    }
}

console.log(arrayKu);
// sort desc
for(var i = 0; i < arrayKu.length; i++)
{
    for(var j = i; j < arrayKu.length; j++)
    {
        var temp = arrayKu[i];
        if(arrayKu[i] < arrayKu[j])
        {
            arrayKu[i] = arrayKu[j];
            arrayKu[j] = temp;
        }
    }
}
console.log(arrayKu);
// var fizzBuzz = (num) => {
//     for(var i = 1; i <= num; i++)
//     {
//         if((i % 5 == 0) && (i % 3 == 0))
//         {
//             console.log('FizzBuzz');
//         }
//         else if((i % 3 == 0))
//         {
//             console.log('Fizz');
//         }
//         else if((i % 5 == 0))
//         {
//             console.log('Buzz');
//         }
//         else
//         {
//             console.log(i);
//         }
//     }
// }

// fizzBuzz(20);

// var fibo = (num, start) => {
//     var arr = [start, start];
//     for(var i = 2; i < num; i++)
//     {
//         arr[i] = arr[i-1] + arr[i-2];
//     }
//     console.log('Arraynya : ' + arr);
//     console.log('Index ke ' + (arr.length-1) + ' dari array isinya: ' + arr[arr.length-1]);
// }

// fibo(10, 4);

var BubbleSort = (arr) => {
    
    for(var i = (arr.length-1); i >= 0; i--)
    {
        for(var j = 0; j < i; j++)
        {
            if(arr[j] > arr[j+1])
            {
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }

    return arr;
}

var arr1 = [5, 2, 7, 3, 1, 4, 6, 8];

var sortedArr = BubbleSort(arr1);
console.log(sortedArr);
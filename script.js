    /* 
    
    Write a function called maxSubarraySum which accepts an array of integers
    and a number called num. The function should calculate the max sum of num 
    consective numbers.

    */

function maxSubarraySum(arr, num){
    //if num is greater than array return null because you cannot add more numbers to the array
    if (num > arr.length){
        return null;
    }
    //in case the array consists of negative numbers initiate max to Infinity
    var max = -Infinity;
    //Algorithm
    //iterate through the array
    for(let i = 0; i < arr.length - num + 1; i++){
        temp = 0;
        //this loops the sum of "num" amount of numbers
        for(let j = 0; j < num; j++){
            temp = temp + arr[i + j]
        }
        if(temp > max){
            max = temp;
        }

    }
    return max;
}

console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));
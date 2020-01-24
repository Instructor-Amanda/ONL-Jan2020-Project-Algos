//recursion refers to a function that calls itself  - a different way of looping
// 1) base case -> where does the looping stop
// ex: loop through an array: for(var i = 0; i < array.length; i++)
// 2) some way to "increment" or move closer to base case
// 3) recursive call

//Sigma means the addition of values in sequence
//ex: Sigma(5) => 5+4+3+2+1 = 15; values <= 0 should get back 0; decimals get truncated or floored

function forSigma(val){   //any function that can be done "iterately" can be done recursively and vice versa
    var sum = 0;
    for(var i = val; i >= 1; i--){
        sum += i;
    }
    return sum;
}

function rSigma(val, sum = 0){
    val = Math.floor(val);  //handle edge case of decimals
    if(val <= 0){   //handles edge case of negatives
        return 0;
    }
    sum += val;   //memo to track with debugger
    if(val == 1){   //base case to stop loop
        return 1;
    }
    return val + rSigma(val-1, sum);   //recursive call with forward movement to base case
}

console.log(rSigma(5));
console.log(rSigma(6.52));
console.log(rSigma(-3));



//binary search allows us to search specific parts of a sorted array rather than looping through the whole thing
//we start at the middle, check value against middle, search upper or lower half of array accordingly
function binarySearch(sortarr, val, startIndex = 0, endIndex = sortarr.length-1){
    if(val < sortarr[startIndex] || val > sortarr[endIndex] || startIndex > endIndex){
        return false;
    }
    var midIndex = Math.floor((startIndex+endIndex)/2);
    if(sortarr[midIndex] == val){
        return true;
    }
    else if(sortarr[midIndex] > val){
        return binarySearch(sortarr, val, startIndex, endIndex=midIndex-1);
    }
    else{
        return binarySearch(sortarr, val, startIndex=midIndex+1, endIndex);
    }
}

var sortedArray = [1,3,5,7,9,10,12,16]
console.log(binarySearch(sortedArray,11));
console.log(binarySearch(sortedArray,9));
console.log(binarySearch(sortedArray,2));


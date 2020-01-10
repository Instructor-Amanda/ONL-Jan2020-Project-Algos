// Push Front
// Given an array and an additional value, 
// insert this value at the beginning of the array. 
// Do this without using any built-in array methods.

function pushFront(arr, val){
    return InsertAt(arr,0,val);
}

//console.log(pushFront([1,2,3,4],99));

// Pop Front
// Given an array, remove and return the value 
// at the beginning of the array. 
// Do this without using any built-in array 
// methods except pop().

function popFront(arr){
    return removeAt(arr,0);
}

console.log(popFront([1,2,3,4]));

// Insert At
// Given an array, index, and additional value, 
// insert the value into array at given index. 
// Do this without using built-in array methods. 
// You can think of pushFront(arr,val) as 
// equivalent to insertAt(arr,0,val).

function InsertAt(arr, idx, val){
    console.log(arr);
    for(var i = arr.length; i > idx; i--){
        arr[i] = arr[i-1];
        console.log(arr);
    }
    arr[idx] = val;
    return arr;
}
//console.log(InsertAt([1,2,3,4],2,99))

// Remove At
// Given an array and an index into array, remove and 
// return the array value at that index. Do this without 
// using built-in array methods except pop(). Think of 
// popFront(arr) as equivalent to removeAt(arr,0).

function removeAt(arr, idx){
    console.log(arr);
    var returnVal = arr[idx];
    for(var i = idx; i < arr.length; i++){
        arr[i] = arr[i+1];
        console.log(arr);
    }
    arr.pop();
    console.log(arr);
    return returnVal;
}

//console.log(removeAt([1,2,3,4],1))
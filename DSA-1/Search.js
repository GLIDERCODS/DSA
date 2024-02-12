/* Linear Search */

const arr = [5,6,8,9,3,4,2,]

function linearSearch(arr,target){
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] === target){
            return console.log(i); 
        }
    }
    return -1
}

linearSearch(arr,4)


/*  Binary Serch */

const arr = [1,13,21,34,45,52,64,77,89]

function binarySearch(arr,target){
    let left = 0
    let right = arr.length-1

    while( left <= right ){
        let middle = Math.floor((left+right)/2)
        if(arr[middle] === target ){
            return middle
        }
        if(target < arr[middle]){
            right = middle-1
        }else{
            left = middle+1
        }
    }
    return -1
}

console.log(binarySearch(arr,77));


/*  Binary Search With Recursion  */

function recursiveBinarySearch(arr,target){
    return search(arr,target,0,arr.length-1)
}


function search(arr,target,left,right){
    if(left > right){
        return -1
    }

    let middle = Math.floor((left+right)/2)
    
    if(target === arr[middle]){
        return middle
    }

    if(target < arr[middle]){
        return search(arr,target,left,middle-1)
    }else{
        return search(arr,target,middle+1,right)
    }
}
console.log(recursiveBinarySearch([32,56,76,32,12,89,56,34,],89));

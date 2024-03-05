/* ===== Bubble Sort ===== */

function bubbleSort(arr){
    let swaped
    do {
        swaped = false
        for(let i=0 ; i<arr.length-1 ;i++){
            if(arr[i]>arr[i+1]){
                let temp = arr[i+1]
                arr[i+1] = arr[i]
                arr[i] = temp 
                swaped = true
            }
        }
        
    } while (swaped);
}

const array = [6,-1,7,-4,3,8,5]
bubbleSort(array)
console.log(array);

/*  =====  Insertion Sort  ===== */

function insertionsort(arr){
    for(let i = 1 ; i < arr.length ; i++){
        let temp = arr[i]
        let j = i-1
        while( j >= 0 && arr[j] > temp ){
            arr[j+1] = arr[j]
            j = j-1
        }
        arr[j+1] = temp
    }
}

const array = [4,6,-3,5,2,1]
insertionsort(array)
console.log(array);

/* =====  Quick Sort  ===== */

function quickSort(arr){
    if(arr.length <2){
        return arr
    }
    let temp = arr[arr.length-1]
    let left = []
    let right = []

    for(let i = 0 ; i<arr.length-1 ; i++){
        if(arr[i] > temp){
            right.push(arr[i])
        }else{
            left.push(arr[i])
        }
    }

    return [...quickSort(left),temp,...quickSort(right)]
}

const array = [4,6,-3,5,2,1]
console.log( quickSort(array));


/* =====  Selection Sort  ===== */

function selectionSort(arr){
    for(let i=0;i<arr.length-1;i++){
        let min = i
        for(let j=i+1;j<arr.length;j++){
            if(arr[j] < arr[min]){
                min = j
            }
        }
        if(arr[min]!=arr[i]){
            let temp = arr[i]
            arr[i]=arr[min]
            arr[min]=temp
        }
    }
    return arr
}

const array = [4,6,-3,5,2,1]
console.log( selectionSort(array));

/* ==== Merge Sort ==== */
function sort(arr){
    if(arr.length<2){
        return arr
    }
    let mid = Math.floor(arr.length/2)
    let left = arr.slice(0,mid)
    let right = arr.slice(mid)
    return merge(sort(left),sort(right))
    }
    function merge(left,right){
        let swape = []
        while(left.length&&right.length){
            if(left[0]<=right[0]){
                swape.push(left.shift())
            }else{
                swape.push(right.shift())
            }
        }
        return [...swape,...left,...right]
    }
    const Array = [3,6,7,5,2,1]
    
    console.log(sort(Array))
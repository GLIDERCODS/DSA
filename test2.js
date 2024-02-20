const array = [9,5,2,8,6,1,5]

function sort(arr){
    let swapped 
    do{
        swapped = false
        for(let i = 0 ; i<arr.length-1;i++){
            if(arr[i]>arr[i+1]){
                let temp = arr[i]
                arr[i]=arr[i+1]
                arr[i+1]=temp
                swapped=true
            }
        }
    }while(swapped)
}

sort(array)
console.log(array);
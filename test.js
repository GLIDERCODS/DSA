
const arr = [3,6,4,1,7,8,34,55]

function test(arr){
    if(arr.length <2){
        return arr
    }
    let last = arr[arr.length-1]
    let left = []
    let right = []
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]>last){
            right.push(arr[i])
        }else{
            left.push(arr[i])
        }
    }
    return [...test(left),last,...test(right)]
}



console.log(test(arr)); 
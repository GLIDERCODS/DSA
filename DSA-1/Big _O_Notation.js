
/* FIBONACCI SEQUENCE */

let arr =[]
const size = 2

arr[0]=0
arr[1]=1

for(let i=1;i<size-1;i++){
    arr[i+1] = arr[i]+arr[i-1]
}
console.log(arr);


/*  FACTORIAL OF A NUMBER  */

const num = 5
let sum = 1 

for(let i=1 ; i<=num ; i++){
    sum = sum*i
}

console.log(sum)


/*  PRIME NUMBER  */

const num = 4
let result = true
if(num<2){
    result = false
}

for(let i=2 ; i < num ; i++){
    if(num%i === 0 ){
        result = false
    }
    
}
console.log(result)


  
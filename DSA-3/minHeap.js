class Heap{
    constructor(){
        this.heap = []
    }
    display(){
        console.log(this.heap);
    }
    insert(value){
        this.heap.push(value)
        this.heapifyUp()
    }
    heapifyUp(){
        let currentIndex = this.heap.length-1
        while(currentIndex>0){
            let parentIndex = Math.floor((currentIndex-1)/2)
            if(this.heap[currentIndex]<this.heap[parentIndex]){
                this.swap(currentIndex,parentIndex)
                currentIndex=parentIndex
            }else{
                break
            }
        }
    }
    swap(index1,index2){
        let temp = this.heap[index1]
        this.heap[index1]=this.heap[index2]
        this.heap[index2]=temp
    }
    delete(value){
        const index = this.heap.indexOf(value)
        if(index!=-1){
            this.swap(index,this.heap.length-1)
            this.heap.pop()
            this.heapifyDown(index)
        }
    }

    heapifyDown(index){
        let smallest = index
        let left=2*index+1
        let right=2*index+2
        if(left<this.heap.length&&this.heap[left]<this.heap[smallest]){
            smallest=left
        }
        if(right<this.heap.length&&this.heap[right]<this.heap[smallest]){
            smallest=right
        }
        if(smallest!=index){
            this.swap(index,smallest)
            this.heapifyDown(smallest)
        }
    }
}
const heap = new Heap()
heap.insert(12)
heap.insert(54)
heap.insert(32)
heap.insert(72)
heap.insert(22)
heap.insert(14)
heap.insert(18)
heap.insert(20)
heap.display()
heap.delete(32)
heap.display()

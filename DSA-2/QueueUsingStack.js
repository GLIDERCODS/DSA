class queUsingStack{
    constructor(){
        this.stack1=[]
        this.stack2=[]
    }

    enqueue(value){
        this.stack1.push(value)
    }
    dequeue(){
        if(this.stack2.length===0){
            while(this.stack1.length>0){
                this.stack2.push(this.stack1.pop())
            }
        }
        return this.stack2.pop()
    }

    peek(){
        if(this.stack1.length===0){
            console.log("peek : ",this.stack2[this.stack2.length-1]);
        }else{
            console.log("peek : ",this.stack1[0]);
        }
    }

    print(){
        if(this.stack1.length===0){
            for (let i = 0; i < this.stack2.length; i++) {
                console.log(this.stack2[i]);
                
            }
        }else{
            for (let i = this.stack1.length-1; i >=0; i--) {
                console.log(this.stack1[i]);
                
            }
        }
        }
}

const queue = new queUsingStack()
queue.enqueue(90)
queue.enqueue(80)
queue.enqueue(70)
queue.enqueue(60)
queue.enqueue(50)
queue.peek()
queue.print()
console.log("after dequeue ===>");
queue.dequeue()
queue.peek()
queue.print()
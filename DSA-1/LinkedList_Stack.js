class ArrayStack{
    constructor(){
        this.array = []
    }

    isEmpty(){
        return this.array.length === 0
    }

    getSize(){
        return this.array.length
    }

    push(value){
        this.array.push(value)
    }

    pop(value){
        this.array.pop()
    }

    peek(){
        console.log(this.array.at(-1))
    }

    print(){
        console.log(this.array)
    }

    removeMid(){
        this.array.splice(Math.floor(this.getSize()/2),1)
        this.print()
    }
}

const stack = new ArrayStack()
stack.push(50)
stack.push(76)
stack.push(53)
stack.push(25)
stack.print()
stack.peek()
stack.pop()
stack.print()
stack.removeMid()
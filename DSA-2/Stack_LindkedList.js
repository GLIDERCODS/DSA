const LindkedList = require('./LinkedListForStack')

class StackLindkedList{
    constructor(){
        this.list = new LindkedList()
    }

    push(value){
       return this.list.prepend(value)
    }
    pop(){
       return this.list.removefront()
    }
    peek(){
        return this.list.head 
    }
    print(){
        return this.list.print()
    }
}

const stack = new StackLindkedList()
stack.push(78)
stack.push(39)
stack.push(89)
stack.push(60)
stack.print()
stack.pop()
stack.print()
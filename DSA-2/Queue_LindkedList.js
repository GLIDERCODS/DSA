const LindkedList = require("./LinkedListForStack")


class QueueLindkedList{
    constructor(){
        this.list = new LindkedList()
    }

    enqueue(value){
        return this.list.append(value)
    }

    dequeue(){
        return this.list.removefront()
    }
    peek(){
       return this.list.tail.value
    }

    display(){
        return this.list.print()
    }

}

const queue = new QueueLindkedList()

queue.enqueue(78)
queue.enqueue(38)
queue.enqueue(48)
queue.enqueue(58)
queue.display()
queue.dequeue()
queue.display()
console.log(queue.peek());
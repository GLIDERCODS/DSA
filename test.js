class Stack {
    constructor() {
        this.items = []; 
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        return this.items.pop(); 
    }

    isEmpty() {
        return this.items.length === 0; 
    }
}

class Queue {
    constructor() {
        this.pushStack = new Stack(); 
        this.popStack = new Stack();  
    }

    enqueue(value) {
        this.pushStack.push(value);
        console.log(this.pushStack.items);
        if (this.popStack.isEmpty()) {
            this.addToPopStack();
        }
    }

    addToPopStack() {
        while (!this.pushStack.isEmpty()) {
            this.popStack.push(this.pushStack.pop());
        }
    }

    dequeue() {
        if (!this.popStack.isEmpty()) {
            return this.popStack.pop();
        } else {
            this.addToPopStack();
            return this.popStack.pop();
        }
    }
}

let queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);

console.log(queue.dequeue()); // Output: 10
console.log(queue.dequeue()); // Output: 20
console.log(queue.dequeue()); // Output: 30
console.log(queue.dequeue()); // Output: 40
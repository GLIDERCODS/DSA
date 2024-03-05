class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
        this.mid = null
    }

    prepend(value){
        const node = new Node(value)
        if(this.size===0){
            this.head=node
            this.tail=node
        }else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    append(value){
        const node = new Node(value)
            if(this.size===0){
                this.head = node
                this.tail = node
                this.mid = node
            }else{
                this.tail.next = node
                this.tail = node
                if(this.size%2===0){
                    this.mid = this.mid.next
                }
            }
        this.size++
    }

    removeFrnd(){
        if(this.size===0){
            return null
        }
        this.head = this.head.next
        this.size--
    }

    display(){
        if(this.size===0){
            return -1
        }
        let listValue = ''
        let curr = this.head
        while(curr){
            listValue += `${curr.value} `
            curr = curr.next
        }
        return console.log(listValue);
    }

    reverse(node = this.head){
        if(node==null){
            return
        }
       
         this.reverse(node.next)
         
         return console.log(node.value);
    }
    removeMid(){
        let curr = this.head
        while(curr.next&&curr.next.value!==this.mid.value){
            curr = curr.next
        }
        let mid = curr.next
        if(mid){
            curr.next=mid.next
        }
    }
}

class Stack{
    constructor(){
        this.list = new LinkedList()
        this.size = 0  
    }

    push(value){
    
        this.list.append(value)
    }
    pop(){
        this.list.removeFrnd()
    }
    peek(){
        return console.log( this.list.tail.value);
    }
    display(){
        this.list.display()
    }
    mid(){
        this.list.removeMid()
    }
}

const stack = new Stack()
stack.push(70)
stack.push(80)
stack.push(45)
stack.push(65)
stack.push(30)
stack.push(77)
stack.display()
stack.peek()
stack.mid()
stack.display()
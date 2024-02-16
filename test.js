
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
    }

    isEmpty(){
        return this.size === 0
    }

    getSize(){
        return this.size
    }

    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        }else{
            node.next = this.head
            this.head = node
        }

        this.size ++
        
    }

    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        }
        let curr = this.head
        while(curr.next){
            curr = curr.next
        }
        curr.next = node
        this.tail = node
    }

    print(){
        if(this.isEmpty()){
            return null
        }
        let prev = this.head
        let listValue = ""
        while(prev){
            listValue += `${prev.value} `
            prev = prev.next
        }
        return console.log(listValue);
    }

    removeFrond(){
        if(this.isEmpty()){
            return null
        }else{
            this.head = this.head.next
        }
        this.size--
    }
}

const list = new LinkedList()
list.prepend(10)
list.prepend(20)
list.append(90)
list.print()
list.removeFrond()
list.print()
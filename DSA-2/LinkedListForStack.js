class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LindkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }

    isEmpty(){
        return this.size === 0
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
        this.size++
    }

    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        }else{
            this.tail.next = node
            this.tail = node
        }
        this.size++
    }
    removefront(){
        if(this.isEmpty()){
            return                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         null
        }else{
            this.head = this.head.next
            this.size--
        }

    }

    print(){
        if(this.isEmpty()){
            return null
        }

        let curr = this.head
        let listValue = ""
        while(curr){
            listValue += `${curr.value} `
            curr = curr.next
        }
        return console.log(listValue)
    }

    reverse(curr = this.head){
        if(curr == null){
            return 
        }
        this.reverse(curr.next)
        return console.log(curr.value)
         
    }
}

// const list = new LindkedList()
// list.prepend(90)
// list.prepend(60)
// list.prepend(40)
// list.append(25)
// list.print()
// list.reverse()

module.exports = LindkedList
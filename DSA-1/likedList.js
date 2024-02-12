


/* MY - node and linkedList creation */

class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.size = 0
    }

    isEmpty(){
        return this.size === 0
    }

    getSize(){
        return this.size
    }
}

const list1 = new LinkedList()
console.log("is empty : ",list1.isEmpty())
console.log("list size : ",list1.getSize());




/*  ----- prepend() AND print() AND append() AND insert() AND delete(v,i) AND search(val) AND reverse() ----- */



class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
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
        }else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }
    
    appent(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }else{
            let prev = this.head
            while(prev.next){
                prev = prev.next
            }
            prev.next = node
            this.size++
        }
    }

    insert(value , index){
        if(index < 0 || index >this.size){
            return console.log("enter valid index")
        }

        if(index === 0 ){
            this.prepend(value)
        }else{
            const node  = new Node(value)
            let prev = this.head
            for(let i=0 ; i<index-1;i++){
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
            this.size++
        }
    }

    removeFrom(index){
        if(index <0||index>this.size){
            return console.log("index not valid")
        }
        let removeNode
        if(index ===0){
            removeNode = this.head
            this.head = this.head.next
        }else{
            let curr = this.head
            for(let i=0;i<index-1;i++){
                curr = curr.next
            }
            removeNode = curr.next
            curr.next = removeNode.next
        }
        this.size--
        return console.log(removeNode)
    }

    removeValue(value){
        if(this.isEmpty()){
            return null
        }
        let removeValue 
        if(this.head.value === value){
            removeValue = this.head
            this.head = this.head.next
            this.size--
        }else{
            let prev = this.head
            while(prev.next &&prev.next.value !== value){
                prev=prev.next
            }
            if(prev.next){
                removeValue = prev.next
                prev.next = removeValue.next
                this.size--
                return console.log(removeNode)
            }
            return null
        }
    }

    search(value){
        if(this.isEmpty()){
            return -1
        }
        let i=0
        let curr = this.head
        while(curr){
            if(curr.value === value){
                return i
            }
            curr = curr.next
            i++
        }
        return  -1
    }

    reverse(){
        let prev = null
        let curr = this.head
        while(curr){
            let next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        this.head = prev
    }

    print(){
        if(this.isEmpty()){
            console.log("list is empty")
        }else{
            let curr = this.head
            let listValues = ''
            while(curr){
                listValues += `${curr.value} `
                curr = curr.next
            }
            console.log(listValues)
        }
    }

}

const list = new LinkedList()
list.prepend(10)
list.prepend(15)
list.appent(50)
list.appent(55)

list.insert(60,0)
list.insert(99,3)
list.print()
list.removeFrom(0)
list.print()
list.removeFrom(3)
list.print()
list.removeValue(15)
list.print()
console.log(list.search(55))
list.reverse()
list.print()


/*  LINKED LIST WITH TAIL */

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
            this.head=node
            this.tail=node
        }else{
            node.next = this.head
            this.head = node

        }
        this.size++

    }

    append(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.head=node
            this.tail=node
        }else{
            this.tail.next = node
            this.tail = node
        }
        this.size++
    }

    deleteFromFront(){
        if(this.isEmpty()){
            return null
        }
        this.head=this.head.next
        this.size--
    }

    deleteFromEnd(){
        if(this.isEmpty()){
            return null
        }
        if(this.size ===1){
            this.head=null
            this.tail=null
        }else{
            let prev = this.head
            while(prev.next !== this.tail){
                prev = prev.next
            }
            prev.next = this.tail.next
            this.tail = prev

        }
        this.size--
    }

    print(){
        if(this.isEmpty()){
            return null
        }
        let curr = this.head
        let listval = ''
        while(curr){
            listval += `${curr.value} `
            curr = curr.next
        }
        return console.log(listval)

    }
}

const list = new LinkedList()
list.append(10)
list.print()
list.append(20)
list.prepend(30)
list.prepend(40)
list.print()
list.deleteFromEnd()
list.print()





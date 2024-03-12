class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null
    }
    isEmpty(){
        return this.root===null
    }
    insert(value){
        const newNode = new Node(value)
        if(this.isEmpty()){
            this.root = newNode
        }else{
            this.insertNode(this.root,newNode)
        }
    }

    insertNode(root,newNode){
        if(newNode.value < root.value){
            if(root.left === null){
                root.left = newNode
            }else{
                this.insertNode(root.left,newNode)
            }
        }else{
            if(root.right===null){
                root.right = newNode
            }else{
                this.insertNode(root.right,newNode)
            }
        }
    }
    search(value,root=this.root){
        if(!root){
            return false
        }else{
            if(root.value === value){
                return true
            }else if(value < root.value){
               return this.search(value,root.left)
            }else{
               return this.search(value,root.right)
            }
        }
    }
}

const bsn = new BinarySearchTree()
console.log(bsn.isEmpty());
bsn.insert(10)
bsn.insert(13)
bsn.insert(6)
bsn.insert(4)
console.log(bsn.isEmpty());
console.log(bsn.search(6));
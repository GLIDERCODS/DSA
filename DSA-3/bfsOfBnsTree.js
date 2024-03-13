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
        const node = new Node(value)
        if(this.isEmpty()){
            this.root = node
        }else{
           return this.insertNode(this.root,node)
        }
    }
    insertNode(root,node){
        if(node.value < root.value){
            if(root.left===null){
                root.left = node
            }else{
                this.insertNode(root.left,node)
            }
        }else{
            if(root.right === null){
                root.right = node
            }else{
                this.insertNode(root.right,node)
            }
        }
    }
   levelOrder(){
    const queue = []
    queue.push(this.root)
    while(queue.length){
        let curr = queue.shift()
        console.log(curr.value);
        if(curr.left){
            queue.push(curr.left)
        }
        if(curr.right){
            queue.push(curr.right)
        }
    }
   }
}

const bsn = new BinarySearchTree()

bsn.insert(10)
bsn.insert(13)
bsn.insert(6)
bsn.insert(4)
bsn.levelOrder()
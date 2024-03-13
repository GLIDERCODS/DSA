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
            this.insertNode(this.root,node)
        }
    }

    insertNode(root,node){
        if(node.value < root.value){
            if(root.left === null){
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
    search(value,root=this.root){
        if(!root){
            return false
        }else{

            if(root.value===value){
                return true
            }else if(value < root.value){
                return this.search(value,root.left)
            }else{
                return this.search(value,root.right)
            }
        }
        
    }
    preOrder(root=this.root){
        if(root){
            console.log(root.value);
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }
    inOrder(root=this.root){
        if(root){
            this.inOrder(root.left)
            console.log(root.value);
            this.inOrder(root.right)
        }
    }
    postOrder(root=this.root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value)
        }
    }

}

const bst = new BinarySearchTree()
console.log(bst.isEmpty());
bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(4)
bst.insert(2)
console.log(bst.isEmpty());
console.log(bst.search(16));
console.log(bst.search(15));
console.log(bst.search(2));
console.log(bst.search(3));
console.log(bst.search(35));
console.log(bst.search(5));
console.log("pre");
bst.preOrder()
console.log("in");
bst.inOrder()
console.log("post");
bst.postOrder()
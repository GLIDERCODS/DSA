class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class binarySearchTree{
    constructor(){
        this.root = null
    }
    isEmpty(){
        return this.root === null
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
        if(node.value<root.value){
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
        if(root===null){
            return false
        }else{
            if(root.value === value){
                return true
            }else if( value < root.value ){
                return this.search(value,root.left)
            }else{
                return this.search(value,root.right)
            }
        }
    }
    /* dfs */
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
    postOrder(root = this.root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log((root.value));
        }
    }
    /* bfs */
    levelOrder(){
        const queue = []
        queue.push(this.root)
        while(queue.length){
            let curr = queue.shift()
            console.log(curr.value)
            if(curr.left){
                queue.push(curr.left)
            }
            if(curr.right){
                queue.push(curr.right)
            }
        }
    }
    min(root=this.root){
        if(root.left===null){
            return root.value
        }else{
           return this.min(root.left)
        }
    }
    max(root=this.root){
        if(root.right===null){
            return root.value
        }else{
          return  this.max(root.right)
        }
    }

   delet(value){
    this.root = this.deletNode(this.root,value)
   }
   deletNode(root,value){
    if(root === null){
        return root
    }
    if(value<root.value){
        root.left = this.deletNode(root.left,value)
    }else if(value > root.value){
        root.right = this.deletNode(root.right,value)
    }else{
        if(!root.left&&!root.right){
            return null
        }
        if(!root.left){
            return root.right
        }else if(!root.right){
            return root.left
        }
        root.value = this.min(root.right)
        root.right = this.deletNode(root.right,root.value)
    }
    return root
   }

}

const bst =new binarySearchTree()
bst.insert(10)
bst.insert(15)
bst.insert(5)
bst.insert(7)
bst.insert(2)
console.log(bst.search(2));
console.log("preOrder : ");
bst.preOrder()
console.log("inOrder : ");
bst.inOrder()
console.log("PostOrder : ");
bst.postOrder()
console.log("levelOrder");
bst.levelOrder()
console.log("min : ",bst.min());
console.log("max : ",bst.max());
bst.delet(2)
console.log("min : ",bst.min());
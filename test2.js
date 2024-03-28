class Node{
    constructor(){
        this.child={}
        this.end = false
    }
}

class Trie{
    constructor(){
        this.root = new Node()
    }
    insert(word){
        let node = this.root
        for(let char of word){
            if(!node.child[char]){
                node.child[char]=new Node()
            }
            node = node.child[char]
        }
        node.end=true
    }
    search(word){
        let node = this.root
        for(let char of word){
            if(!node.child[char]){
                return false
            }
            node=node.child[char]
        }
        return node.end
    }
    startWith(prefix){
        let string=[]
        let node = this.root
        for(let char of prefix){
            if(!node.child[char]){
                return false
            }else{
                for(let val of node.child){

                }
                // string.push(node.child[char])
            }
            node = node.child[char]
        }
        return string
    }
}
const trie = new Trie()
trie.insert("hello")
trie.insert("shibili")
console.log(trie.search("hello"));
console.log(trie.startWith("shibil"));

class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class Bnst{
    constructor(){
        this.root = null
    }
    insert(value){
        const node = new Node(value)
        if(this.root===null){
            this.root = node
        }else{
            this.insertNode(this.root,node)
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
            if(root.right===null){
                root.right = node
            }else{
                this.insertNode(root.right,node)
            }
        }
    }
    inOrder(root = this.root){
        if(root){
            this.inOrder(root.left)
            console.log(root.value);
            this.inOrder(root.right)
        }
    }
}



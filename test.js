// potttaaaaaaaaaaaaaaaaaaaa
// mandaaaaaaaaaaaaaaaa
class Node{
    constructor(){
        this.childe = {}
        this.end = false
    }
}

class Trie{
    constructor(){
        this.root = new Node()
    }
    insert(word){
        let node=this.root
        for(let char of word){
            if(!node.childe[char]){
                node.childe[char] = new Node()
            }
            node = node.childe[char]
        }
        node.end = true
    }
    search(word){
        let node = this.root
        for(let char of word){
            if(!node.childe[char]){
                return false
            }
            node = node.childe[char]
        }
        return node.end
    }

    startWith(prefix){
        let node = this.root
        for(let char of prefix){
            if(!node.childe[char]){
                return false
            }
            node = node.childe[char]
        }
        return true
    }
}

const trie = new Trie()
trie.insert("hello")
trie.insert("apple")
console.log(trie.search("appl"));
console.log(trie.startWith("apl"));


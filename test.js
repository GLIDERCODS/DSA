class Graph{
    constructor(){
        this.adjesencyList = {}
    }
    addVertex(vertex){
        if(!this.adjesencyList[vertex]){
            this.adjesencyList[vertex] = new Set()
        }
    }
    addEdge(vertex1,vertex2){
        if(!this.adjesencyList[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.adjesencyList[vertex2]){
            this.addVertex(vertex2)
        }
        this.adjesencyList[vertex1].add(vertex2)
        this.adjesencyList[vertex2].add(vertex1)
    }
    display(){
        for(let vertex in this.adjesencyList){
            console.log(vertex + ' -> ' + [...this.adjesencyList[vertex]])
        }
    }
    hasEdge(vertex1,vertex2){
        return (
            this.adjesencyList[vertex1].has(vertex2)&&
            this.adjesencyList[vertex2].has(vertex1)
        )
    }
    removeEdge(vertex1,vertex2){
        this.adjesencyList[vertex1].delete(vertex2)
        this.adjesencyList[vertex2].delete(vertex1)
    }
    removeVertex(vertex){
        if(!this.adjesencyList[vertex]){
            return
        }
        for(let adjecentVertex of this.adjesencyList[vertex]){
            this.removeEdge(vertex,adjecentVertex)
        }
        delete this.adjesencyList[vertex]
    }
}
const graph = new Graph()
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addEdge("A","B")
graph.addEdge("B","C")
graph.display()
console.log(graph.hasEdge("A","C"));
console.log(graph.hasEdge("B","C"));
graph.removeVertex("B")
graph.display()
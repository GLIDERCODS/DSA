class Graph{
    constructor(){
        this.adjecensyList = {}
    }

    addVertex(vertex){
        if(!this.adjecensyList[vertex]){
            this.adjecensyList[vertex] = new Set()
        }
    }

    addEdge(vertex1,vertex2){
        if(!this.adjecensyList[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.adjecensyList[vertex2]){
            this.addVertex(vertex2)
        }
        this.adjecensyList[vertex1].add(vertex2)
        this.adjecensyList[vertex2].add(vertex1)
    }

    display(){
        for(let vertex in this.adjecensyList){
            console.log(vertex + " -> " + [...this.adjecensyList[vertex]])
        }
    }

    hasEdge(vertex1,vertex2){
        return (
            this.adjecensyList[vertex1].has(vertex2)&&this.adjecensyList[vertex2].has(vertex1)
        )
    }

    removeEdge(vertex1,vertex2){
        this.adjecensyList[vertex1].delete(vertex2)
        this.adjecensyList[vertex2].delete(vertex1)
    }

    removeVertex(vertex){
        if(!this.adjecensyList[vertex]){
            return 
        }
        for(let adjVertex of this.adjecensyList[vertex]){
            this.removeEdge(vertex,adjVertex)
        }
        delete this.adjecensyList[vertex]
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



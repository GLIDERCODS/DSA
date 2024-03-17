class Graph{
    constructor(){
        this.adjecencyList = {}
    }

    addVertex(vertex){
        if(!this.adjecencyList[vertex]){
            this.adjecencyList[vertex] = new Set()
        }
    }

    addEdg(vertex1,vertex2){
        if(!this.adjecencyList[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.adjecencyList[vertex2]){
            this.addVertex(vertex2)
        }
        this.adjecencyList[vertex1].add(vertex2)
        this.adjecencyList[vertex2].add(vertex1)
    }

    hasEdg(vertex1,vertex2){
        return (
            this.adjecencyList[vertex1].has(vertex2)&&this.adjecencyList[vertex2].has(vertex1)
        )
    }

    removeEdge(vertex1,vertex2){
        this.adjecencyList[vertex1].delete(vertex2)
        this.adjecencyList[vertex2].delete(vertex1)

    }

    removeVertex(vertex){
        if(!this.adjecencyList[vertex]){
            return
        }
        for(let adjecentVertex of this.adjecencyList[vertex]){
            this.removeEdge(vertex,adjecentVertex)
        }
        delete this.adjecencyList[vertex]
    }

    display(){
        for(let vertex in this.adjecencyList){
            console.log(vertex + " -> " + [...this.adjecencyList[vertex]]);
        }
    }
}

const graph = new Graph()
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")

graph.addEdg("A","B")
graph.addEdg("B","C")
graph.display()

console.log(graph.hasEdg("A","C"));
graph.removeVertex("B")
graph.display()

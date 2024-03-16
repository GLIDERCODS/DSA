class Graph{
    constructor(){
        this.adjecencyList = {}
    }
    addVeretex(vertex){
        if(!this.adjecencyList[vertex]){
            this.adjecencyList[vertex] = new Set()
        }
    }
    addEdge(vertex1,vertex2){
        if(!this.adjecencyList[vertex1]){
            this.addVeretex(vertex1)
        }
        if(!this.adjecencyList[vertex2]){
            this.addVeretex(vertex2)
        }
        this.adjecencyList[vertex1].add(vertex2)
        this.adjecencyList[vertex2].add(vertex1)

    }
}
const graph = new Graph()
graph.addVeretex("A")
graph.addVeretex("B")
graph.addVeretex("C")

graph.addEdge("A","B")
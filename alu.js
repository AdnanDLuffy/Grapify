const graph = require("grapify");

const resultingGraph = graph(2,100,{subjectArray:"English,Math"},{Marks:"100,100"});
console.log(resultingGraph);
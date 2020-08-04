import * as d3 from 'd3';
/* not a React component */

class D3Chart {

    //recibe el elemento contenedor
    constructor(element) {
        var svg = d3.select(element)
            .append("svg")
            .attr("width", 500)
            .attr("height", 500)

        var rect = svg.append("rect")
            .attr("x", 50)
            .attr("y", 50)
            .attr("width", 100)
            .attr("height", 400)
            .attr("fill", "yellow")
    }
}

export default D3Chart;

// npm install --save d3
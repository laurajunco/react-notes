import * as d3 from 'd3';
/* not a React component */

const data = [20, 12, 17, 4, 25];

class D3Chart {

    //recibe el elemento contenedor
    constructor(element) {
        var svg = d3.select(element)
            .append("svg")
            .attr("width", 500)
            .attr("height", 500)

        var rects = svg.selectAll("rect")
            .data(data)
            .enter()
            .append("rect")
            .attr("x", (d, i) => i * 50)
            .attr("y", 50)
            .attr("width", 40)
            .attr("height", d => d)
            .attr("fill", "orange");
    }
}

export default D3Chart;

// npm install --save d3
import * as d3 from 'd3';

const url = "https://udemy-react-d3.firebaseio.com/tallest_men.json";

class D3Chart {

    //recibe el elemento contenedor
    constructor(element) {

        const svg = d3.select(element)
                .append("svg")
                .attr("width", 800)
                .attr("height", 500);

        d3.json(url).then(dataset => {
            console.log(dataset);

            //rects
            var rects = svg.selectAll("rect")
                .data(dataset)
                .enter()
                .append("rect")
                .attr("x", (d, i) => i * 50)
                .attr("y", 0)
                .attr("width", 40)
                .attr("height", d => d.height)
                .attr("fill", "grey");
        })
    }
}

export default D3Chart;

// npm install --save d3
//npm install react-bootstrap bootstrap
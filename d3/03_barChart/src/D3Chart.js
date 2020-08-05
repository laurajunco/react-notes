import * as d3 from 'd3';

const url = "https://udemy-react-d3.firebaseio.com/tallest_men.json";
const width = 800;
const height = 500;

class D3Chart {

    //recibe el elemento contenedor
    constructor(element) {

        const svg = d3.select(element)
                .append("svg")
                .attr("width", width)
                .attr("height", height);

        d3.json(url).then(dataset => {
            console.log(dataset);

            //scales
            var y = d3.scaleLinear()
                .domain([0, d3.max(dataset, d => d.height)])
                .range([0, height]);

            var x = d3.scaleBand()
                .domain(dataset.map(d => d.name))
                .range([0, width])
                .padding(0.3);

            //rects
            var rects = svg.selectAll("rect")
                .data(dataset)
                .enter()
                .append("rect")
                .attr("x", d => x(d.name))
                .attr("y", d => height - y(d.height))
                .attr("width", x.bandwidth)
                .attr("height", d => y(d.height))
                .attr("fill", "grey");
        })
    }
}

export default D3Chart;

// npm install --save d3
//npm install react-bootstrap bootstrap
import * as d3 from 'd3';

const url = "https://udemy-react-d3.firebaseio.com/tallest_men.json";
const margin = {
    top: 10,
    bottom: 50,
    left: 70,
    right: 10
};
const width = 800 - margin.left - margin.right;
const height = 500 - margin.top - margin.bottom;

class D3Chart {

    //cosas que no cambian
    constructor(element) {
        const vis = this;

        vis.svg = d3.select(element)
            .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", `translate(${margin.left}, ${margin.top})`)

        // draw Axis labels
        vis.xLabel = this.svg.append("text")
            .attr("x", width / 2)
            .attr("y", height + 50)
            .attr("text-anchor", "middle")
            .text("The worlds tallest men")

        vis.yLabel = this.svg.append("text")
            .attr("x", -(height / 2))
            .attr("y", -50 )
            .attr("text-anchor", "middle")
            .attr("transform", "rotate(-90)")
            .text("Height in cm");

        vis.xAxisGroup = this.svg.append("g")
            .attr("transform", `translate(0, ${height})`);

        vis.yAxisGroup = this.svg.append("g");
            
        d3.json(url).then(dataset => {
            vis.dataset = dataset;
            
            d3.interval(() => {
                vis.update();
            }, 1000);

        })
    }

    //cosas que se ctualizan
    update () {
        const vis = this;

        //scales
        var y = d3.scaleLinear()
        .domain([ 
            d3.min(vis.dataset, d => d.height) * 0.95,
            d3.max(vis.dataset, d => d.height)])
        .range([height, 0]);

        var x = d3.scaleBand()
            .domain(vis.dataset.map(d => d.name))
            .range([0, width])
            .padding(0.3);

        //axis generators
        var xAxisCall = d3.axisBottom(x);
        var yAxisCall = d3.axisLeft(y);

        //Data JOIN
        var rects = vis.svg.selectAll("rect")
            .data(vis.dataset)

        //EXIT
        rects.exit().remove()

        //UPDATE
        rects.attr("x", d => x(d.name))
            .attr("y", d => y(d.height))
            .attr("width", x.bandwidth)
            .attr("height", d => height - y(d.height))
            .attr("fill", "grey");

        // ENTER create elements
        rects.enter()
            .append("rect")
            .attr("x", d => x(d.name))
            .attr("y", d => y(d.height))
            .attr("width", x.bandwidth)
            .attr("height", d => height - y(d.height))
            .attr("fill", "grey");

        //drawAxis
        vis.xAxisGroup.call(xAxisCall); 
        vis.yAxisGroup.call(yAxisCall);
    }
}

export default D3Chart;

// npm install --save d3
//npm install react-bootstrap bootstrap
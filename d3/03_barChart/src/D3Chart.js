import * as d3 from 'd3';
/* not a React component */

//const data = [20, 12, 17, 4, 25];
const url = "https://udemy-react-d3.firebaseio.com/ages.json";

class D3Chart {

    //recibe el elemento contenedor
    constructor(element) {

        var svg = d3.select(element)
                .append("svg")
                .attr("width", 500)
                .attr("height", 500);

        d3.json(url).then(function(dataset){
            console.log(dataset);

            var rects = svg.selectAll("rect")
                .data(dataset)
                .enter()
                .append("rect")
                .attr("x", (d, i) => i * 50)
                .attr("y", 50)
                .attr("width", 40)
                .attr("height", d => d.age * 10)
                .attr("fill", d => {
                    if (d.age > 10){
                        return "red";
                    }
                    return "grey";
                });
        })
    }
}

export default D3Chart;

// npm install --save d3
import React, { Component } from 'react';
import D3Chart from './D3Chart';

class ChartWrapper extends Component {
    constructor(props) {
        super(props);
        this.ref = React.createRef();
    }

    componentDidMount() {
        var element = this.ref.current;
        this.setState({
            chart: new D3Chart(element)
        })
            
    }

    shouldComponentUpdate() {
        //stop rerendering
        return false;
    }

    componentWillReceiveProps(nextProps) {
        //corre cada vez que se le mandan nuevas props al componente
        this.state.chart.update(nextProps.gender);
    }

    render() {
        return <div ref={this.ref}>
        </div>
    }
}

export default ChartWrapper;
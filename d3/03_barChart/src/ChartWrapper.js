import React, { Component } from 'react';
import D3Chart from './D3Chart';

class ChartWrapper extends Component {
    constructor(props) {
        super(props);
        this.ref = React.createRef();
    }

    componentDidMount() {
        var element = this.ref.current;
        new D3Chart(element);
    }

    render() {
        return <div ref={this.ref}>
        </div>
    }
}

export default ChartWrapper;
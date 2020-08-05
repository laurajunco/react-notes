import React, { Component } from 'react';
import ChartWrapper from './ChartWrapper';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

class App extends Component {
  render() {
    return (
      <div className="App">

        <Navbar bg="light">
          <Navbar.Brand>Bar chart</Navbar.Brand>
        </Navbar>

        <Container>
          <ChartWrapper />
        </Container>
        
      </div>
    );
  }
}

export default App;

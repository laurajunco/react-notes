import React, { Component } from 'react';
import ChartWrapper from './ChartWrapper';
import GenderDropdown from './GenderDropdown';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class App extends Component {
  state = {
    gender: "men"
  };

  genderSelected = (gender) => {
    this.setState ({
      gender: gender
    });
  };

  render() {
    return (
      <div className="App">

        <Navbar bg="light">
          <Navbar.Brand>Bar chart</Navbar.Brand>
        </Navbar>

        <Container>
          <Row>
            <Col xs={12}>
              <GenderDropdown genderSelected={this.genderSelected}/>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <ChartWrapper />
            </Col>
          </Row>
        </Container>
        
      </div>
    );
  }
}

export default App;

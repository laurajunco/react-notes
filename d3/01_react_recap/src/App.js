import React, { Component } from 'react';
import Test from './Test'

class App extends Component {
  state = {
    personClicks: 0
  }

  /*personClicked() {
    this.setState({
      personClicks: this.state.personClicks + 1
    })
  }

  render() {
    return (
      <div className="App">
        {// binds funciton to test component with app context}
      <Test person="Laura" personClicked={this.personClicked.bind(this)}/>
      <Test person="Lina" personClicked={this.personClicked.bind(this)}/>
      <Test person="Gloria" personClicked={this.personClicked.bind(this)}/>

      Person Clicks: {this.state.personClicks}
      </div>
    )
  }*/

  /* arrow function always has the context of where it is called */
  personClicked = () => {
    this.setState({
      personClicks: this.state.personClicks + 1
    })
  }

  render() {
    return (
      <div className="App">
        {/* binds funciton to test component with app context*/}
      <Test person="Laura" personClicked={this.personClicked}/>
      <Test person="Lina" personClicked={this.personClicked}/>
      <Test person="Gloria" personClicked={this.personClicked}/>

      Person Clicks: {this.state.personClicks}
      </div>
    )
  }
}
export default App;

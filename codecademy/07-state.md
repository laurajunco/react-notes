# state

- Dynamic information is information that can change.

- React components will often need dynamic information in order to render. For example, imagine a component that displays the score of a basketball game. The score of the game might change over time, meaning that the score is dynamic. Our component will have to know the score, a piece of dynamic information, in order to render in a useful way.

- There are two ways for a component to get dynamic information: props and state. Besides props and state, every value used in a component should always stay exactly the same. 

### Setting Initial State

- Unlike props, a component’s state is not passed in from the outside. A component decides its own state.

- To make a component have state, give the component a state property. This property should be declared inside of a constructor method, like this:

```javascript
class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mood: 'decent' };
  }

  render() {
    return <div></div>;
  }
}

<Example />
```

- this.state should be equal to an object, like in the example above. This object represents the initial “state” of any component instance. 

- It is important to note that React components always have to call super in their constructors to be set up properly.

- Methods should never be comma-separated, if inside of a class body. 


### Access a Component's state

- To read a component’s state, use the expression this.state.name-of-property:


```javascript

class TodayImFeeling extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mood: 'decent' };
  }

  render() {
    return (
      <h1>
        I'm feeling {this.state.mood}!
      </h1>
    );
  }
}

```
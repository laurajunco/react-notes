# this.props

- Every component has something called props.
- A component’s props is an object. It holds information about that component.
- To see a component’s props object, you use the expression this.props

```javascript
render() {
  console.log("Props object comin' up!");

  console.log(this.props);

  console.log("That was my props object!");

  return <h1>Hello world</h1>;
}
```

### Pass `props` to a Component

- You can pass information to a React component.
- How? By giving that component an attribute:

```javascript
<Example message="This is some top secret info." />
```

- If you want to pass information that isn’t a string, then wrap that information in curly braces.

```javascript
<Greeting myInfo={["top", "secret", "lol"]} />

<Greeting name="Frarthur" town="Flundon" age={2} haunted={false} />
```

- You just passed information to a component’s props object!
- You will often want a component to display the information that you pass.

Here’s how to make a component display passed-in information:

1. Find the component class that is going to receive that information.
2. Include this.props.name-of-information in that component class’s render method’s return statement.

```javascript
class Greeting extends React.Component {
  render() {
    return <h1>Hi there, {this.props.firstName} </h1>;
  }
}

ReactDOM.render(
  <Greeting firstName='Laura' />, 
  document.getElementById('app')
);
```

### Pass props From Component To Component

- props can only be passed down the component tree, or from parent to child components.

### Render Different UI Based on props
- You can do more with props than just display them. You can also use props to make decisions.

```javascript
render() {
  	if (this.props.signedIn == false) {
  	  return <h1>GO AWAY</h1>;
  	} else {
  	  return <h1>Hi there, {this.props.name}!</h1>;
  	}
  }
```

### Put an Event Handler in a Component Class
- It is especially common to pass event handler functions.
- You have to define an event handler before you can pass one anywhere

How do you define an event handler in React?
- You define an event handler as a method on the component class, just like the render method. Almost all functions that you define in React will be defined in this way, as methods in a class.
```javascript
handleEvent() {

}
```

```javascript

class Example extends React.Component {
  handleEvent() {
    alert(`I am an event handler.
      If you see this message,
      then I have been called.`);
  }

  render() {
    return (
      <h1 onClick={this.handleEvent}>
        Hello world
      </h1>
    );
  }
}

```

### Pass an Event Handler as a prop

- You can pass a method in the exact same way that you pass any other information

```javascript
render() {
    return <Button talk= { this.talk } />;
}
```

### Receive an Event Handler as a prop

- How do you do that? The same way that you attach any event handler to a JSX element: you give that JSX element a special attribute. The attribute’s name should be something like onClick or onHover. The attribute’s value should be the event handler that you want to attach.

```javascript
export class Button extends React.Component {
  render() {
    return (
      <button onClick={this.props.talk}>
        Click me!
      </button>
    );
  }
}
```

### Naming event handlers

- If you are listening for a “click” event, then you name your event handler handleClick. If you are listening for a “keyPress” event, then you name your event handler handleKeyPress:

```javascript
class MyClass extends React.Component {
  handleHover() {
    alert('I am an event handler.');
    alert('I will be called in response to "hover" events.');
  }
}
```

- Your prop name should be the word on, plus your event type. If you are listening for a “click” event, then you name your prop onClick. If you are listening for a “keyPress” event, then you name your prop onKeyPress:

```javascript
render() {
    return <Child onHover={this.handleHover} />;
  }
```

```javascript
<button onClick={this.props.onClick}>
        Click me!
</button>
```


### this.props.children

- Every component’s props object has a property named children.

- this.props.children will return everything in between a component’s opening and closing JSX tags.

- all of the components that you’ve seen have been self-closing tags, such as <MyComponentClass />. They don’t have to be! You could write <MyComponentClass></MyComponentClass>, and it would still work.

```javascript
    <List type='Living Musician'> //opening tag
        <li>Sachiko M</li> //child
        <li>Harvey Sid Fisher</li> //child
    </List> //closing tag
```

```javascript
export class List extends React.Component {
  render() {
    let titleText = {this.props.type}
    return (
      <div>
        <h1>{titleText}</h1>
        <ul>
          {this.props.children}
        </ul>
      </div>
    );
  }
}
```

### defaultProps

- If no information is passed to component prop, you can give default properties to that component.

- The defaultProps property should be equal to an object:

```javascript
class Example extends React.Component {
  render() {
    return <h1>{this.props.text}</h1>;
  }
}

// Set defaultProps equal to an object:
Example.defaultProps = {
    text: 'yo'
};
```


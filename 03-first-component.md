# First React component

### What's a COmponent?
- React applications are made out of _components_
- A component is a small, reusable chunk of code that is responsible for one job. That job is often to render some HTML.

```javascript
//create a variable named React
import React from 'react';
```
- The variable’s name is React, and its value is a particular, imported JavaScript object
- This imported object contains methods that you need in order to use React. The object is called the React library.
- You have to import the React library, and save it in a variable named React, before you can use any JSX at all. 
- Also React.createElement() must be available in order for JSX to work.

```javascript
//create a variable named ReactDOM
import ReactDOM from 'react-dom';
```

### Create a Component Class
- Every component must come from a component class.
- A component class is like a factory that creates components.
- To make a component class, you use a base class from the React library: React.Component.

_React.Component_ is a JavaScript class. To create your own component class, you must subclass React.Component. You can do this by using the syntax:

```javascript
class x extends React.Component {}
```

### Name a Component Class
- Subclassing React.Component is the way to declare a new component class.
- When you declare a new component class, you need to give that component class a name
- Component class variable names must begin with capital letters!

```javascript
class MyComponentClass extends React.Component {}
```

### Component Class Instructions
- A component class is like a factory that produces components. When you start making components, each one will come from a component class.
- The Body of the class will act as a set of instructions, explaining to your component class how it should build a React component.

```javascript
{
  render() {
    return <h1>Hello world</h1>;
  }
}
```

### The Render Function
- The calss body  should be written in typical JavaScript ES2015 class syntax.
- There is only one property that you have to include in your instructions: a render method.
- A render method is a property whose name is render, and whose value is a function. The term “render method” can refer to the entire property, or to just the function part.

```javascript
class ComponentFactory extends React.Component {
  render() {}
}
```

-  A render method must contain a return statement. Usually, this return statement returns a JSX expression:

```javascript
class ComponentFactory extends React.Component {
  render() {
    return <h1>Hello world</h1>;
  }
}
```

### Create a Component Instance
- let’s make a React component! It only takes one more line:

```javascript
<MyComponentClass />
```

### Render A Component
- Whenever you make a component, that component inherits all of the methods of its component class
- MyComponentClass has one method: MyComponentClass.render(). Therefore,<MyComponentClass /> also has a method named render.
-  In order to render a component, that component needs to have a method named render.

- To call a component’s render method, you pass that component to ReactDOM.render().

```javascript
ReactDOM.render(
  <MyComponentClass />,
  document.getElementById('app')
);
```

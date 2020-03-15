# Components and advanced JSX

### Use a Variable Attribute in a Component

```javascript
import React from 'react';
import ReactDOM from 'react-dom';

const owl = {
  title: 'Beautiful Owl',
  src: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-owl.jpg'
};

class Owl extends React.Component {
  render() {
    return (
      <div>
        <h1>
          {owl.title}
        </h1>
        <img
          src={owl.src}
          alt={owl.title}
        />
      </div>
    );
  }
};

ReactDOM.render(
  <Owl />,
  document.getElementById( 'app' )
);
```

### Put Logic in a Render Function
- A render() function must have a return statement. However, that isn’t all that it can have.
- A render() function can also be a fine place to put simple calculations that need to happen right before a component renders.

```javascript
class Random extends React.Component {
  render() {
    // First, some logic that must happen
    // before rendering:
    const n = Math.floor(Math.random() * 10 + 1);
    // Next, a return statement
    // using that logic:
    return <h1>The number is {n}!</h1>;
  }
}
```

### Use a Conditional in a Render Function
- if statements can be located inside of the render function, but before the return statement.

```javascript
class TodaysPlan extends React.Component {
  render() {
    let task;
    if (!apocalypse) {
      task = 'learn React.js'
    } else {
      task = 'run around'
    }

    return <h1>Today I am going to {task}!</h1>;
  }
}
```

### Use _this_ in a Component
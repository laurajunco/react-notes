# Advanced JSX

### Class vs className
- Grammar in JSX is mostly the same as in HTML, but there are subtle differences to watch out for. Probably the most frequent of these involves the word _class_.
- In JSX, you can’t use the word _class_! You have to use _className_ instead:

In html:
```html
<h1 class="big">Hey</h1>
```

In javascript:
```javascript
<h1 className="big">Hey</h1>
```

- When JSX is rendered, JSX className attributes are automatically rendered as class attributes

### Self-CLosing Tags
- In JSX, you have to include the slash in self-closing tags. If you write a self-closing tag in JSX and forget the slash, you will raise an error:

Fine in JSX:
```javascript
  <br />
```
NOT FINE AT ALL in JSX:
```javascript
  <br>
```

### JavaScript In Your JSX In Your JavaScript

- Regular javascript written inside of a JSX expression.
- We want to use JavaScript in our JSX to render logic!
- You have to wrap javscript code in curly braces, Everything inside of the curly braces will be treated as regular JavaScript:

```javascript
<h1>{2 + 3}</h1>
```

### Variables in JSX

- When you inject JavaScript into JSX, that JavaScript is part of the same environment as the rest of the JavaScript in your file.
- That means that you can access variables while inside of a JSX expression, even if those variables were declared on the outside:

```javascript
const name = 'Laura';
const p1 = <p>Hello, {name}!</p>;
```

### Variable Attributes in JSX
- It is common to use variables to set attributes.
- You can write each attribute on a different line to make code easier to read.

```javascript
const sideLength = "200px";
const panda = (
  <img 
    src="images/panda.jpg" 
    alt="panda" 
    height={sideLength} 
    width={sideLength} />
);
```

- Object properties are also often used to set attributes:

```javascript
const pics = {
  panda: "http://bit.ly/1Tqltv5",
  owl: "http://bit.ly/1XGtkM3",
  owlCat: "http://bit.ly/1Upbczi"
}; 

const panda = (
  <img 
    src={pics.panda} 
    alt="Lazy Panda" />
);
```

```javascript
import React from 'react';
import ReactDOM from 'react-dom';

const goose = 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-goose.jpg';

// Declare new variable here:
const gooseImg = ( <img src= {goose} /> );

ReactDOM.render( gooseImg, document.getElementById( 'app' ) );
```

### Event Listeners in JSX
- JSX elements can have event listeners, just like HTML elements can.

- You create an event listener by giving a JSX element a special attribute:

```javascript
<img onClick={myFunc} />
```

Some common event attributes:
 #### onClick onDrag onMouseDown onMouseEnter onMouseLeave onFocus onScroll...

- An event listener atribute's value _should_ be a function
- On html event listeners are written all in lowercase, in JSX we use camelCase

```javascript
function myFunc() {
  alert('this is an alert');
}

<img onClick={myFunc} />
```

```javascript
function makeDoggy(e) {
  e.target.setAttribute('src', 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-puppy.jpeg');
  e.target.setAttribute('alt', 'doggy');
}

const kitty = (
    <img 
        src="https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-kitty.jpg" 
        alt="kitty" 
        onClick={makeDoggy}
    />
);

ReactDOM.render( kitty, document.getElementById( 'app' ) );

```

### JSX Conditionals: If Statements That Don't Work

- You can not inject an if statement into a JSX expression.

This code will break:
```javascript
(
  <h1>
    {
      if (purchase.complete) {
        'Thank you for placing an order!'
      }
    }
  </h1>
)
```

### JSX Conditionals: If Statements That Do Work

- One option to write conditionals in react is to write them *Outside* JSX elements

```javascript
let message;

if (user.age >= drinkingAge) {
  message = (
    <h1>
      Hey, check out this alcoholic beverage!
    </h1>
  );
} else {
  message = (
    <h1>
      Hey, check out these earrings I got at Claire's!
    </h1>
  );
}

ReactDOM.render(
  message, 
  document.getElementById('app')
);
```

### JSX Conditionals: The Ternary Operator
- There’s a more compact way to write conditionals in JSX: the ternary operator.

```javascript
const headline = (
  <h1>
    { age >= drinkingAge ? 'Buy Drink' : 'Do Teen Stuff' }
  </h1>
);
```

### JSX Conditionals: &&
- The && operator is another way of writing conditionals in React
- && works best in conditionals that will sometimes do an action, but other times do nothing at all

```javascript
const tasty = (
  <ul>
    <li>Applesauce</li>
    { !baby && <li>Pizza</li> }
    { age > 15 && <li>Brussels Sprouts</li> }
    { age > 20 && <li>Oysters</li> }
    { age > 25 && <li>Grappa</li> }
  </ul>
);
```
Every time that you see && in this example, either some code will run, or else no code will run.

Tips to help decide on which conditional statement or operator to use:

1. The && and ternary operators are more concise, choose either of these when possible
2. Choose the && over a ternary when you want an action to occur (or not) based on a single condition
3. Choose an if/else/else if statement when you need to extrapolate logic to make it easier to read and understand

### .map in JSX
- If you want to create a list of JSX elements, then .map() is often your best bet.

```javascript
const strings = ['Home', 'Shop', 'About Me'];

const listItems = strings.map(string => <li>{string}</li>);

<ul>{listItems}</ul>
```
- .map() returns and a new array of < li > elements (listItems)

```javascript
// This is fine in JSX, not in an explicit array:

<ul>
  <li>item 1</li>
  <li>item 2</li>
  <li>item 3</li>
</ul>

// This is also fine!

const liArray = [
  <li>item 1</li>, 
  <li>item 2<li>, 
  <li>item 3</li>
];

<ul>{liArray}</ul>
```

### Keys
- When you make a list in JSX, sometimes your list will need to include something called keys:

```javascript
<ul>
  <li key="li-01">Example1</li>
  <li key="li-02">Example2</li>
  <li key="li-03">Example3</li>
</ul>
```
- React uses Keys internally to keep track of lists. If you don’t use keys when you’re supposed to, React might accidentally scramble your list-items into the wrong order.

- The attribute’s value should be something unique, similar to an id attribute.

- Not all lists need to have keys. A list needs keys if either of the following are true:

1. The list-items have memory from one render to the next. For instance, when a to-do list renders, each item must “remember” whether it was checked off. The items shouldn’t get amnesia when they render.

2. A list’s order might be shuffled. For instance, a list of search results might be shuffled from one render to the next.

```javascript
const people = ['Rowe', 'Prevost', 'Gare', 'Laura'];

const peopleLis = people.map((person, i) => <li key={'person_'+ i }>{person}</li>

ReactDOM.render(<ul>{peopleLis}</ul>, document.getElementById( 'app' ) );
```

### React.createElement

- You can write React code without using JSX at all.

The following JSX expression:
```javascript
const h1 = <h1>Hello world</h1>;
```
Can be rewritten without JSX, like this:
```javascript
const h1 = React.createElement(
  "h1",
  null,
  "Hello, world"
);
```
- Every JSX element is secretly a call to React.createElement().

- We would use React.createElement() instead of JSX when we do not want to set up compilation for our project, which the use of JSX requires!
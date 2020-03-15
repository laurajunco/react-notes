# Intro to JSX

### What is JSX?
- a basic unit of JSX is called JSX element
- an example of a JSX element: 

```javascript
<h1>Hello world</h1>
```
- it looks exactlly linea html but you would find it in a javascript file


### JSX Elements and their surroundings
- JSX elementes are treated as javascript expressions
- A JSX element can be saved in a variable, passed to a function, stored in an object or array...


### Attributes in JSX
- JSX elements can have attributes, just like HTML elements can.
- They work the same as html attributes

```javascript
const p1 = <p id = "large"> foo </p>;
const p2 = <p id = "small"> bar </p>;
```


### Nested JSX
- You can nest JSX elements inside of other JSX elements, just like in HTML.
- If a JSX expression takes up more than one line, then you must wrap the multi-line JSX expression in parentheses:

```javascript
(
  <a href="https://www.example.com">
    <h1>
      Click me!
    </h1>
  </a>
);
```

```javascript
const myDiv = (
  <div> 
    <h1> Hello world </h1>
  </div>
);
```


### JSX outer elements

- JSX expression must have exactly one outermost element.
- The first opening tag and the final closing tag of a JSX expression must belong to the same JSX element!
- The solution is usually simple: wrap the JSX expression in a <div></div>.

```javascript
const paragraphs = (
  <div id="i-am-the-outermost-element">
    <p>I am a paragraph.</p>
    <p>I, too, am a paragraph.</p>
  </div>
);
```


### Rendering JSX
- To *render* a JSX expression means to make it appear on screen

- The following code will render a JSX expression:

```javascript
ReactDOM.render(<h1>Hello world</h1>, document.getElementById('app'));
```

- React is a JavaScript library for building User Interfaces and ReactDOM is the JavaScript library that allows React to interact with the DOM.


### ReactDOM.render() I
- *ReactDOM.render()* is the most common way to render JSX.
- It takes a JSX expression, turns it into html elements and adds it to the html document
- *First argument*: the JSX expression to be rendered

### ReactDOM.render() II

- The first argument is appended to whatever element is selected by the second argument.

this:
```javascript
ReactDOM.render(<h1>Render me!</h1>, document.getElementById('container'));
```
will be rendered like this:

```html
<main id="container">
  <h1>Render me!</h1>
</main>
```



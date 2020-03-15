# Advanced JSX

### class vs className
- Grammar in JSX is mostly the same as in HTML, but there are subtle differences to watch out for. Probably the most frequent of these involves the word _class_.

-In JSX, you can’t use the word _class_! You have to use _className_ instead:

In html:
```html
<h1 class="big">Hey</h1>
```

In javascript:
```javascript
<h1 classNamew="big">Hey</h1>
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





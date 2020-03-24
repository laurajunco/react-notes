# Components interacting

### A Component in a Render Function
- Render methods can also return another kind of JSX: component instances.

```javascript
class OMG extends React.Component {
  render() {
    return <h1>Whooaa!</h1>;
  }
}

class Crazy extends React.Component {
  render() {
    return <OMG />;
  }
}
```

In the above example, Crazy‘s render method returns an instance of the OMG component class. You could say that Crazy renders an <OMG />.

### Require A File

- When you use React.js, every JavaScript file in your application is invisible to every other JavaScript file by default.

```javascript
import { NavBar } from './NavBar.js';
```
- If you use an import statement, and the string at the end begins with either a dot or a slash, then import will treat that string as a filepath. import will follow that filepath, and import the file that it finds.

### export

- When you import a variable from a file that is not the current file, then an import statement isn’t quite enough. You also need an export statement, written in the other file, exporting the variable that you hope to grab.

 Named exports: 
 
 1. In one file, place the keyword export immediately before something that you want to export. That something can be any top-level var, let, const, function, or class

 ```javascript
 export class NavBar extends React.Component {}
 ```

 2. In a different file, import the name of the var, let, const, function, or class from the first file:

 ```javascript
 import { NavBar } from './NavBar.js'
 ```

 3. When you use named exports, you always need to wrap your imported names in curly braces



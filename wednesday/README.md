### Please reflect on the following questions

1.  What is the purpose of the key value, which must be given to individual rows in a react-list

Keys help React identify which items have changed (added/removed/re-ordered). To give a unique identity to every element inside the array, a key is required.

2. It's recommended to use a unique value from your data if available (like an ID). How do you get a unique value in a map callback, for data without a unique id?

You can use the index parameter of .map(item,index) to assign a key value
Whenever you're lopping over data, here this.state.lists.map, you can pass second parameter function(list, index) to the callback as well and that will be its index value and it will be unique for all the items in the array.

Other example could be using uuid ->

```javascript
import React from "react";
import uuid from "react-uuid";

const array = ["one", "two", "three"];

export const LineItem = (item) => <li key={uuid()}>{item}</li>;

export const List = () => array.map((item) => <LineItem item={item} />);
```

3.  What is the difference(s) between state and props?
    In a React component, props are variables passed to it by its parent component.

State on the other hand is still variables, but directly initialized and managed by the component.
https://flaviocopes.com/react-state-vs-props/

4.  For which scenarios would you use props, and for which would you use state?

Props for when im displaying/reading values. And state for when i have to change a value in components

5. Where is the only place you can set state directly as in: `this.state = {name: "Peter"};`

We use this when we are working with class components and would set state in the class constructor

6. How should you set state all other places?
   In function components i would use the method setState(), where we also have getters and setters -> [count, setCount]

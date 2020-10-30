### Lifting state

1. What is meant by the react term “Lifting State Up”?

Lifting state up and down enables you to scale your state management with plain React. When more components are interested in particular state, you can lift the state up until you reach a common parent component for the components that need access to the state.

2. Where do you lift it up to?

You lift a state up to the parrent component

3. Which way does React recommend data to flow: From sibling to sibling, from bottom to top or from top to bottom?

states does not go sideways so we lift a state from bottom to top and then from top to bottom.

4. Lifting state up, involves a great deal of boilerplate code, what’s the benefit we get from doing “things” like this?

Boilerplate is a section of code that doesn't change and can be re-used anywhere. Instead of re-writing the same code for every new project, developers use boilerplate to avoid risk of error and save time.

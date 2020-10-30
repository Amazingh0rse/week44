### Answer the following questions before you continue

In a Controlled Component React state is made the "Single source of truth", so how:

1. Do we ensure that input controls like text, textarea or select always present the value found in the components state?

The controlled input is when the React component that renders a form also controls what happens in that form on subsequent user input. This means that, as form value changes, the component that renders the form saves the value in its state.

2. Do we ensure that a controls’ state, always matches the value found in an input control?

Of course, another component can handle the form state. The goal is that each time the input changes, the method changeHandler is called and will store the input state. Hence the component always has the current value of the input without needing to ask for it. This means that the form component can respond to input changes immediately

3. What is the purpose of doing event.preventDefault() in an event handler?

So we don't reload the page and reestablish connection to the server. By using preventDefault, we ensure that our application is a single page application.

The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur. For example, this can be useful when: Clicking on a "Submit" button, prevent it from submitting a form.

4. What would be the effect of NOT doing event.preventDefault in a submit handler

The effect would be, that we would reload the page and have to reestablish our connection to the server (slower performance)

5. Why don't we want to submit the traditional way, in a single page application?

We want to deter from submitting the traditional way, because that would destroy the whole purpose of having a single page application

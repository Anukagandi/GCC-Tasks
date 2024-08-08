1. What is the difference between var, let, and const in JavaScript?

 *let is a block-scoped.let variables can be updated but not re-declared.        
 *const is a  block-scoped.const variables cannot be updated or re-declared.
 *var declaration are either globally scoped or function-scoped.var variables may both be updated and re-declared inside their scope.


 2. How do you create a new React component?

 *step-1:first we import the React.
 *step-2:Then we define a functional or class components.present functional components are mainly used.
 *step-3:Then export the component and import it in the main file.


 3. What is the purpose of the render() method in a React component? 

 *The "render()" method in a React components serves the crucial role to defining the UI should look like a component.
 *within the render() method we have to access the components `props` and `state`, It dynamically generates the UI based components data.
 *React automatically calls the render() method.


 4. How do you handle state changes in a React component?

*State changes in a React components depends on class components and functional components.
*class components in initialization and accessing the state in `this.state` and update the state in `this.setState()` .
*functional components is initialization,updating and accessing the state in `use.state`.


5. What is the difference between a controlled and uncontrolled component in React?

*In a controlled component react, state handle all the form data.
*uncontrolled component, the HTML form element data is managed by only the DOM.
*in controlled component we can control our form input values.


6. How do you pass props to a React component?

*Props is a short form of properties, there are used to pass data from a parent component to child component.
*first we defined a child component that will be received the props from its parent.
*In the parent components, pass props to the child component and access props in the child component.
*include the attributes in the JSX tag of the child component.


7. What is the purpose of the key prop in a React component?

*The key prop is a unique identifier that uses to efficiently manage and update elements within a list. 
*When rendering a list of elements , it is crucial to assign a unique key to each elements to help React differential between the items and perform updates more efficiently.


8. How do you handle events in a React component?

*To handle events in react, developers can define event handler in their components using a special syntax,such as onclick for mouse click events or onChange for input change events.
*The events handler can be defined as class methods or as arrow functions within the components.


9. What is the difference between a functional component and a class component in React?

*functional components are simpler and defined as plain javascript functions.
*functional components use the `useState` hook to manage state in functional components. 
*class components are defined using ES6 classes and extend from `react component`.
*class components manage states using `this.state` and `this.setState`.


10. How do you use React Hooks?

*React Hooks are functions that let you use state and other React features without writing a class.
*Don't call Hooks inside loops, conditions, or nested functions.
*Always use Hooks at the top level of your React functioN.


11. What is the purpose of the useEffect() hook in React?

*The useEffect hook in React is used to handle side effects in functional components. Side effects are operations that interact with the outside world or perform actions that affect the component's state or lifecycle outside of the render process. Examples of side effects include:

>>Fetching data from an API
>>Directly manipulating the DOM
>>Setting up subscriptions or timers


12. How do you fetch data from an API in a React component?

*To fetch data from an API in a React component, you typically use the useEffect hook along with the fetch API or a library like Axios. 

>>Use the stale-while-revalidate (SWR) method. This method is used to fetch data from a server and is used in React. ...
>>Use the JavaScript Fetch() method. ...
>>Use the React Query library. ...
>>Use the Axios Library. ...
>>Use the useFetch custom hook from react-fetch-hook.


13. What is the purpose of the useContext() hook in React?

*The useContext hook is a part of React's hooks API introduced in React 16.8.
* It allows components to consume state or context without the need for prop drilling, which can lead to cleaner and more maintainable code.


14. How do you use React Router for client-side routing?

>>Step 1: Setup a React. js project using Vite.
>>Step 2: Create the pages (Home, Quotes, FAQs) 
>>Step 3; Import the 3 pages into the App.jsx Component. 
>>Step 4: Install React Router.
>>Step 4: Using BrowserRouter in our App.
>>Step 5: Using the Link Component.


15. What is the difference between useState() and useReducer() in React?

*`useState` is ideal for everyday simplicity, resembling a sticky note.
*`useReducer` shines in intricate scenarios, handling simultaneous complex tasks. 
*The choice between them depends on the nature of your website's needs and the level of complexity involved.


16. How do you optimize the performance of a React application?

*using stateless components and React.
*using production mode flag in webpack.
*implementing dependency optimization.
*avoiding lnline  function definition in the render function.


17. What is the purpose of the shouldComponentUpdate() method in a React component?

*`shouldComponentUpdate()`to let React know if a component's output is not affected by the current change in state or props.
*The default behavior is to re-render on every state change, and in the vast majority of cases you should rely on the default behavior.


18. How do you use React DevTools for debugging?

*React Developer Tools can be used to inspect apps built with React Native as well.
*Next open the developer tools from the terminal. It should connect to any local React Native app that's running. 


19. What is the difference between a Higher-Order Component (HOC) and a Render Props pattern in React?

*`HOC:` Good for enhancing components with additional props or behaviors, but can lead to deeply nested components and prop conflicts.
*`Render Props:` Offers more flexibility and avoids some of the issues with HOCs, but can make the component structure more complex.


20. How do you use React with TypeScript?

*Using React with TypeScript involves setting up your project to support TypeScript and writing your components with TypeScript syntax.
*setting up your project and writing components with TypeScript requires defining interfaces and types for props, state, and events, ensuring your code is more predictable and easier to debug.
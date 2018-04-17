# React Context API

### What is it?

The *NEW* React Context API provides the ability to pass props to child components without needing to pass them down manually. 

### Why use it?

_Simple answer: To share data with one or many child components without passing props/prop drilling._

You _could_ use it just to avoid prop drilling through multiple intermediate components to pass data from a parent level component to a child nested a few levels deep...however it is better served when needing to pass "global" data to multiple components at various levels within the component tree. 

Use cases could include:
* current authenticated user
* theme
* language

![react component tree](https://78.media.tumblr.com/bcfb43ecedb69f2ee8c0cae2b758ab35/tumblr_inline_ofcxnvTThG1rgj0aw_500.png)

### Three Main Pieces:
1. React.createContext
2. Provider
3. Consumer

#### React.createContext

React method that takes a defaultValue argument and returns an object with the Provider and Consumer pair.

```jsx
const defaultValue = {}

const UserContext = React.createContext(defaultValue)

export default UserContext
```

#### Provider

A component that takes a `value` prop and passes it to one (or many) descendant `Consumer` component(s).

_Note:_ Providers can be nested to override values deeper within the tree.

```jsx
import UserContext from '../filepath/UserContext'


<UserContext.Provider value={this.state.user}>
  // descendant components rendered here
</UserContext.Provider>
```

#### Consumer 

A component that subscribes to context changes of its closest matching parent `Provider` component.

The `Consumer` component **requires** a function as a child, which returns a React node. The only argument of the function represents the value of the `value` prop of the closest `Provider` component (or the default value of the `createContext` if one is not defined).

```jsx
import UserContext from '../filepath/UserConext'

<UserContext.Consumer>
  { value => {
      return (
        <h1>{`Welcome, ${value.username}!`}</h1>
      )
  }}
</UserContext.Consumer>
```

### Context vs. Redux
* Context does not have dev tools currently
* Redux USES context behind the scenes
* The new context does not include anything like reducers, actions, or middleware
* If all you are using redux for is glorified prop-drilling, then you can likely replace with the context api


Notes:
* Don’t use context just to avoid passing props a few levels down. Stick to cases where the same data needs to be accessed in many components at multiple levels.
* All consumers are re-rendered whenever the Provider value changes
* Uses `Object.is()` to compare whether changes have occured in parent value
* When React renders a context Consumer, it will read the current context value from the closest matching Provider above it in the tree.
* The defaultValue argument is used when you render a Consumer without a matching Provider above it in the tree. This can be helpful for testing components in isolation without wrapping them.

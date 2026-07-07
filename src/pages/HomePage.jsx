import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import myLogo from "../assets/hero.png"

const HomePage = () => {
    const [num, setNum] = useState(0)

    const decrement = () => {
        setNum(num - 1)
    }

    const increment = () => {
        setNum(num + 1)
    }

    // const [variableName, functionToUpdateVariable] = useState(initialValue)
    // let semo = "two wraps"
    // function handleClick() {
    //     if (semo === "two wraps") {
    //     console.log("bring it with vegetable soup and two drumstick")
    //     }
    // }

    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `You clicked ${count} times`;
    }, [count]); // Only re-run the effect if count changes
    return (
        <>
            <Navbar />
            <h1>Hello Everyone I am here to work with React Hooks</h1>
            <div>
                <button onClick={decrement}>Decrease -</button>
                <h1>{num}</h1>
                <button onClick={increment}>Increase +</button>
            </div>
            <div>
                <p>You clicked {count} times</p>
                <button onClick={() => setCount(count + 1)}>
                    Click me
                </button>
            </div>



            {/* REACT HOOKS
            Hooks are functions that let you "hook into" React state and lifecycle features from function components. They were introduced in React 16.8 to allow developers to use state and other React features without writing a class component.
            There are several built-in hooks provided by React, and you can also create your own custom hooks. Here are some of the most commonly used built-in hooks:

            1. useState: Allows you to add state to functional components.
            2. useEffect: Lets you perform side effects in function components (e.g., data fetching, subscriptions).
            3. useContext: Provides access to the context for a component.
            4. useReducer: An alternative to useState for managing more complex state logic.
            5. useRef: Returns a mutable ref object that persists for the lifetime of the component.
            6. useMemo: Memoizes a computed value to optimize performance.
            7. useCallback: Memoizes a callback function to prevent unnecessary re-creations.
            8. useOptimistic: Used for concurrent rendering to optimize performance.
            9. useLayoutEffect: Similar to useEffect, but it fires synchronously after all DOM mutations.
            10. useDebugValue: Used to display a label for custom hooks in React DevTools.

            Example of using useState and useEffect:
            import React, { useState, useEffect } from 'react';

            function Example() {
                const [count, setCount] = useState(0);

                useEffect(() => {
                    document.title = `You clicked ${count} times`;
                }, [count]); // Only re-run the effect if count changes

                return (
                    <div>
                        <p>You clicked {count} times</p>
                        <button onClick={() => setCount(count + 1)}>
                            Click me
                        </button>
                    </div>
                );
            }

            In this example, useState is used to create a state variable count, and useEffect is used to update the document title whenever count changes.  
            
            */}
        </>
    )
}

export default HomePage
/*
1. How would you describe the concept of "state"?
    A way for React to remember saved values from within a component. This is similar to declaring variables from within a component, with a few added bonuses

2. When would you want to use props instead of state?
    Anytime you want to pass data into a component so that component can determine what will get displayed on the screen

3. When would you want to use state instead of props?
    Anytime you want a component to maintain some values from within the component. (And "remember" those values even when React re-renders the component)

4. What does "immutable" mean? Are props immutable? Is state immutable? 
    Unchanging
    Props - immutable
    State - mutable
 */

/*
----- COUNTER -----

import React from "react"

export default function App() {
    const [count, setCount] = React.useState(0)
     
    -- Note --
        If you ever need the old value of state to help you determine the new value of state, you should pass a callback function to your state setter function instead of using state directly. This callback function will receive the old value of state as its parameter, which you can then use to determine your new value of state.
    ---------

     function add() {
        --- BEST PRACTICE ---
        setCount(prevCount => prevCount + 1)
        -- OR -- 
        setCount (function(prevCount){
            return prevCount + 1
        })
    }
    
    function subtract() {
        setCount(count - 1)
    }
    
    return (
        <div className="counter">
            <button className="counter--minus" onClick={subtract}>–</button>
            <div className="counter--count">
                <h1>{count}</h1>
            </div>
            <button className="counter--plus" onClick={add}>+</button>
        </div>
    )
} 
 */

/*
1. You have 2 options for what you can pass into a state setter function (e.g. 'setCount'). What are they?
    a. new value fo state (setCount(42))
    b. callback function - whatever the callback function returns == new value of state

2. When would you want to pass the first option (from answer above) to the state setter function?
    Whenever you don't need the previous value of state to determine what the new value of state should be

3. When would you want to pass the second option (from answer above) to the state setter function?
    Whenever you DO need to previous value to determine the new value
 */
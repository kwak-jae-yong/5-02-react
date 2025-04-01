import React, { useReducer } from 'react'
const reducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return { count: state.count + 1 }
        case "decrement":
            return { count: state.count - 1 }
        case "reset":
            return { count: 0 }
        default:
            throw new Error('Unhandled action type')

    }
}
const Counter = () => {

    const initailState = { count: 0 }

    const [state, dispatch] = useReducer(reducer, initailState)
    return (
        <div><p>Count:{state.count}</p>
            <button onClick={() => dispatch({ type: "increment" })}>
                +
            </button>
            <button onClick={() => dispatch({ type: "decrement" })}>
                -
            </button>
            <button onClick={() => dispatch({ type: "reset" })}>
                reset
            </button>
        </div>
    )
}

export default Counter
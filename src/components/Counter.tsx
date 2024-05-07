import { useReducer } from "react"

const initialState = { count: 0 }

type CounterState = {
    count: number
}

type actionState = {
    payload: number
    type: string
}
function reducer(state: CounterState, action: actionState){
    switch(action.type){
        case 'increment':
            return { count: state.count + action.payload }
        case 'decrement':
            return { count: state.count - action.payload }
        default:
            return state
    }
}
export const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return(
        <div>
            <h2>Counter - {state.count}</h2>
            <button onClick={() => dispatch({ type: 'increment', payload: 10 })}>Increment 10</button>
            <button onClick={() => dispatch({type: 'decrement', payload: 10})}>Decrement 10</button>
        </div>
    )
}
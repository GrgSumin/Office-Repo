import React, { useReducer } from 'react'

type CountState = {
    count : number
}
type updateState = {
    type : "increment" | "decrement";
    payload:number
}
type resetState = {
    type :"reset"
}

type ActionState = updateState | resetState


let initialState = {count :0}

const reducer = (state : CountState, action:ActionState)=>{
    switch(action.type){
        case "increment":
            return {count: state.count + action.payload};
        case "decrement":
            return {count: state.count - action.payload};
        case "reset":
            return initialState;
    }
}


function CountReducer() {
    const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      <h1>Count :{state.count} </h1>
      <br />
      <button onClick={()=>dispatch({type:"increment", payload:5})}>Increment 5</button>
      <button onClick={()=>dispatch({type:"decrement", payload:5})}>decrement 5</button>
      <button onClick={()=>dispatch({type:"reset"})}>Reset</button>
    </div>
  )
}

export default CountReducer

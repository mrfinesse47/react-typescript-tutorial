import React, { useReducer } from "react";

const initialState = { counter: 100 };

type ACTIONTYPES =
  | { type: "increment"; payload: number }
  | { type: "derement"; payload: number };

function counterReducer(state: typeof initialState, action: ACTIONTYPES) {
  switch (action.type) {
    case "increment":
      return { ...state, counter: state.counter + action.payload };
    case "derement":
      return { ...state, counter: state.counter - action.payload };
    default:
      throw new Error("Bad Action!");
  }
}

export default function UseReducer() {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  //its nice to just pass dispatch to other components
  return (
    <div>
      <div>{state.counter}</div>
      <button onClick={() => dispatch({ type: "derement", payload: 1 })}>
        Decrement
      </button>
      |
      <button onClick={() => dispatch({ type: "increment", payload: 1 })}>
        Increment
      </button>
    </div>
  );
}

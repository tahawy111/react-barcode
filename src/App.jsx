import { useReducer } from "react";
// import Test from "./components/Scanner";
// import Class from "./components/Scanner class";

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + action.incVal, hello: true };
    case DECREMENT:
      return { count: state.count - action.DecVal, hello: false };
    case RESET:
      return { count: 0, hello: false };

    default:
      return 0;
  }
};
const App = () => {
  const [state, dispatch] = useReducer(reducer, {
    hello: true,
    count: 0,
  });
  return (
    <div>
      <div className="App">
        {state.count}
        <br />
        <button
          onClick={() => dispatch({ type: INCREMENT, incVal: 2, hello: true })}
        >
          زود
        </button>
        <button
          onClick={() => dispatch({ type: DECREMENT, DecVal: 2, hello: false })}
        >
          نقص
        </button>
        <button onClick={() => dispatch({ type: RESET, hello: false })}>
          صفر
        </button>

        {state.hello ? "amer" : "khaled"}
      </div>
    </div>
  );
};

export default App;

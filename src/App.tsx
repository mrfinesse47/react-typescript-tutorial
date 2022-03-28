import UseStateComponent from "./UseStateComponent";
import UseEffectComponent from "./UseEffectComponent";
import UseContextComponent from "./UseContextComponent";
import UseRefComponent from "./UseRefComponent";

import UseReducer from "./UseReducer";

//hooks

const App = () => {
  return (
    <div>
      hello world<h1>Use State</h1>
      <UseStateComponent />
      <UseEffectComponent />
      <UseContextComponent />
      <UseReducer />
      <UseRefComponent />
    </div>
  );
};

export default App;

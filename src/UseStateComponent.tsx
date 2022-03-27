import { useState } from "react";

const UseStateComponent = () => {
  const [arr, setArr] = useState<number[]>([]); //a type of array numbers
  const [name, setName] = useState<null | string>(null); //good is you are receiving something from a server
  return (
    <div>
      <div>
        <button onClick={() => setArr([...arr, arr.length + 1])}>
          Add to Array
        </button>
        <p>{JSON.stringify(arr)}</p>
      </div>
      <div>
        <button onClick={() => setName("Jack")}>Set Name</button>
        <h3>{name}</h3>
      </div>
    </div>
  );
};

export default UseStateComponent;

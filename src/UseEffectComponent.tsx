import { useState, useEffect } from "react";

export default function UseEffectComponent() {
  const [val, valSet] = useState(1);

  useEffect(() => {
    const timeout = window.setInterval(() => {
      valSet((prev: number) => prev + 1);
    }, 1000);
    return () => window.clearInterval(timeout); //cannot return  window.clearInterval(timeout) on its own because it will call asap
  }, []);
  return (
    <div>
      <h2>UseEffectComponent</h2>
      <div>{val}</div>
    </div>
  );
}

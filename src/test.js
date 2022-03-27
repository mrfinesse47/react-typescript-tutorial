import { useState, useEffect } from "react";

export default function UseEffectComponent() {
  const [val, valSet] = useState(1);
  const timer = () => {
    valSet((prev) => prev + 1);
  };
  useEffect(() => {
    window.setInterval(timer, 1000);
    return window.clearInterval(timer);
  }, []);
  return (
    <div>
      <h2>UseEffectComponent</h2>
      <div>{val}</div>
    </div>
  );
}

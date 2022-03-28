import React, { useRef } from "react";

export default function UseRefComponent() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  return <input type="text" ref={inputRef} />;
}

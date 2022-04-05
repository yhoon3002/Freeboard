import { useEffect, useRef } from "react";

export default function UseRefPage() {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  });

  return (
    <div>
      <input type="password" ref={inputRef}></input>
    </div>
  );
}

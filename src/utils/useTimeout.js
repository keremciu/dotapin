import { useEffect, useRef } from "react";

export default function useTimeout(fn, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = fn;
  });

  useEffect(() => {
    function cb() {
      savedCallback.current();
    }
    if (delay !== null) {
      const id = setTimeout(cb, delay);
      return () => clearTimeout(id);
    }
  }, [delay]);
}

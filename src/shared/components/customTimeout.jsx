import { useRef } from "react";

export function useDebouncedTimeout(callback, delay) {
  const timerIdRef = useRef();

  function fetchDataAsync() {
    clearTimeout(timerIdRef.current);
    timerIdRef.current = setTimeout(() => {
      callback();
    }, delay);
  }

  return fetchDataAsync;
}

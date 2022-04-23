import { useRef, useState } from "react";
import "./styles.css";

export default function App() {
  const [watch, setWatch] = useState(0);

  const timer = useRef(null);

  const start = () => {
    timer.current = setInterval(() => {
      setWatch((prev) => (prev += 1));
    }, 1000);
  };

  const stop = () => clearInterval(timer.current);

  const reset = () => {
    clearInterval(timer.current);
    setWatch(0);
  };

  return (
    <div className="App">
      <h1>{convertSeconds(watch)}</h1>
      <h1>HH:MM:SS</h1>
      <button onClick={start} className="mr-10">
        start
      </button>
      <button onClick={stop} className="mr-10">
        stop
      </button>
      <button onClick={reset}>reset</button>
      <h2>Stopwatch</h2>
    </div>
  );
}

const convertSeconds = (totalSeconds) => {
  const hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = (totalSeconds %= 60);

  return (
    String(hours).padStart(2, "0") +
    ":" +
    String(minutes).padStart(2, "0") +
    ":" +
    String(seconds).padStart(2, "0")
  );
};

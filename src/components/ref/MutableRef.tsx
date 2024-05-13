import { useEffect, useRef, useState } from "react";

export const MutableRef = () => {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef<number | undefined>(undefined);

  const stopTimer = () => {
    window.clearInterval(intervalRef.current);
  };

  const resetTimer = () => {
    setTimer(0);
  };

  const resumeTimer = () => {
    intervalRef.current = window.setInterval(() => {
        setTimer((timer) => timer + 1);
      }, 1000);
  };

  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
    return () => {
      stopTimer();
    };
  }, []);

  return (
    <>
      <h2>HookTimer - {timer}</h2>
      <button onClick={() => resetTimer()}>Reset Timer</button>
      <button onClick={() => stopTimer()}>Stop Timer</button>
      <button onClick={() => resumeTimer()}>Resume Timer</button>
    </>
  );
};

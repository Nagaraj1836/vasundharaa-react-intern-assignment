import { useEffect, useRef, useState } from "react";

export default function CountdownTimer() {
  const [inputSeconds, setInputSeconds] = useState(10);
  const [timeLeft, setTimeLeft] = useState(10000); // milliseconds
  const [status, setStatus] = useState("Idle"); 
  // Idle | Running | Paused | Completed

  const intervalRef = useRef(null);

  // 🔹 Restore timer state on refresh
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("timer_state"));

    if (saved && saved.status === "Running") {
      const passed = Date.now() - saved.lastUpdated;
      const remaining = Math.max(0, saved.remaining - passed);

      setTimeLeft(remaining);
      setStatus(remaining === 0 ? "Completed" : "Running");
    }
  }, []);

  // 🔹 Persist timer state
  useEffect(() => {
    localStorage.setItem(
      "timer_state",
      JSON.stringify({
        remaining: timeLeft,
        status,
        lastUpdated: Date.now(),
      })
    );
  }, [timeLeft, status]);

  // 🔹 Countdown logic
  useEffect(() => {
    if (status !== "Running") return;

    intervalRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 10) {
          clearInterval(intervalRef.current);
          setStatus("Completed");
          return 0;
        }
        return prev - 10;
      });
    }, 10);

    return () => clearInterval(intervalRef.current);
  }, [status]);

  // 🔹 Handlers
  const startTimer = () => {
    setTimeLeft(inputSeconds * 1000);
    setStatus("Running");
  };

  const pauseTimer = () => {
    clearInterval(intervalRef.current);
    setStatus("Paused");
  };

  const resumeTimer = () => {
    setStatus("Running");
  };

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    setTimeLeft(inputSeconds * 1000);
    setStatus("Idle");
  };

  // 🔹 Format display
  const formatTime = (ms) => {
    const sec = Math.floor(ms / 1000);
    const milli = ms % 1000;
    return `${sec}s ${milli}ms`;
  };

  return (
    <div className="bg-white p-4 rounded shadow flex flex-col gap-3">
      <h2 className="text-lg font-bold">Advanced Countdown Timer</h2>

      {/* Input */}
      <input
        type="number"
        min="1"
        disabled={status === "Running"}
        value={inputSeconds}
        onChange={(e) =>
          setInputSeconds(Math.max(1, Number(e.target.value)))
        }
        className="border p-2"
      />

      {/* Time */}
      <div className="font-mono text-lg">
        {formatTime(timeLeft)}
      </div>

      <p>
        Status: <b>{status}</b>
      </p>

      {/* Controls */}
      <div className="flex gap-2 flex-wrap">
        {/* ✅ Start button hidden permanently after completion */}
        {status !== "Completed" && (
          <button
            onClick={startTimer}
            disabled={status === "Running"}
            className="bg-green-600 text-white px-3 py-1 rounded disabled:opacity-50"
          >
            Start
          </button>
        )}

        <button
          onClick={pauseTimer}
          disabled={status !== "Running"}
          className="bg-yellow-500 text-white px-3 py-1 rounded disabled:opacity-50"
        >
          Pause
        </button>

        <button
          onClick={resumeTimer}
          disabled={status !== "Paused"}
          className="bg-blue-600 text-white px-3 py-1 rounded disabled:opacity-50"
        >
          Resume
        </button>

        <button
          onClick={resetTimer}
          className="bg-red-600 text-white px-3 py-1 rounded"
        >
          Reset
        </button>
      </div>

      {/* Completion Message */}
      {status === "Completed" && (
        <p className="text-red-600 font-bold">
          Time’s up!
        </p>
      )}
    </div>
  );
}

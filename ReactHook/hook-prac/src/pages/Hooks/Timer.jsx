import React, { useRef, useState } from "react";

const Timer = () => {
  const ref = useRef(null);
  const [Timer, setTimer] = useState(0);
    // const [Val, setVal] = useState('')
    // const ref = useRef('');
//   let Val = "";
  // console.log(ref);
  const startFunc = () => {
    if (ref.current !== null) return;

    ref.current = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 0);
  };
  const stopFunc = () => {
    clearInterval(ref.current);
    ref.current = null;
  };

  const Test = (e) => {
    // setVal(e.target.value)
    // Val = e.target.value;
      // console.log(Val);
      ref.current = e.target.value
      console.log(ref.current)
  };
//   console.log(Val);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-blue-100 to-cyan-100">
          <input type="text" placeholder="Enter" onChange={Test} ref={ ref} />
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-sm text-center">
        {/* Heading */}
        <h2 className="text-2xl font-bold text-indigo-600 mb-6">Timer</h2>

        {/* Timer Value */}
        <div className="text-5xl font-extrabold text-gray-800 mb-8">
          {Timer}
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          {/* Start Button */}
          <button
            className="w-1/2 py-3 rounded-xl font-semibold text-white
                       bg-gradient-to-r from-green-400 to-emerald-500
                       hover:from-green-500 hover:to-emerald-600
                       transition-all duration-200 shadow-lg hover:shadow-xl cursor-pointer"
            onClick={startFunc}
          >
            Start
          </button>

          {/* Stop Button */}
          <button
            className="w-1/2 py-3 rounded-xl font-semibold text-white
                       bg-gradient-to-r from-red-400 to-rose-500
                       hover:from-red-500 hover:to-rose-600
                       transition-all duration-200 shadow-lg hover:shadow-xl cursor-pointer"
            onClick={stopFunc}
          >
            Stop
          </button>
        </div>
      </div>
    </div>
  );
};

export default Timer;

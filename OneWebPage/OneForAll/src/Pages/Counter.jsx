import React, { useState } from "react";
import { RotateCw } from "lucide-react";

const Counter = () => {
  const [Counter, setCounter] = useState(0);
  const [Bool, setBool] = useState(true);
  const [animate, setAnimate] = useState(true);

  function InceraCount() {
    const value = Counter + 1;
    setCounter(value);
    setBool(false);
    setAnimate(true);
    const t = setTimeout(() => setAnimate(false), 200);
    return () => clearTimeout(t);
  }
  function DecrCount() {
    let value = Counter - 1;
    if (value <= 0) {
      setCounter((value = 0));
      setBool(true);
    } else {
      setCounter(value);
      setBool(false);
      setAnimate(true);
      const t = setTimeout(() => setAnimate(false), 200);
      return () => clearTimeout(t);
    }
  }

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gray-50 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 p-12 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 flex items-center gap-12 max-w-2xl w-full justify-between relative overflow-hidden">

        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-indigo-600"></div>

        <button
          className={`group flex items-center justify-center w-20 h-20 rounded-2xl bg-gray-100 hover:bg-red-50 text-gray-600 hover:text-red-500 shadow-sm hover:shadow-md active:scale-95 transition-all duration-300 font-bold text-lg border border-gray-200 dark:border-gray-700 ${Bool ? "opacity-50 cursor-not-allowed" : "opacity-100"
            }`}
          onClick={DecrCount}
          disabled={Bool}
        >
          <span className="text-3xl">-</span>
        </button>

        <div
          className={`flex flex-col items-center justify-center transition-all duration-300 ease-out z-10 ${animate ? "scale-110" : "scale-100"
            }`}
        >
          <RotateCw
            className="w-6 h-6 text-gray-400 hover:text-indigo-600 cursor-pointer mb-4 transition-colors absolute top-6 right-6"
            onClick={() => setCounter(0)}
          />
          <span className="text-8xl font-black text-gray-900 dark:text-white tabular-nums tracking-tighter">
            {Counter}
          </span>
          <span className="text-sm uppercase tracking-widest text-gray-400 mt-2 font-medium">Count</span>
        </div>

        <button
          className="group flex items-center justify-center w-20 h-20 rounded-2xl bg-gray-100 hover:bg-green-50 text-gray-600 hover:text-green-500 shadow-sm hover:shadow-md active:scale-95 transition-all duration-300 font-bold text-lg border border-gray-200 dark:border-gray-700"
          onClick={InceraCount}
        >
          <span className="text-3xl">+</span>
        </button>
      </div>
    </div>
  );
};

export default Counter;

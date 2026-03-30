import React, { useState } from "react";

const ToDo = () => {
  const [List, setList] = useState("");
  const [Data, setData] = useState([]);
  //   const [hide, sethide] = useState(0);
  //   console.log(List);
  //   console.log(Data);
  console.log(Data)
  return (
    <div className="w-full h-full p-8 max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">Todo List</h1>
        <p className="text-gray-500 mt-2 text-lg">
          Stay focused and organized.
        </p>
      </div>

      <div className="max-w-xl mx-auto mb-10">
        <div className="flex gap-3 relative">
          <input
            type="text"
            placeholder="Add a new task..."
            value={List}
            className="w-full bg-white dark:bg-gray-800 border-2 border-transparent focus:border-indigo-500 rounded-xl px-6 py-4 outline-none text-gray-700 dark:text-gray-200 shadow-sm transition-all placeholder-gray-400 text-lg"
            onChange={(e) => {
              setList(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                setData((pv) => [...pv, { task: List, isHidden: false }]);
                setList("");
              }
            }}
          />
          <button
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 rounded-xl font-bold transition-all shadow-lg shadow-indigo-200 dark:shadow-none active:scale-95"
            onClick={() => {
              setData((pv) => [...pv, { task: List, isHidden: false }]);
              setList("");
            }}
          >
            Add
          </button>
        </div>
      </div>

      <div className="space-y-3 max-w-2xl mx-auto">
        {Data.map((e, key) => {
          return !e.isHidden && (

            <div
              key={key}
              className="group flex items-center justify-between bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-center gap-4">
                <input type="checkbox" className="w-6 h-6 rounded-md border-gray-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer" />
                <p className="text-lg text-gray-700 dark:text-gray-200 font-medium">{e.task}</p>
              </div>

              <button
                className="text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all p-2 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20"
                onClick={() => {
                  setData((prev) => prev.map((item, idx) =>
                    idx === key ? { ...item, isHidden: true } : item
                  ))
                }}
              >
                Delete
              </button>
            </div>
          );
        })}

      </div>
    </div>
  );
};

export default ToDo;

import React from "react";
import { useNavigate } from "react-router-dom";

const Tabs = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-[#2a1233]">
      <div className="w-full bg-[#3a1a44] shadow-md px-4 py-3">
        <div className="flex items-center gap-4 text-sm">
          <button
            onClick={() => navigate("/ExpensesForm")}
            className="px-5 py-2 rounded-md bg-orange-500 text-white font-semibold 
                       hover:bg-orange-400 transition w-[25%] cursor-pointer"
          >
            Add Expense
          </button>
          <button
            className="px-5 py-2 rounded-md bg-orange-500 text-white font-semibold 
                       hover:bg-orange-400 transition w-[25%] cursor-pointer" onClick={() => {
                         navigate('/TableUI')
                       }}
          >Table UI</button>
          <button
            className="px-5 py-2 rounded-md bg-orange-500 text-white font-semibold 
                       hover:bg-orange-400 transition w-[25%] cursor-pointer" onClick={() => {
                         navigate('/Addform')
                       }}
          >Table UI</button>
        </div>
      </div>
    </div>
  );
};

export default Tabs;

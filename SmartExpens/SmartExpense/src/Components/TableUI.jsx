import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import AddPopForm from "./AddPopForm";
import useFormContext from "../States/useFormContext";

const TableUI = () => {
  const { items } = useFormContext();

  const [ShowPop, setShowPop] = useState(false);
  const OpenPop = () => {
    setShowPop((prev) => !prev);
  };

  console.log(items);
  return (
    <div className="w-full bg-[#2a1233] p-6">
      {ShowPop ? <AddPopForm Closepop={OpenPop} /> : null}
      {/* Table Card */}
      <div className="bg-[#3a1a44] rounded-lg shadow-md overflow-hidden">
        {/* Header + Action */}
        <div className="px-5 py-4 border-b border-[#53305e] flex items-center justify-between">
          <div>
            <h2 className="text-sm font-semibold text-white">
              Bakery Items Overview
            </h2>
            <p className="text-xs text-gray-300">
              Daily bakery stock & sales details
            </p>
          </div>

          <button
            className="px-4 py-2 bg-orange-500 text-sm font-semibold text-white rounded-md hover:bg-orange-400 transition cursor-pointer active:scale-95"
            onClick={OpenPop}
          >
            Add Bakery Item
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-300">
            {/* Table Head */}
            <thead className="bg-[#4b2354] text-xs uppercase text-gray-300">
              <tr>
                <th className="px-5 py-3">Item Name</th>
                <th className="px-5 py-3">Category</th>
                <th className="px-5 py-3">Batch No</th>
                <th className="px-5 py-3">Price</th>
                <th className="px-5 py-3">Stock</th>
                <th className="px-5 py-3">Expiry Date</th>
                <th className="px-5 py-3 text-center">Status</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {items.map((i, key) => (
                <tr
                  key={key}
                  className="border-b border-[#53305e] hover:bg-[#4b2354] transition"
                >
                  <td className="px-5 py-3 font-medium text-white">{i.Name}</td>

                  <td className="px-5 py-3 text-gray-300">{i.Category}</td>

                  <td className="px-5 py-3 text-gray-300">{i.BatchNum}</td>

                  <td className="px-5 py-3 text-gray-300">₹{i.Price}</td>

                  <td className="px-5 py-3 text-gray-300">{i.Stock}</td>

                  <td className="px-5 py-3 text-gray-300">{i.Date}</td>

                  <td className="px-5 py-3 text-center">
                    <span
                      className={`px-3 py-1 text-xs font-semibold rounded-full
            ${
              i.Status === "Low Stock"
                ? "bg-red-500/20 text-red-400"
                : "bg-green-500/20 text-green-400"
            }`}
                    >
                      {i.Status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="px-5 py-3 border-t border-[#53305e] text-xs text-gray-400">
          Showing today’s bakery inventory
        </div>
      </div>
    </div>
  );
};

export default TableUI;

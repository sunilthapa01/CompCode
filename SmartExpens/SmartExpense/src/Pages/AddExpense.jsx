import React, { useEffect, useRef, useState } from "react";
// import { toast } from "react-toastify";
import { POST_EXP, GET_EXP } from "../service/ExpeneseService";

const AddExpense = () => {
  const [Expenses, setExpenses] = useState({
    ExpenseName: "",
    Amount: 0,
    PaidBy: "",
    CategoryBy: "",
    Split: [],
  });
  const UploadRef = useRef();
  const [Files, setFiles] = useState([]);

  const Focus = (e) => {
    const file = Array.from(e.target.files);
    setFiles(file);
  };

  console.log(Files);
  const SplitData = ["Sunil", "Ved", "Sudhir", "Harshit", "Vishal"];
  const [visible, setvisible] = useState([]);
  const [TotalAmount, setTotalAmount] = useState([]);

  const ExpensChange = (e) => {
    const { name, value, type } = e.target;
    setExpenses((prev) => ({
      ...prev,
      [name]: type === "number" ? Number(value) : value,
    }));
  };

  const handleChecked = (e) => {
    const { value, checked } = e.target;
    setExpenses((prev) => ({
      ...prev,
      Split: checked
        ? [...prev.Split, value]
        : prev.Split.filter((p) => p !== value),
    }));
  };
  const Exp_func = async () => {
    const res = await GET_EXP();
    setvisible(res.data);
    let Total = 0;
    for (let i = 0; i < res.data.length; i++) {
      Total += res.data[i].Amount;
    }
    setTotalAmount(Total);
  };
  const AddExpenseDetail = async () => {
    const POST_EX = await POST_EXP({
      ...Expenses,
      id: Date.now(),
      //   Date Now is preBuilt Function That Provide the Current time
    });
    await Exp_func();
  };

  useEffect(() => {
    const ff = async function xyz() {
      await Exp_func();
    };
    ff();
  }, []);
  const Balance = {};
  visible.forEach((expense) => {
    const splitAmount = expense.Split.length
      ? expense.Amount / expense.Split.length
      : 0;
    expense.Split.forEach((person) => {
      if (!Balance[person]) {
        Balance[person] = 0;
      }
      Balance[person] += splitAmount;
    });
  });

  return (
    <div className="min-h-screen bg-[#2a1233] text-white p-6">
      <div className="mb-6">
        <h1 className="text-xl font-semibold">Expense Overview</h1>
        <p className="text-sm text-gray-300">
          Manage shared flat expenses easily
        </p>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 space-y-6">
          <div className="bg-[#3a1a44] rounded-lg p-5">
            <h2 className="text-sm font-medium mb-4">Add New Expense</h2>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <label className="text-xs text-gray-300">Expense Name</label>
                <input
                  type="text"
                  name="ExpenseName"
                  value={Expenses.ExpenseName}
                  placeholder="Enter expense name"
                  className="w-full mt-1 px-3 py-2 rounded bg-[#53305e] outline-none placeholder-gray-300"
                  onChange={ExpensChange}
                />
              </div>

              <div>
                <label className="text-xs text-gray-300">Amount (₹)</label>
                <input
                  type="Number"
                  name="Amount"
                  value={Expenses.Amount}
                  placeholder="0.00"
                  className="w-full mt-1 px-3 py-2 rounded bg-[#53305e] outline-none placeholder-gray-300"
                  onChange={ExpensChange}
                />
              </div>

              <div>
                <label className="text-xs text-gray-300">Paid by</label>
                <select
                  className="w-full mt-1 px-3 py-2 rounded bg-[#53305e] outline-none"
                  name="PaidBy"
                  value={Expenses.PaidBy}
                  onChange={ExpensChange}
                >
                  <option value="">Paid by</option>
                  {SplitData.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-xs text-gray-300">Category</label>
                <select
                  className="w-full mt-1 px-3 py-2 rounded bg-[#53305e] outline-none"
                  name="CategoryBy"
                  value={Expenses.CategoryBy}
                  onChange={ExpensChange}
                >
                  <option>Food</option>
                  <option>Smoking</option>
                  <option>Electriciy</option>
                </select>
              </div>

              <div className="col-span-2">
                <label className="text-xs text-gray-300 block mb-2">
                  Split Between
                </label>
                <div className="flex gap-6">
                  {SplitData.map((p) => (
                    <label key={p} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        value={p}
                        checked={Expenses.Split.includes(p)}
                        onChange={handleChecked}
                        className="accent-orange-500"
                      />
                      {p}
                    </label>
                  ))}
                </div>
              </div>
              {/* Upload Bill */}
              <div className="mt-4">
                <label className="block text-sm text-gray-300 mb-2">
                  Upload Bill / Receipt
                </label>

                <div className="relative border-2 border-dashed border-purple-500 rounded-lg p-4 flex items-center justify-center cursor-pointer hover:bg-purple-900 transition">
                  <input
                    type="file"
                    ref={UploadRef}
                    onChange={Focus}
                    accept="image/*"
                    multiple
                    className="absolute inset-0 opacity-0 cursor-pointer"
                  />

                  <div className="flex flex-col items-center text-center">
                    <span className="text-purple-300 text-sm">
                      Click to upload or drag & drop
                    </span>
                    <span className="text-xs text-gray-400">
                      PNG, JPG up to 5MB
                    </span>
                  </div>
                </div>
              </div>

              <button
                className="col-span-2 mt-2 bg-orange-500 py-2 rounded font-medium active:scale-95 transition-all ease-in cursor-pointer"
                onClick={AddExpenseDetail}
              >
                Add Expense
              </button>
            </div>
          </div>
          <div className="bg-[#3a1a44] rounded-lg p-5">
            <h2 className="text-sm font-medium mb-4">Pending Balances</h2>
            {Object.entries(Balance).map(([name, Amount]) => (
              <div className="grid grid-cols-1 bg-[#53305e] p-3 mb-2 rounded">
                <div className="grid grid-cols-[1fr_auto] bg-[#53305e] p-3 mb-2 rounded">
                  <div className="flex justify-between gap-2 text-sm">
                    <span>{name}</span>
                    <span className="text-orange-400">{Amount.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-[#3a1a44] rounded-lg p-5">
              <p className="text-sm text-gray-300">Monthly Total</p>
              <h3 className="text-lg font-semibold mt-1">Rs {TotalAmount}</h3>
              <p className="text-xs text-gray-400">This month</p>
            </div>

            <div className="bg-[#3a1a44] rounded-lg p-5">
              <p className="text-sm text-gray-300">Top Contributor</p>
              <h3 className="text-lg font-semibold mt-1">Sagar</h3>
              <p className="text-xs text-gray-400">₹5,200 paid</p>
            </div>
          </div>
          {/* Upcoming Bills */}
          <div className="bg-[#3a1a44] rounded-lg p-8 flex flex-col items-center justify-center text-center">
            <p className="text-sm font-medium">Upcoming Bills</p>
            <p className="text-xs text-gray-400 mt-2">
              🎉 No upcoming bills <br /> You're all caught up!
            </p>
          </div>
        </div>
        <div className="space-y-6">
          <div className="bg-[#3a1a44] rounded-lg p-5 text-center">
            <p className="text-sm text-gray-300">Your Balance</p>
            <h2 className="text-2xl font-semibold text-green-400 mt-1">₹800</h2>
            <p className="text-xs text-gray-400 mt-1">You're receiving</p>

            <button className="mt-4 w-full bg-[#53305e] py-2 rounded text-sm">
              Settle Up
            </button>
          </div>
          {/* Recent Activity */}
          <div className="bg-[#3a1a44] rounded-lg p-5">
            <h2 className="text-sm font-medium mb-4">Recent Activity</h2>

            <div className="space-y-3 text-sm">
              {visible.map((e, ix) => (
                <div className="flex justify-between" key={ix}>
                  <span>{e.ExpenseName}</span>
                  <span>{e.Amount}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddExpense;

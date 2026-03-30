import React, { useState } from "react";
import Input from "../../component/inputs/Input";

const Page1 = () => {
    const [value, setvalue] = useState({});
  const field = {
    id: 1770101107994,
    label: "",
    name: "List",
    type: "text",
    placeholder: "Enter Something",
    isRequired: false,
    defaultValue: "",
    minLength: 2,
    maxLength: 50,
  };
  console.log(value);

  const AddList = () => {
    // console.log(field)
    console.log("From Parent",value);
  };

  return (
    <div className="h-screen w-full bg-gray-400 text-black p-4 flex flex-col gap-3">
      <Input field={field} value={value} onChange={setvalue} />
      <button
        className="w-full rounded-lg bg-gradient-to-r from-red-600 to-red-800 py-3 text-white font-semibold hover:opacity-90 cursor-pointer active:scale-95 transition-all"
        onClick={AddList}
      >
        Add item
      </button>
    </div>
  );
};

export default Page1;

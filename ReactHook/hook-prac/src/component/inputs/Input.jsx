import React, { useState } from "react";
//  {
//       "id": "f846",
//       "label": "Email",
//       "name": "Email ID",
//       "type": "email",
//       "placeholder": "Enter Email Here",
//       "isRequired": true,
//       "defaultValue": "",
//       "minLength": "",
//       "maxLength": ""
//     }
const Input = ({ field}) => {
  const {
    label,
    name,
    type,
    placeholder,
    isRequired,
    option = [],
    // defaultValue,
    minLength,
    maxLength,
  } = field;

  const [formData, setformData] = useState({});
// console.log(formData)

  // === this function value stored in string ===
  const isHandleChange = (e) => {
    const { name, value, type } = e.target;
    // console.log(name, value);
    if (type === "radio") {
      setformData((prev) => ({ ...prev, [name]: value }));
      // console.log('radi')
    } else {
      setformData((prev) => ({ ...prev, [name]: value }));
    }
  };

  switch (type) {
    case "text":
    case "email":
    case "password":
    case "number":
      return (
        <>
          <span>{label}</span>
          <input
            type={type}
            name={name}
            placeholder={placeholder}
            value={formData.value}
            onChange={isHandleChange}
            required={isRequired}
            minLength={minLength}
            maxLength={maxLength}
            className="
          w-full
          rounded-lg
          bg-zinc-800
          px-4
          py-2.5
          text-white
          placeholder-zinc-500
          border
          border-zinc-700
          outline-none
          focus:border-red-500
          focus:ring-1
          focus:ring-red-500
        "
          />
        </>
      );
    case "radio":
    case "checkbox":
      return option.map((i, id) => {
        return (
          <div>
            <input
              type={type}
              name={name}
              key={id}
              value={i}
              onChange={isHandleChange}
            />
            <span>{i}</span>
          </div>
        );
      });
    default:
      return <></>;
  }
};  

export default Input;

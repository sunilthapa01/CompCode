import React, { useState } from "react";
import { formPost } from "../../services/formApi";
import { useDispatch, useSelector } from "react-redux";
// import { addForm } from "../../redux/slices/formSlice";
import { useNavigate } from "react-router-dom";
import { postFormThunk } from "../../redux/slices/formThunk";
import { Router } from "react-router-dom";
const CreateForm = () => {
  const dispatch = useDispatch();
  const forms = useSelector((state) => state.form.form);
  const navigate = useNavigate();
  const [vis, setvis] = useState();
  const [formData, setformData] = useState({
    label: "",
    name: "",
    type: "",
    placeholder: "",
    isRequired: false,
    defaultValue: "",
    minLength: "",
    maxLength: "",
    option: [],
  });

  const isHandleChange = (e) => {
    const { name, value, checked, type } = e.target;
    console.log(e.target);
    if (type === "checkbox") {
      setformData((prev) => ({ ...prev, [name]: checked }));
    } else if (type === "number") {
      setformData((prev) => ({
        ...prev,
        [name]: value === "" ? "" : Number(value),
      }));
    } else if (name === "type") {
      setformData((prev) => ({ ...prev, [name]: value }));
      setvis(value === "radio");
    } else if (name === "option") {
      const options = value.split(",");
      setformData((prev) => ({ ...prev, [name]: options }));
      //   setvis(value === "radio");
    } else {
      //   console.log(value, type);
      setformData((prev) => ({ ...prev, [name]: value }));
    }

    //   console.log(value, 'jjjj')
    console.log("Option", formData);
  };
  // console.log(vis);
  // console.log(formData.type);

  // console.log(isHandleChange)

  const AddDetail = async () => {
    try {
      // 1️Call API with actual data
      const response = await formPost({ id: Date.now(), ...formData });
      console.log(response);

      //  Take server response
      const savedForm = response;

      // Dispatch to Redux
      dispatch(postFormThunk(savedForm));
      console.log(savedForm);
      // 4️⃣ Optional: reset local form
      setformData({
        label: "",
        name: "",
        type: "",
        placeholder: "",
        isRequired: false,
        defaultValue: "",
        minLength: 0,
        maxLength: 0,
        option: [],
      });
      navigate("/view");
    } catch (error) {
      console.error("Failed to create form field", error);
    }
    console.log("Redux Forms:", forms);
  };

  const naviFunc = (par) => {
    // navigate("/add");
    switch (par) {
      case "1":
        return () => navigate("/add");
      case "2":
        return () => navigate("/useref");
      case "3":
        return () => navigate("/timer");
      case "4":
        return () => navigate('/concepts')
    
    }
  };

  //   console.log(formData);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-6">
      <div className="w-full max-w-2xl rounded-2xl bg-zinc-900/80 backdrop-blur border-2 border-red-500 shadow-2xl p-8">
        {/* Header */}
        <h2 className="text-2xl font-bold text-white mb-1">
          Create Form Field
        </h2>
        <p className="text-sm text-zinc-400 mb-6">
          Configure field metadata for dynamic forms
        </p>

        {/* Form */}
        <div className="grid grid-cols-2 gap-4">
          {/* Field Label */}
          <div>
            <label className="block text-sm text-zinc-300 mb-1">
              Field Label
            </label>
            <input
              type="text"
              name="label"
              value={formData.label}
              onChange={isHandleChange}
              placeholder='e.g. "Email Address"'
              className="w-full rounded-lg bg-zinc-800 border border-zinc-700 px-4 py-2 text-white placeholder-zinc-500 focus:outline-none focus:border-red-500"
            />
          </div>

          {/* Field Name */}
          <div>
            <label className="block text-sm text-zinc-300 mb-1">
              Field Name (JSON Key)
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={isHandleChange}
              placeholder='e.g. "email"'
              className="w-full rounded-lg bg-zinc-800 border border-zinc-700 px-4 py-2 text-white placeholder-zinc-500 focus:outline-none focus:border-red-500"
            />
          </div>

          {/* Input Type */}
          <div>
            <label className="block text-sm text-zinc-300 mb-1">
              Input Type
            </label>
            <select
              className="w-full rounded-lg bg-zinc-800 border border-zinc-700 px-4 py-2 text-white focus:outline-none focus:border-red-500"
              name="type"
              value={formData.type}
              onChange={isHandleChange}
            >
              <option value="text">Text</option>
              <option value="email">Email</option>
              <option value="number">Number</option>
              <option value="password">Password</option>
              <option value="checkbox">Checkbox</option>
              <option value="radio">Radio</option>
            </select>
          </div>

          {/* Placeholder Text */}
          <div>
            <label className="block text-sm text-zinc-300 mb-1">
              Placeholder Text
            </label>
            <input
              type="text"
              name="placeholder"
              value={formData.placeholder}
              onChange={isHandleChange}
              placeholder='e.g. "Enter your email"'
              className="w-full rounded-lg bg-zinc-800 border border-zinc-700 px-4 py-2 text-white placeholder-zinc-500 focus:outline-none focus:border-red-500"
            />
          </div>

          <label className="flex items-center gap-3 cursor-pointer select-none">
            <input
              type="checkbox"
              name="isRequired"
              checked={formData.isRequired}
              onChange={isHandleChange}
              className="sr-only"
            />

            <div
              className={`relative w-11 h-6 bg-zinc-700 rounded-full transition-colors ${formData.isRequired ? "bg-red-600" : "bg-zinc-700"}`}
            >
              <div
                className={`absolute top-0.5 w-5 h-5 bg-white rounded-full transition-all ${formData.isRequired ? "left-5" : "left-0.5"}`}
              />{" "}
            </div>

            {/* Label Text */}
            <span className="text-sm text-zinc-300">Required</span>
          </label>
          {vis && (
            <div>
              <label className="block text-sm text-zinc-300 mb-1">
                Add Value
              </label>
              <input
                type="text"
                name="option"
                value={formData.option}
                onChange={isHandleChange}
                placeholder="e.g. A, B , C, D"
                className="w-full rounded-lg bg-zinc-800 border border-zinc-700 px-4 py-2 text-white placeholder-zinc-500 focus:outline-none focus:border-red-500"
              />
            </div>
          )}

          {/* Default Value */}
          <div>
            <label className="block text-sm text-zinc-300 mb-1">
              Default Value
            </label>
            <input
              type="text"
              name="defaultValue"
              value={formData.defaultValue}
              onChange={isHandleChange}
              placeholder='e.g. ""'
              className="w-full rounded-lg bg-zinc-800 border border-zinc-700 px-4 py-2 text-white placeholder-zinc-500 focus:outline-none focus:border-red-500"
            />
          </div>

          {/* Min Length */}
          <div>
            <label className="block text-sm text-zinc-300 mb-1">
              Minimum Length
            </label>
            <input
              type="number"
              name="minLength"
              value={formData.minLength}
              onChange={isHandleChange}
              placeholder="5"
              className="w-full rounded-lg bg-zinc-800 border border-zinc-700 px-4 py-2 text-white placeholder-zinc-500 focus:outline-none focus:border-red-500"
            />
          </div>

          {/* Max Length */}
          <div>
            <label className="block text-sm text-zinc-300 mb-1">
              Maximum Length
            </label>
            <input
              type="number"
              name="maxLength"
              value={formData.maxLength}
              onChange={isHandleChange}
              placeholder="50"
              className="w-full rounded-lg bg-zinc-800 border border-zinc-700 px-4 py-2 text-white placeholder-zinc-500 focus:outline-none focus:border-red-500"
            />
          </div>

          {/* Button */}
          <div className="col-span-2 mt-4">
            <button
              type="button"
              className="w-full rounded-lg bg-gradient-to-r from-red-600 to-red-800 py-3 text-white font-semibold hover:opacity-90 cursor-pointer active:scale-95 transition-all"
              onClick={AddDetail}
            >
              Add Field
            </button>
          </div>
          <div className="col-span-2 mt-4 flex gap-2">
            <button
              className="w-full rounded-lg bg-gradient-to-r from-red-600 to-red-800 py-3 text-white font-semibold hover:opacity-90 cursor-pointer active:scale-95 transition-all"
              onClick={naviFunc("1")}
            >
              Page1
            </button>
            <button
              className="w-full rounded-lg bg-gradient-to-r from-red-600 to-red-800 py-3 text-white font-semibold hover:opacity-90 cursor-pointer active:scale-95 transition-all"
              onClick={naviFunc("2")}
            >
              Focus Input (UserRef)
            </button>
            <button
              className="w-full rounded-lg bg-gradient-to-r from-red-600 to-red-800 py-3 text-white font-semibold hover:opacity-90 cursor-pointer active:scale-95 transition-all"
              onClick={naviFunc("3")}
            >
              Timer Page
            </button>
            <button
              className="w-full rounded-lg bg-gradient-to-r from-red-600 to-red-800 py-3 text-white font-semibold hover:opacity-90 cursor-pointer active:scale-95 transition-all"
              onClick={naviFunc("4")}
            >
              Conecpts
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateForm;

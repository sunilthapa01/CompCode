import React, { useState } from "react";

const Step1 = () => {
// First Name
// Last Name
// Date of Birth
// Gender
// Mobile Number
// Email Address
// PAN Number
// Aadhaar Number
// Marital Status

    const [formData, setformData] = useState({
        firstName: "",
        lastName: "",
        DOB: "",
        Gender: "",
        mobileNumber: "",
        email: "",
        PAN: "",
        AddNum: "",
        MS:""
    })
    const isHandleChange = (e) => {
        const { name, value } = e.target;
        setformData((prev)=> ({...prev,[name]:value}))
    }
    console.log(formData)

  return (
    <div className="min-h-screen relative overflow-hidden bg-black flex items-center justify-center px-4">


      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      {/* Form Card */}
      <div className="relative z-10 w-full max-w-3xl bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-8">

        <h2 className="text-3xl font-bold text-white text-center mb-8">
          Loan Registration - Step 1
        </h2>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* First Name */}
          <div>
            <label className="block text-sm text-gray-300 mb-1">
              First Name
            </label>
            <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={isHandleChange}
              placeholder="Enter first name"
              className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-sm text-gray-300 mb-1">
              Last Name
            </label>
            <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={isHandleChange}
              placeholder="Enter last name"
              className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          {/* Date of Birth */}
          <div>
            <label className="block text-sm text-gray-300 mb-1">
              Date of Birth
            </label>
            <input
                          type="date"
                          name="DOB"
                          value={formData.DOB}
                          onChange={isHandleChange}
              className="w-full px-4 py-2 rounded-lg bg-white/20 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          {/* Gender */}
          <div>
            <label className="block text-sm text-gray-300 mb-1">
              Gender
            </label>
            <select
                          className="w-full px-4 py-2 rounded-lg bg-white/20 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                          name="Gender"
                          value={formData.Gender}
                          onChange={isHandleChange}
            >
              <option className="text-black">Male</option>
              <option className="text-black">Female</option>
              <option className="text-black">Other</option>
            </select>
          </div>

          {/* Mobile Number */}
          <div>
            <label className="block text-sm text-gray-300 mb-1">
              Mobile Number
            </label>
            <input
              type="text"
                          placeholder="Enter mobile number"
                          name="mobileNumber"
                          value={formData.mobileNumber}
                          onChange={isHandleChange}
              className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          {/* Email Address */}
          <div>
            <label className="block text-sm text-gray-300 mb-1">
              Email Address
            </label>
            <input
              type="email"
                          placeholder="Enter email"
                          name="email"
                          value={formData.email}
                          onChange={isHandleChange}
              className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          {/* PAN Number */}
          <div>
            <label className="block text-sm text-gray-300 mb-1">
              PAN Number
            </label>
            <input
              type="text"
                          placeholder="Enter PAN number"
                          name="PAN"
                          value={formData.PAN}
                          onChange={isHandleChange}

              className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          {/* Aadhaar Number */}
          <div>
            <label className="block text-sm text-gray-300 mb-1">
              Aadhaar Number
            </label>
            <input
                          type="text"
                          name="AddNum"
                          value={formData.AddNum}
                          onChange={isHandleChange}
                          placeholder="Enter Aadhaar number"
              className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          {/* Marital Status */}
          <div className="md:col-span-2">
            <label className="block text-sm text-gray-300 mb-1">
              Marital Status
            </label>
            <select
                          className="w-full px-4 py-2 rounded-lg bg-white/20 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                          name="MS"
                          value={formData.MS}
                          onChange={isHandleChange}
            >
              <option className="text-black">Single</option>
              <option className="text-black">Married</option>
              <option className="text-black">Divorced</option>
            </select>
          </div>

        </form>

      </div>
    </div>
  );
};

export default Step1;

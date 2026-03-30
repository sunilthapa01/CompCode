import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { createUser } from "../../services/createUser";
import { setUser } from "../../slice/userSlice";

const SignUp = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);
  console.log(user,"Rexu")
  const dispatch = useDispatch();
  const [formData, setformData] = useState({
    id: Date.now(),
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData((prev) => ({ ...prev, [name]: value }));
  };
  console.log(formData);

  const HandleLogin = async () => {
    // handleChange();
    const post = await createUser(formData);
    const userData = [
      {
        id: 1,
        name: formData.name,
        email: formData.email,
        password: formData.password,
      },
    ];
    dispatch(setUser(userData));
    // localStorage.setItem('userDat',JSON.stringify(formData))
    navigate("/login");
  };
  return (
    <div
      className="min-h-screen flex items-center justify-center 
      bg-gradient-to-br from-[#0b0f2a] via-[#2a1458] to-[#4b116f] 
      relative overflow-hidden"
    >
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"></div>

      {/* Glass Card */}

      <div
        className="w-full max-w-md rounded-2xl p-8
        bg-white/10 backdrop-blur-xl
        border border-white/20
        shadow-[0_8px_40px_rgba(0,0,0,0.35)]
        text-white"
      >
        {/* Title */}
        <h1 className="text-3xl font-bold text-center">Create Account</h1>
        <p className="text-sm text-white/60 text-center mt-2">
          Join the future of coding
        </p>

        {/* Form */}
        <div className="mt-8 space-y-5">
          <div>
            <label className="text-sm text-white/70">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full mt-2 px-4 py-3 rounded-lg
              bg-white/10 border border-white/20
              placeholder:text-white/40
              focus:outline-none focus:border-pink-400
              transition"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="text-sm text-white/70">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full mt-2 px-4 py-3 rounded-lg
              bg-white/10 border border-white/20
              placeholder:text-white/40
              focus:outline-none focus:border-pink-400
              transition"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="text-sm text-white/70">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full mt-2 px-4 py-3 rounded-lg
              bg-white/10 border border-white/20
              placeholder:text-white/40
              focus:outline-none focus:border-pink-400
              transition"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Button */}
        <button
          className="w-full mt-8 py-3 rounded-lg
          bg-gradient-to-r from-pink-500 to-orange-400
          hover:scale-[1.02] transition-transform
          font-semibold tracking-wide cursor-pointer"
          onClick={HandleLogin}
        >
          Sign Up
        </button>

        {/* Footer */}
        <p className="text-xs text-white/50 text-center mt-6">
          Already have an account?{" "}
          <span className="text-pink-400 cursor-pointer" onClick={HandleLogin}>
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../slice/userSlice";
import { getUser } from "../../services/getUser";

const Login = () => {
  const navigate = useNavigate();
  const StoredUser = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const [loginData, setloginData] = useState({
    email: "",
    password: "",
  });
  const Handchange = (e) => {
    const { name, value } = e.target;
    setloginData((prev) => ({ ...prev, [name]: value }));
  };
  const GetFunc = async () => {
    try {
      const res = await getUser(); 
      const users = res.data;

      const findUser = users.find(
        (u) => u.email === loginData.email && u.password === loginData.password,
      );
      localStorage.setItem('Login',JSON.stringify(findUser))
      if (!findUser) {
        console.log("Invalid credentials");
        return;
      }

      dispatch(
        setUser({
          id: findUser.id,
          name: findUser.name,
          email: findUser.email,
        }),
      );
      navigate("/dashboard")
      console.log("Login success");
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const LoginFunc = () => {
    GetFunc();
  };
  console.log(loginData);
  // console.log(users, "IT IS ");
  return (
    <div
      className="min-h-screen flex items-center justify-center 
        bg-gradient-to-br from-[#0b0f2a] via-[#2a1458] to-[#4b116f]
        relative overflow-hidden"
    >
      {/* Ambient blobs */}
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
        <h1 className="text-3xl font-bold text-center">Welcome Back</h1>
        <p className="text-sm text-white/60 text-center mt-2">
          Login to continue
        </p>

        {/* Form */}
        <div className="mt-8 space-y-5">
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
              value={loginData.email}
              onChange={Handchange}
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
              value={loginData.password}
              onChange={Handchange}
            />
          </div>
        </div>

        {/* Button */}
        <button
          className="w-full mt-8 py-3 rounded-lg
            bg-gradient-to-r from-pink-500 to-orange-400
            hover:scale-[1.02] transition-transform
            font-semibold tracking-wide cursor-pointer"
          onClick={LoginFunc}
        >
          Login
        </button>

        {/* Footer */}
        <p className="text-xs text-white/50 text-center mt-6">
          Don’t have an account?{" "}
          <span
            className="text-pink-400 cursor-pointer"
            onClick={() => {
              navigate("/signup");
            }}
          >
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;

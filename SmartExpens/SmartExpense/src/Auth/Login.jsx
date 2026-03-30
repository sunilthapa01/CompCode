import React, { useState } from "react";
import { POST_USER } from "../service/CreateAccountService";
import { GET_USER } from "../service/GetLoginSerive";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [showSignup, setShowSignup] = useState(false);
  const [FormSubmit, setFormSubmit] = useState({
    name: "",
    password: "",
    email: "",
  });
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  console.log(POST_USER);
  const PostReq = async () => {
    const p = await POST_USER(FormSubmit);
      const Local = localStorage.setItem("User",JSON.stringify(p.data))
    if (p.status === 201) {
      toast.success('Succesfully Sent')
    }
    else {
      toast.error('Empty Field !')
    }
  };

  
  const SignUpFunc = async () => {
    const res = await GET_USER();
    const user = res.data;
    const matches = user.find(
      (u) => u.email === loginData.email && u.password === loginData.password
    );
    if (!loginData.email && !loginData.password) {
      toast.warn("Fields are Empty");
    } else if (matches) {
      toast.success("Successfully login")
      const SignUpLocal = localStorage.setItem('SignUp',JSON.stringify(matches))
      navigate('/')
    } else {
      toast.error("Invalid Credentials!");
    }
  };

  const InputChange = (e) => {
    const { name, value } = e.target;
    setFormSubmit((prev) => ({ ...prev, [name]: value }));
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };
  console.log(FormSubmit);

  return (
    <div className="min-h-screen w-full grid grid-cols-1 md:grid-cols-2 overflow-hidden">
      <div className="relative flex items-center justify-center bg-white px-8">
        <div
          className={`absolute w-full max-w-md transition-all duration-700 ease-in-out
          ${
            showSignup
              ? "opacity-0 -translate-x-10 pointer-events-none"
              : "opacity-100 translate-x-0"
          }`}
        >
          <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
          <p className="text-gray-500 mb-8">Login to continue</p>

          <div className="space-y-5">
            <input
              type="email"
              name="email"
              value={loginData.email}
              placeholder="Email"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
              onChange={InputChange}
            />
            <input
              type="password"
              name="password"
              value={loginData.password}
              placeholder="Password"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
              onChange={InputChange}
            />

            <button
              className="w-full py-3 bg-indigo-600 text-white rounded-lg font-semibold cursor-pointer active:scale-95 transition-all ease-in"
              onClick={SignUpFunc}
            >
              Login
            </button>

            <p className="text-sm text-center text-gray-500">
              Don’t have an account?{" "}
              <button
                onClick={() => setShowSignup(true)}
                className="text-indigo-600 font-semibold hover:underline cursor-pointer"
              >
                Create account
              </button>
            </p>
          </div>
        </div>

        <div
          className={`absolute w-full max-w-md transition-all duration-700 ease-in-out
          ${
            showSignup
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-10 pointer-events-none"
          }`}
        >
          <h1 className="text-3xl font-bold mb-2">Create Account</h1>
          <p className="text-gray-500 mb-8">Start your journey</p>

          <div className="space-y-5">
            <input
              name="name"
              value={FormSubmit.name}
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
              onChange={InputChange}
            />
            <input
              name="email"
              value={FormSubmit.email}
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
              onChange={InputChange}
            />
            <input
              name="password"
              value={FormSubmit.password}
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
              onChange={InputChange}
            />

            <button
              className="w-full py-3 bg-indigo-600 text-white rounded-lg font-semibold cursor-pointer active:scale-95 transition-all ease-in"
              onClick={PostReq}
            >
              Sign Up
            </button>

            <p className="text-sm text-center text-gray-500">
              Already have an account?{" "}
              <button
                onClick={() => setShowSignup(false)}
                className="text-indigo-600 font-semibold hover:underline cursor-pointer"
              >
                Login
              </button>
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="hidden md:block relative">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4')",
          }}
        ></div>
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
    </div>
  );
};

export default Login;

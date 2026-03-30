import React from "react";

const Header = () => {
  const userInfo = localStorage.getItem("SignUp");
  const Info = JSON.parse(userInfo);

  return (
    <header
      className="w-full bg-gradient-to-r from-[#1e293b] to-[#334155] 
                       shadow-md px-6 py-4 flex items-center justify-between"
    >
      <h1 className="flex items-center gap-2 text-white italic text-[22px] font-semibold">
        <img
          src="https://i.pinimg.com/736x/b6/ba/3f/b6ba3f275445b92259cfae916d34ed8e.jpg"
          alt="Logo"
          className="w-10 h-10 rounded-xl shadow-md hover:scale-95 transition cursor-default"
        />
        ExpenseTracker
      </h1>

      <div className="flex items-center gap-3">
        <div className="leading-tight text-right">
          <p className="text-sm font-semibold text-white">{Info.name}</p>
          <p className="text-xs text-slate-300">{Info.email}</p>
        </div>

        <div
          className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 
                        flex items-center justify-center text-white font-bold shadow"
        >
          {Info.name.charAt(0)}
        </div>
      </div>
    </header>
  );
};

export default Header;

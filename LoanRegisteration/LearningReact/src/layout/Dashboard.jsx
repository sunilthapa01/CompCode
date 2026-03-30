import React from "react";
import Step1 from "../pages/Step1";

const Dashboard = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-black flex flex-col items-center justify-start py-10">

      {/* Red Gradient Glow */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-red-600 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-red-500 rounded-full blur-3xl opacity-30"></div>

      {/* White Subtle Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      {/* Stepper */}
      <div className="relative z-10 w-full max-w-6xl px-4 mb-10">

        <div className="flex flex-wrap items-center justify-center gap-6 text-white text-sm md:text-base font-medium">

          <div className="flex items-center gap-2">
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-red-600 text-white font-bold">1</div>
            <span>Personal Details</span>
          </div>

          <div className="w-10 h-[2px] bg-white/30 hidden md:block"></div>

          <div className="flex items-center gap-2">
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/20 border border-white/30">2</div>
            <span className="text-gray-300">Address Details</span>
          </div>

          <div className="w-10 h-[2px] bg-white/30 hidden md:block"></div>

          <div className="flex items-center gap-2">
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/20 border border-white/30">3</div>
            <span className="text-gray-300">Employment Details</span>
          </div>

          <div className="w-10 h-[2px] bg-white/30 hidden md:block"></div>

          <div className="flex items-center gap-2">
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/20 border border-white/30">4</div>
            <span className="text-gray-300">Loan Details</span>
          </div>

          <div className="w-10 h-[2px] bg-white/30 hidden md:block"></div>

          <div className="flex items-center gap-2">
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/20 border border-white/30">5</div>
            <span className="text-gray-300">Bank Details</span>
          </div>

          <div className="w-10 h-[2px] bg-white/30 hidden md:block"></div>

          <div className="flex items-center gap-2">
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/20 border border-white/30">6</div>
            <span className="text-gray-300">Document Upload</span>
          </div>

          <div className="w-10 h-[2px] bg-white/30 hidden md:block"></div>

          <div className="flex items-center gap-2">
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/20 border border-white/30">7</div>
            <span className="text-gray-300">Declaration</span>
          </div>

        </div>
      </div>

      {/* Step Content */}
      <div className="relative z-10">
        <Step1 />
      </div>

    </div>
  );
};

export default Dashboard;

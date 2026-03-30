import React from "react";

const Output = () => {

  const show = JSON.parse(localStorage.getItem('Ticket'))
  console.log(show)
  return (
    <div className="relative min-h-screen w-full overflow-hidden text-white">
      {/* Background Image */}
      <img
        src="/src/assets/background-desktop.png"
        alt="background"
        className="absolute inset-0 w-full h-full object-cover -z-20"
      />

      {/* Vertical grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:80px_100%] -z-10" />

      {/* ===== Decorative shapes (SAME AS DASHBOARD) ===== */}

      {/* Bottom-left orange arc */}
      <img
        src="/src/assets/pattern-squiggly-line-bottom-desktop.svg"
        className="absolute -bottom-[20px] -left-[100px] w-[520px] opacity-90 pointer-events-none"
        alt=""
      />

      {/* Top-right squiggly */}
      <img
        src="/src/assets/pattern-squiggly-line-top.svg"
        className="absolute -top-0 -right-0 w-[420px] opacity-70 pointer-events-none"
        alt=""
      />
      <div className="absolute bottom-34 right-31 w-40 h-40 rounded-full border border-white/10" />
      <div className="absolute right-20 top-1/2 w-64 h-64 rounded-full border border-white/10" />

      {/* ===== Main Content ===== */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">
        {/* Logo */}
        <div className="flex items-center gap-2 mb-10">
          <img src="/src/assets/logo-mark.svg" className="w-8 h-8" />
          <span className="font-semibold text-lg">Coding Conf</span>
        </div>

        {/* Heading */}
        <h1 className="text-[38px] font-bold leading-tight mb-4">
          Congrats, <span className="text-orange-500">Jonatan Kristof</span>!
          <br />
          Your ticket is ready.
        </h1>

        <p className="text-white/70 max-w-md mb-12 text-sm">
          We’ve emailed your ticket to{" "}
          <span className="text-orange-500">{ show.email}</span> and will
          send updates in the run up to the event.
        </p>

        {/* ===== Ticket ===== */}
        <div className="relative">
          <img
            src="/src/assets/pattern-ticket.svg"
            alt="ticket"
            className="w-[420px]"
          />

          {/* Ticket overlay content */}
          <div className="absolute inset-0 p-6 flex flex-col justify-between text-left">
            {/* Ticket top */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <img src="/src/assets/logo-mark.svg" className="w-6 h-6" />
                <span className="font-semibold">Coding Conf</span>
              </div>
              <p className="text-xs text-white/60">Jan 31, 2025 / { show.username}</p>
            </div>

            {/* Ticket bottom */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-md bg-white/10 flex items-center justify-center text-xs text-white/60">
                <img src={show.image}/>
              </div>
              <div>
                <p className="font-medium">{show.name }</p>
                <p className="text-xs text-white/60">{ show.email}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Output;

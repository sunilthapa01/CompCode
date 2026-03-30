import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createTicket } from "../../services/createUser";

const Dashboard = () => {
  const navigate = useNavigate();
  const ref = useRef();
  const [TicketData, setTicketData] = useState({
    id: Date.now(),
    name: "",
    email: "",
    username: "",
    image: null,
    imagePreview: "",
  });

 const handleChange = (e) => {
  const { name, value, files } = e.target;

  if (name === "image") {
    const file = files[0];
    const previewURL = URL.createObjectURL(file);

    setTicketData((prev) => ({
      ...prev,
      image: previewURL,
    }));
  } else {
    setTicketData((prev) => ({ ...prev, [name]: value }));
  }
};


  console.log(TicketData, "CHECK");

  const GenerateTick = async () => {
    const send = await createTicket(TicketData);
    const res = send.data;
    localStorage.setItem("Ticket", JSON.stringify(res));
    navigate("/Preview");
  };
  console.log(TicketData);

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

      {/* Decorative shapes */}
      <img
        src="/src/assets/pattern-squiggly-line-bottom-desktop.svg"
        className="absolute bottom-[2px] left-[-1px] w-[520px] opacity-80"
        alt=""
      />

      <img
        src="/src/assets/pattern-squiggly-line-top.svg"
        className="absolute top-1 right-0 w-100 opacity-70"
        alt=""
      />

      <div className="absolute bottom-34 right-31 w-40 h-40 rounded-full border border-white/10" />
      <div className="absolute right-20 top-1/2 w-64 h-64 rounded-full border border-white/10" />

      {/* Main content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
        <div className="max-w-xl w-full text-center">
          {/* Logo */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <img src="/src/assets/logo-mark.svg" className="w-8 h-8" />
            <span className="font-semibold text-lg">Coding Conf</span>
          </div>

          {/* Heading */}
          <h1 className="text-[40px] leading-tight font-bold mb-4">
            Your Journey to Coding Conf <br /> 2025 Starts Here!
          </h1>

          <p className="text-white/70 mb-10">
            Secure your spot at next year’s biggest coding conference.
          </p>

          {/* Upload */}
          <div className="border border-dashed border-white/30 rounded-xl p-6 mb-6 bg-white/5 backdrop-blur-md">
            <label className="flex flex-col items-center gap-3 cursor-pointer">
              {/* Hidden file input */}
              <input
                type="file"
                className="hidden"
                name="image"
                onChange={handleChange}
                accept="image/png, image/jpeg"
              />

              {/* Upload icon */}
              <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center">
                <img
                  src="/src/assets/icon-upload.svg"
                  alt="upload"
                  className="w-5 h-5"
                />
              </div>

              <p className="text-sm text-white/70">
                Drag and drop or click to upload
              </p>

              <p className="text-xs text-white/40">
                Upload your photo (JPG or PNG, max size: 500KB)
              </p>
            </label>
          </div>

          {/* Inputs */}
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 text-sm outline-none focus:border-orange-400"
              name="name"
              value={TicketData.name}
              onChange={handleChange}
            />

            <input
              type="email"
              placeholder="example@email.com"
              className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 text-sm outline-none focus:border-orange-400"
              name="email"
              value={TicketData.email}
              onChange={handleChange}
            />

            <input
              type="text"
              placeholder="@yourusername"
              className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 text-sm outline-none focus:border-orange-400"
              name="username"
              value={TicketData.username}
              onChange={handleChange}
            />
          </div>

          {/* Button */}
          <button
            className="mt-6 w-full bg-orange-500 hover:bg-orange-600 transition rounded-lg py-3 font-semibold text-black cursor-pointer"
            onClick={GenerateTick}
          >
            Generate My Ticket
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

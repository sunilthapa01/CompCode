// import React, { useRef, useState } from "react";

// const Concepts = () => {
//   const ref = useRef(0); // re-render nahi karega
//   const [count, setCount] = useState(0); // re-render karega

//   console.log("Component Rendered");
//   const inputRef = useRef(null);
//   const [error, setError] = useState("");

//   const submit = () => {
//     const value = inputRef.current.value;

//     if (value.length < 3) {
//       setError("Too short");
//     } else {
//       setError("");
//       console.log("Submitted value:", value);
//     }
//   };

//   console.log(error);

//   return (
//     <div className="bg-[#0d1b2a] text-white h-screen p-4">
//       <div className="border-2 h-60 p-4 space-y-4">
//         <button
//           className="border px-4 py-2"
//           onClick={() => setCount(count + 1)}
//         >
//           Increment State
//         </button>

//         <button
//           className="border px-4 py-2"
//           onClick={() => {
//             ref.current = ref.current + 1;
//             console.log("Ref value:", ref.current);
//           }}
//         >
//           Increment Ref
//         </button>
//         <input
//           ref={inputRef}
//           className="border px-2 py-1 text-black"
//           placeholder="Enter name"
//         />

//         <button className="border px-4 py-2" onClick={submit}>
//           Submit
//         </button>

//         {error && <p className="text-red-400">{error}</p>}

//         <h1>State Count: {count}</h1>
//         <h1>Ref Count (UI won't update): {ref.current}</h1>
//       </div>
//     </div>
//   );
// };

// export default Concepts;

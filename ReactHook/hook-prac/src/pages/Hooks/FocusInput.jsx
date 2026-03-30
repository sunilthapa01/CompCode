// import React, { useEffect, useRef } from "react";

// const FocusInput = () => {
//   const ref = useRef(null);
//   const renderCount = useRef(0);
//   useEffect(() => {
//     renderCount.current += 1;
//   },[ref]);

//   const forUseRef = () => {
//     ref.current.focus();
//   };

//   const renderCountFunc = () => {
//     alert(`Re-Render `);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
//       <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
//         {/* Heading */}
//         <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
//           React Input Control
//         </h2>

//         {/* Input Field */}
//         <input
//           type="text"
//           placeholder="Type something..."
//           ref={ref}
//           className="w-full px-4 py-3 mb-6 text-gray-700 border border-blue-300 rounded-xl
//                      focus:outline-none focus:ring-4 focus:ring-blue-200 focus:border-blue-500"
//         />

//         {/* Buttons */}
//         <div className="flex gap-4">
//           {/* Focus Input Button */}
//           <button
//             className="w-1/2 py-3 rounded-xl font-semibold text-white
//                        bg-gradient-to-r from-blue-500 to-indigo-500
//                        hover:from-blue-600 hover:to-indigo-600
//                        transition-all duration-200 shadow-lg hover:shadow-xl cursor-pointer"
//             onClick={forUseRef}
//           >
//             Focus Input
//           </button>

//           {/* Render Count Button */}
//           <button
//             className="w-1/2 py-3 rounded-xl font-semibold text-white
//                        bg-gradient-to-r from-emerald-400 to-teal-500
//                        hover:from-emerald-500 hover:to-teal-600
//                        transition-all duration-200 shadow-lg hover:shadow-xl cursor-pointer"
//             onClick={renderCountFunc}
//           >
//             Show Render Count
//           </button>
//         </div>
//         <h1 className="mt-4 text-bold text-xl">
//           Render Count :- {console.log(renderCount.current)}
//         </h1>
//       </div>
//     </div>
//   );
// };

// export default FocusInput;

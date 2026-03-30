  // import React, { useEffect, useState } from "react";
  // import Input from "../../component/inputs/Input";
  // import { useSelector } from "react-redux";
  // import { useNavigate } from "react-router-dom";

  // const PreviewForm = () => {
  //     const field = useSelector((state) => state.form.field);
  //   const navigate = useNavigate();
  //   const [api, setapi] = useState('')

  //   useEffect(() => {
  //     //APi Call
  //     // const Res = async () => {
        
  //     // }
  //     setapi([])

  //   },[])
  //   console.log(field, 'PRE')
  //   // console.log(Array.isArray(field), field);


  //   return (
  //       <div className="h-screen w-full p-5 bg-gray-400">
  //           <button className="text-white px-4 py-2 border-2 border-red-100 cursor-pointer rounded active:scale-95 transition-all ease" onClick={() => {
  //               navigate(
  //                 '/'
  //               )
  //           }}>
  //               back
  //           </button>
  //       {api && api.map((i,id) => (
  //         <Input key={id} field={i} />  
  //       ))}
  //     </div>
  //   );
  // };

  // export default PreviewForm;

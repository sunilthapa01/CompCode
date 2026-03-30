import { createContext, useState } from "react";

export const FormContext = createContext(null);

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    Name: "",
    Category: "",
    Price: 0,
    Stock: 0,
    BatchNum: "",
    Date:"",
    Status: "",
  });
  const [items, setitems] = useState([]);
  const AddData = () => {
    setitems((prev) => {
      if (!formData || Object.keys(formData).length === 0) {
        return prev;
        console.log('HLLP')
      }
  
      const updated = [...prev, formData];
      console.log("Updated Items:", updated);
      return updated;
    });}
  return (
    <FormContext.Provider value={{ formData, setFormData,setitems,items,AddData }}>
      {children}
    </FormContext.Provider>
  );
};


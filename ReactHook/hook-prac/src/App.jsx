import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import CreateForm from "./pages/form/CreateForm";
// import PreviewForm from './pages/form/PreviewForm'
import Page1 from "./pages/ReduxPrac/Page1";
// import FocusInput from './pages/Hooks/FocusInput'
// import Timer from './pages/Hooks/Timer'
// import Concepts from './pages/Hooks/Concepts'
import axios from "axios";

const App = () => {
  const [drop, setdrop] = useState(""); 
  // it should be { }
  const [State, setState] = useState("");
  const [countr, setcountr] = useState([]);
  const [StateAr, setStateAr] = useState([]);

  useEffect(() => {
    const Response = async () => {
      const CountryURL = "https://countriesnow.space/api/v0.1/countries/iso";
      const res = await axios.get(CountryURL);
      setcountr(res.data.data);
      console.log(res);
      // console.log(StateURL,"hfeyeu");
    };

    Response();
  }, []);

  useEffect(() => {
    const Respon = async () => {
      const StateURL = `https://countriesnow.space/api/v0.1/countries/states/q?country=${drop.name}`;
      const stateRes = await axios.get(StateURL);
      console.log("State", stateRes.data.data.states);
      setStateAr(stateRes.data.data.states);
    };

    if (drop != "") {
      Respon();
    }
  }, [drop]);

  const isHandleChange = (e) => {
    const { name, value } = e.target;
    setdrop((prev) => ({ ...prev, [name]: value }));
    setState((prev) => ({ ...prev, [name]: value }));
  };
  console.log(drop);
  return (
    <div>
      {/* <Routes>
        <Route path='/' element={ <CreateForm /> } />
        <Route path='/view' element={<PreviewForm />} />
        <Route path='/add' element={<Page1 />} /> */}

      <select name="name" value={drop.value} onChange={isHandleChange}>
        {countr.map((e, id) => (
          <option key={id}>{e.name}</option>
        ))}
      </select>

      {drop.name && (
        <select name="name" value={State.value} onChange={isHandleChange}>
          {StateAr.map((e, id) => (
            <option key={id}>{e.name}</option>
          ))}
        </select>
      )}
    </div>
  );
};

export default App;

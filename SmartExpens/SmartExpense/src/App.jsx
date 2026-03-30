import React from "react";
import Login from "./Auth/Login";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Layout from "./Layout";
import Dashboard from "./Pages/Dashboard";
import ProtectedRoute from "./Auth/ProtectedRoute";
import AddExpense from "./Pages/AddExpense";
import TableUI from "./Components/TableUI";
import AddPopForm from "./Components/AddPopForm";

const App = () => {
  return (
    <div>
      <ToastContainer position="top-right" autoClose={3000} />

      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="ExpensesForm" element={<AddExpense />} />
            <Route path="TableUI" element={<TableUI/>}/>
            <Route path="Addform" element={<AddPopForm/>}/>
          </Route>
        </Route>
        <Route path="*"element={<Login/>}/>
      </Routes>
    </div>
  );
};

export default App;

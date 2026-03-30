import React from "react";
import Tabs from "./Component/Tabs";
import Home from "./Component/Home";
import { Routes, Route } from "react-router-dom";
import Counter from "./Pages/Counter";
import Layout from "./Layout";
import Joke from "./Pages/Joke";
import Notfound from "./Notfound";
import Quotes from "./Pages/Quotes";
import ToDo from "./Pages/ToDo";
const App = () => {
  return (
    <div className="min-h-screen text-gray-800 dark:text-gray-100">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/Counter" element={<Counter />} />
          <Route path="/Jokes" element={<Joke />} />
          <Route path="/Quotes" element={<Quotes />} />
          <Route path="/Todo" element={<ToDo />}></Route>
        </Route>
        <Route path='*' element={<Notfound />}></Route>
      </Routes>
    </div>
  );
};

export default App;

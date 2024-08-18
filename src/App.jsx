import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import AllComponent from "./components/AllComponent";

function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<AllComponent />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

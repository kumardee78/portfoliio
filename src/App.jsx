import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import AllComponent from "./components/AllComponent";
import JavascriptProjects from "./components/JavascriptProjects";
import ReactProjects from "./components/ReactProjects";

function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<AllComponent />} />
          <Route path="/javascriptproject" element={<JavascriptProjects />} />
          <Route path="/reactproject" element={<ReactProjects/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

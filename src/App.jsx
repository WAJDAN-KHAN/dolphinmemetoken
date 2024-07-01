import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Main } from "./Page/Main";
import { Header } from "./components/Layout/Header";
 

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
       
      </Routes>
    </Router>
  );
}

export default App;

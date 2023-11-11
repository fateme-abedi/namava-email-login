import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import CommentPage from "./pages/CommentPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/comments" element={<CommentPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

import React from "react";
import "./App.css";
import Header from "./components/CommentComponents/Header/index.js";
import Login from "./components/Login";
import CommentPage from "./pages/CommentPage";

const App = () => {
  return (
    <div>
      <Header />
      <CommentPage />
    </div>
  );
};

export default App;

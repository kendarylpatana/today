import React from "react";
import "./styles.css";

import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";

export default function App() {
  return (
    <div className="App">
      <Header title="My header" subtitle="KD Patana" />
      <Main message="My Main" />
      <Footer note="This is my Footer" />
    </div>
  );
}

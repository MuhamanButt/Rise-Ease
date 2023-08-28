import React from "react";
import "./Components/styles/AppStyle.css";
import Title from "./Components/title";
import Navbar from "./Components/Navbar";
import { useState } from "react";
import PageContent from "./Components/PageContent";

const App = () => {
  const [page, setpage] = useState("Alarm");
  function activatePage(name) {
    setpage(name);
  }
  return (
    <div className="app-container">
      <Title name={page} />
      <div style={page !== "Alarm" ? { marginTop: "100px" } : {}}>
        <PageContent page={page} />
      </div>
      <Navbar page={page} activatePage={activatePage} />
    </div>
  );
};

export default App;

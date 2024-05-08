import React from "react";
import { Footer, Feature, MyProject, Header } from "./Containers";
import { CTA, Navbar } from "./components";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="gradient_bg">
        <Navbar />
        <Header />
      </div>
      <MyProject />
      <Feature />
      <CTA />
      <Footer />
    </div>
  );
}
export default App;

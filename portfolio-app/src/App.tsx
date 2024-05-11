import React from "react";
import { Footer, Features, MyProject, Header } from "./Containers";
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
      <Features />
      <CTA />
      <Footer />
    </div>
  );
}
export default App;

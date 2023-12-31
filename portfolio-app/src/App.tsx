import React from "react";
import { Footer, Feature, AboutME, Header } from "./Containers";
import { CTA, Brand, Navbar } from "./components";

function App() {
  return (
    <div className="App">
      <div className="gradient_bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <AboutME />
      <Feature />
      <CTA />
      <Footer />
    </div>
  );
}
export default App;

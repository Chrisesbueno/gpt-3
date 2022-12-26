import React from "react";
import {Footer, Blog, Possibility, Features, WGPT3, Header, Register} from './containers'
import {Brand, Navbar} from './components'
import './App.css'

function App() {
  return (
    <div className="App gradientMain">
      <div className="">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WGPT3 />
      <Features />
      <Possibility />
      <Register />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;

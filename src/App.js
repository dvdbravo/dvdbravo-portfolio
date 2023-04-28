import React from "react";
import "./App.css";
import Nav from "./Nav";

export default function App() {
  return (
    <>
      <div className="container">
        <Nav />
        <div className="row">
          <div className="col">
            <h1>Test</h1>
            <button className="btn btn-primary">Click me</button>
          </div>
        </div>
      </div>
    </>
  );
}

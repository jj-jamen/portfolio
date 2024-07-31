import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NavMenu />
    <App />
  </React.StrictMode>
);

// Main component
function App() {
  return (
    <main>
      <h1 className="gradientText">Building in progress...</h1>
    </main>
  );
}

function NavMenu() {
  return "this is the navbar";
}

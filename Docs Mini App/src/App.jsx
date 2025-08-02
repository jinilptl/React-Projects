import React from "react";
import Background from "./components/Background";
import Foreground from "./components/Foreground";

const App = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <Background />
      <Foreground />
    </div>
  );
};

export default App;

import React from "react";
import Card from "./Card";

const Foreground = () => {
  return (
    <div className="relative z-10 p-4 md:p-10 lg:p-20 flex flex-wrap justify-center gap-8">
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default Foreground;

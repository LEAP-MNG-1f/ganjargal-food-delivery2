"use client";
import React from "react";
import Googlemaps from "../_components/Googlemaps";

const DynamicMap = dynamic(() => import("./googlemaps"), { ssr: false });
const App = () => {
  return (
    <div>
      <h1>Google Map Integration</h1>
      <Googlemaps />
    </div>
  );
};

export default App;

import React from "react";

const Light = ({ color, active }) => (
  <div
    className="light"
    style={{ backgroundColor: color, opacity: active ? 1 : 0.4 }}
  />
);

export default Light;

import React from "react";

export default function Spacer({ width = 100, height = 20, ...props }) {
  return (
    <div
      style={{
        width: width,
        height: height * 4,
      }}
      {...props}
    />
  );
}

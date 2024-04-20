import React from "react";

export default function Card({ children, className }) {
  const classes = `card rounded-lg  border-2 shadow-md border-neutral-500 p-6 overflow-hidden ${className}`;
  return <div className={classes}>{children}</div>;
}

import React from "react";
import classes from "./container.module.css";

interface ContainerProps {
  children: React.ReactNode;
  centerContent?: "true" | "false";
  fluid?: "true" | "false";
}

export function Container({
  children,
  centerContent = "false",
  fluid = "false",
}: ContainerProps) {
  return (
    <div
      data-center-content={centerContent}
      data-fluid={fluid}
      className={classes.container}
    >
      {children}
    </div>
  );
}

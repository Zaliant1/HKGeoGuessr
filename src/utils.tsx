import React, { Component } from "react";

export const isCorrectWithinLeniency = (
  clickedX: number,
  clickedY: number,
  correctCoords: { x: number; y: number }
) => {
  // Check if the clicked position is within +1 or -1 and returns a bool
  const withinX = Math.abs(clickedX - correctCoords.x) <= 1;
  const withinY = Math.abs(clickedY - correctCoords.y) <= 1;

  return withinX && withinY;
};

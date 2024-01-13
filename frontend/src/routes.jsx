import React from "react";
import { Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { HomePage } from "./pages/HomePage";
import { ImageMap } from "./components/ImageMap";
export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/map" element={<ImageMap />} />
      </Route>
    </Routes>
  );
};

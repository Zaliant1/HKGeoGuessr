// AppRoutes.tsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { HomePage } from "./pages/HomePage";

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route path="/" element={<HomePage />} />
      </Route>
    </Routes>
  );
};

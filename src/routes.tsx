import React from "react";
import { HomePage } from "./pages/HomePage.tsx";
import { Map } from "./components/Map.tsx";
import { Route, Routes } from "react-router-dom";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<HomePage />} path="/" />
      <Route
        element={
          <Map
            imageUrl={"/src/assets/map.png"}
            rows={150}
            columns={150 * 1.6}
          />
        }
        path="/image"
      />
    </Routes>
  );
};

import React from "react";
import ReactDOM from "react-dom/client";
import { UserProvider } from "./context/Auth";
import { ThemeContextProvider } from "./context/ThemeContext";

import { AppRoutes } from "./routes";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <ThemeContextProvider>
        <BrowserRouter>
          <UserProvider>
            <AppRoutes />
          </UserProvider>
        </BrowserRouter>
      </ThemeContextProvider>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

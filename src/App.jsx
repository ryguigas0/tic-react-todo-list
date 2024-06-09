import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Router } from "./router";

import { AppContextProvider } from "./contexts";

export function App() {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </AppContextProvider>
  );
}

import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Content, Header, Footer } from "./components";
import { HomePage } from "./pages";
import { Router } from "./router";

export function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

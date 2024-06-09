import { Route, Routes } from "react-router-dom";

import { HomePage, AboutPage } from "./pages";

import { DefaultLayout } from "./layouts";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Route>
    </Routes>
  );
}

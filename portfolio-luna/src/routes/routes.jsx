import { Route, Routes } from "react-router-dom";
import { NotFound } from "../pages/NotFound";
import { Landingpage } from "../pages/Landingpage";
import { Aboutme } from "../pages/Aboutme";

const routes = (
  <Routes>
    <Route path="/" element={<Landingpage />}>
      <Route path="/about-me" element={<Aboutme />} />
    </Route>
    <Route path="*" element={<NotFound />} />
  </Routes>
);
export default routes;

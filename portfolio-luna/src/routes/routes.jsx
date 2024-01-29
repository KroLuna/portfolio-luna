import { Route, Routes } from "react-router-dom";
import { Notfound } from "../pages/NotFound";
import { Landingpage } from "../pages/Landingage";
import { Aboutme } from "../pages/Aboutme";

const routes = (
  <Routes>
    <Route path="/" element={<Landingpage />}>
      <Route path="/about-me" element={<Aboutme />} />
    </Route>
    <Route path="*" element={<Notfound />} />
  </Routes>
);
export default routes;

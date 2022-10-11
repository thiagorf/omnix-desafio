import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Offers } from "../page";
import { PageLayout } from "./PageLayout";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PageLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/offers" element={<Offers />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

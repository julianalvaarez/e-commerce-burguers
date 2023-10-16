import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { SelectBurguerPage } from "../pages/SelectBurguerPage";

export const RouterApp = () => {

  return (
    <>
      <Routes>
        <Route path="/*" element={<HomePage />} />
        <Route path="burguer" element={<SelectBurguerPage />} />
      </Routes>
    </>
  );
};

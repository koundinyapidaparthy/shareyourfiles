import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "./index";
import SuspenseComponent from "../components/Suspense";
function AllRouters() {
  return (
    <BrowserRouter>
      <Suspense fallback={<SuspenseComponent />}>
        <Routes>
          {routes.map(({ path, Component }, index) => {
            return <Route key={index} path={path} element={<Component />} />;
          })}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default AllRouters;

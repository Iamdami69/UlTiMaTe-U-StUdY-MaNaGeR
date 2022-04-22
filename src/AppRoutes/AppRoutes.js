//@ts-check
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FourOFour } from "../Pages/FourOFour/FourOFour";
import { Homepage } from "../Pages/Homepage/Homepage";
import { ProtectedRoute } from "./ProtectedRoute";
export function AppRoutes() {
  // function UnProtectRoute() {
  //   return !user ? <Outlet /> : <Navigate to="/" />;
  // }
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Homepage />} />
        </Route>
        <Route path="/*" element={<FourOFour />} />
      </Routes>
    </BrowserRouter>
  );
}

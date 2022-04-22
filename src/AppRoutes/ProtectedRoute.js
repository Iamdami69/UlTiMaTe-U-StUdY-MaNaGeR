import { Outlet } from "react-router-dom";
import { useAuth } from "../Hooks/useAuth/useAuth";

export function ProtectedRoute() {
  const { user } = useAuth();
  return !user ? <Outlet /> : <h1>Hi mom</h1>;
}

//@ts-check
import { useNavigate as goSomeWhere } from "react-router-dom";

export function useNavigate() {
  const navigate = goSomeWhere();
  const goTo = (/** @type {import("history").To} */ where) => {
    navigate(where);
  };
  return { goTo };
}

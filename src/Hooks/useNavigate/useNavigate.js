//@ts-check
import { useNavigate as goSomeWhere } from "react-router-dom";

export function useNavigate() {
  const navigate = goSomeWhere();
  const goTo = (/** @type {any} */ where) => {
    navigate(where);
  };
  return { goTo };
}

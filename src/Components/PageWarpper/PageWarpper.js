//@ts-check
import { useEffect } from "react";
import { PageWarpperComponent } from "./PageWarpperStyles";
export function PageWarpper({ children, className }) {
  return <PageWarpperComponent>{children}</PageWarpperComponent>;
}

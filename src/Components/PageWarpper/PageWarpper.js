//@ts-check
import { useEffect } from "react";
import { PageWarpperComponent } from "./PageWarpperStyles";
export function PageWarpper({ children, className, disableContext }) {
  return (
    <PageWarpperComponent onContextMenu={disableContext} className={className}>
      {children}
    </PageWarpperComponent>
  );
}

//@ts-check
import { useEffect } from "react";
import { PageWarpperComponent } from "./PageWarpperStyles";
export function PageWarpper({ children, className }) {
  // const disableContext = (/** @type {{ preventDefault: () => void; }} */ e) => {
  //   e.preventDefault();
  // };
  useEffect(() => {
    document.addEventListener("keydown", (event) => {
      if (event.code === "KeyI" && event.ctrlKey && event.shiftKey) {
        event.preventDefault();
      }
    });
  }, []);
  return (
    <PageWarpperComponent
      /*onContextMenu={disableContext} */ className={className}
    >
      {children}
    </PageWarpperComponent>
  );
}

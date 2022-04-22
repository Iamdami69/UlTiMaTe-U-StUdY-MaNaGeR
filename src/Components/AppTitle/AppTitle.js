//@ts-check
import { AppTitleComponent } from "./AppTitleStyles";

export function AppTitle({ color, size, weight }) {
  return (
    <AppTitleComponent weight={weight} color={color} size={size}>
      Ultimate U
    </AppTitleComponent>
  );
}

import { DayAndNight } from "../../Components/ToggleTheme/DayAndNight";
import { HomePage } from "./HomepageStyles";

export function Homepage() {
  return (
    <HomePage>
      <h1>Hi From Homepage</h1>
      <DayAndNight />
    </HomePage>
  );
}

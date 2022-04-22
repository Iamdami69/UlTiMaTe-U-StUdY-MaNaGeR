import { Header } from "../../Components/Header/Header";
import { PageWarpper } from "../../Components/PageWarpper/PageWarpper";
import { DayAndNight } from "../../Components/ToggleTheme/DayAndNight";
import { HomePage } from "./HomepageStyles";

export function Homepage() {
  return (
    <PageWarpper>
      <Header />
    </PageWarpper>
  );
}

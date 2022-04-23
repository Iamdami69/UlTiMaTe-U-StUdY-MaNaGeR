import { Header } from "../../Components/Header/Header";
import { Hero } from "../../Components/Hero/Hero";
import { PageWarpper } from "../../Components/PageWarpper/PageWarpper";
import { DayAndNight } from "../../Components/ToggleTheme/DayAndNight";
import { HomePage } from "./HomepageStyles";

export function Homepage() {
  return (
    <PageWarpper>
      <Header />
      <Hero />
    </PageWarpper>
  );
}

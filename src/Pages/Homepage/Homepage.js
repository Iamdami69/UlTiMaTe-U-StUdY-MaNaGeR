import { Header } from "../../Components/Header/Header";
import { Hero } from "../../Components/Hero/Hero";
import { MiniFeatures } from "../../Components/MiniFeatures/MiniFeatures";
import { PageWarpper } from "../../Components/PageWarpper/PageWarpper";

export function Homepage() {
  return (
    <PageWarpper>
      <Header />
      <Hero />
      <MiniFeatures />
    </PageWarpper>
  );
}

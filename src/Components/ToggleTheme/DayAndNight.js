import { useTheme } from "../../Hooks/useTheme/useTheme";
import { CircleComponent, DayAndNightComponent } from "./ToggleThemeStyles";
export function DayAndNight() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <DayAndNightComponent
      onClick={() => {
        toggleTheme();
      }}
      isClicked={isDarkMode}
    >
      <CircleComponent
        wouldRotate={isDarkMode}
        className={` hasShadowTwo `}
      ></CircleComponent>
      <div className={`styles.dayLines`}></div>
      <div className={`styles.dayLines`}></div>
      <div className={`styles.dayLines`}></div>
    </DayAndNightComponent>
  );
}

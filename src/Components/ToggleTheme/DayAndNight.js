//@ts-check
import { useTheme } from "../../Hooks/useTheme/useTheme";
import { CircleComponent, DayAndNightComponent } from "./ToggleThemeStyles";
export function DayAndNight({ height = "50px", innerWidth = "44px" }) {
  // @ts-ignore
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <DayAndNightComponent
      height={height}
      onClick={() => {
        toggleTheme();
      }}
      isClicked={isDarkMode}
    >
      <CircleComponent
        innerWidth={innerWidth}
        wouldRotate={isDarkMode}
        className={` hasShadowTwo `}
      ></CircleComponent>
      <div className={`styles.dayLines`}></div>
      <div className={`styles.dayLines`}></div>
      <div className={`styles.dayLines`}></div>
    </DayAndNightComponent>
  );
}

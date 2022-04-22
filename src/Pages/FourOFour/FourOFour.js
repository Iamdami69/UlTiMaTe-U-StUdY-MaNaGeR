//@ts-check
import { AppLogo } from "../../Components/AppLogo/AppLogo";
import { PageWarpper } from "../../Components/PageWarpper/PageWarpper";
import { DayAndNight } from "../../Components/ToggleTheme/DayAndNight";
import { useTheme } from "../../Hooks/useTheme/useTheme";
import {
  FourOFourContainer,
  FourOFourHeader,
  FourOFourImageContainer,
  FourOFourText
} from "./FourOFourStyles";
export function FourOFour() {
  const { theme } = useTheme();
  return (
    <PageWarpper>
      <DayAndNight height={`30px`} innerWidth={`30px`} />
      {/* <FourOFourHeader>
        <AppLogo size={28} color={theme.brandColor} />
      </FourOFourHeader>
      <FourOFourContainer>
        <FourOFourImageContainer>
          <FourOFourText>404</FourOFourText>
          <img
            src="https://ucarecdn.com/2f0b7798-4300-4498-bb0b-e2ba350567bd/"
            alt=""
          />
        </FourOFourImageContainer>
      </FourOFourContainer> */}
    </PageWarpper>
  );
}

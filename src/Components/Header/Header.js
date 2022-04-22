//@ts-check

import { useNavigate } from "../../Hooks/useNavigate/useNavigate";
import { useTheme } from "../../Hooks/useTheme/useTheme";
import { AppLogo } from "../AppLogo/AppLogo";
import {
  AppLogoContainer,
  HeaderComponent,
  HeaderNav,
  Navlink,
  NavLinkContainer
} from "./HeaderStyles";

export function Header() {
  const { goTo } = useNavigate();
  const { theme } = useTheme();

  // const goTo = (/** @type {String} */ where) => {
  //   navigate(`/${where}`);
  // };
  return (
    <HeaderComponent>
      <HeaderNav>
        <AppLogoContainer>
          <AppLogo color={theme.brandColor} size={28} className={undefined} />
        </AppLogoContainer>
        <NavLinkContainer>
          <Navlink data-to="none" onClick={() => goTo("/tw")}>
            Features
          </Navlink>
        </NavLinkContainer>
      </HeaderNav>
    </HeaderComponent>
  );
}

//@ts-check

import { useState } from "react";
import { useNavigate } from "../../Hooks/useNavigate/useNavigate";
import { useTheme } from "../../Hooks/useTheme/useTheme";
import { AppLogo } from "../AppLogo/AppLogo";
import {
  AppLogoContainer,
  HeaderComponent,
  HeaderNav,
  GetStarted,
  NavLinkContainer,
  Nav,
  Navlink,
  MenuIcon,
  CloseMenuIcon
} from "./HeaderStyles";

export function Header() {
  const { goTo } = useNavigate();
  const { theme } = useTheme();
  const [showMenu, setShowMenu] = useState(false);
  // const goTo = (/** @type {String} */ where) => {
  //   navigate(`/${where}`);
  // };
  return (
    <HeaderComponent validator={showMenu}>
      <HeaderNav>
        <AppLogoContainer>
          <AppLogo color={theme.brandColor} size={28} />
        </AppLogoContainer>
        <NavLinkContainer>
          <GetStarted data-to="none" onClick={() => goTo("/sign-up")}>
            Get Started
          </GetStarted>
          {!showMenu && (
            <MenuIcon
              size={28}
              className="wontShowOnTablet wontShowOnDesktop"
              onClick={() => setShowMenu(true)}
            />
          )}
          {showMenu && (
            <CloseMenuIcon
              size={28}
              className="wontShowOnTablet wontShowOnDesktop"
              onClick={() => setShowMenu(false)}
            />
          )}
          <Nav validator={showMenu}>
            <Navlink onClick={() => goTo("/features")}>Features</Navlink>
            <Navlink onClick={() => goTo("/about")}>About</Navlink>
            <Navlink onClick={() => goTo("/pricing")}>Pricing</Navlink>
            <Navlink onClick={() => goTo("/sign-in")}>Sign in</Navlink>
          </Nav>
        </NavLinkContainer>
      </HeaderNav>
    </HeaderComponent>
  );
}

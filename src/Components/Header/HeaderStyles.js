import styled from "styled-components";
export const HeaderComponent = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  background-color: ${(props) => props.theme.background};
`;
export const HeaderNav = styled.nav`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const AppLogoContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;
export const NavLinkContainer = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: flex-end;
`;
export const Navlink = styled.button`
  color: ${(props) => props.theme.colorTwo};
  text-decoration: none;
`;

import styled from "styled-components";
import { MdMenu, MdClose } from "react-icons/md";
export const HeaderComponent = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  transition: all 1.5s cubic-bezier(0.68, -0.55, 0.27, 1.55), width 0.2s ease !important;
  background-color: ${(props) =>
    props.validator ? props.theme.depthColorTwo : props.theme.background};
  width: ${(props) => (props.validator ? "90%" : "100%")};
  margin: ${(props) => (props.validator ? "10px auto 0 auto" : "unset")};
  border-radius: ${(props) => (props.validator ? "10px 10px 0 0" : "unset")};
  @media only screen and (min-width: 650px) {
    background-color: ${(props) => props.theme.background};
    width: 100%;
  }
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
export const GetStarted = styled.button`
  color: ${(props) => props.theme.colorTwo};
  text-decoration: none;
  padding: 8px 15px;
  border-radius: 4px;
  background-color: ${(props) => props.theme.brandColor};
  cursor: pointer;
  font-size: 1rem;
  color: #fff;
  white-space: nowrap;
`;
export const Nav = styled.nav`
  display: flex;
  gap: 10px;
  align-items: center;
  @media only screen and (max-width: 650px) {
    position: absolute;
    min-height: 200px;
    background-color: ${(props) => props.theme.depthColorThree};
    top: 84px;
    left: 0;
    right: 0;
    width: 90%;
    margin: 0 auto;
    flex-direction: column;
    border-radius: 0 0 10px 10px;
    display: ${(props) => (props.validator ? "flex" : "none")};
    gap: 30px;
    padding: 10px 0;
  }
`;
export const Navlink = styled.button`
  font-size: 1.4rem;
  color: ${(props) => props.theme.colorTwo};
  background: transparent;
  cursor: pointer;
  padding: 2px 8px;
  border-radius: 4px;
  white-space: nowrap;
  &:hover {
    background-color: ${(props) => props.theme.depthColor};
  }
  word-break: keep-all;
  @media only screen and (max-width: 650px) {
    width: 90%;
  }
`;
export const MenuIcon = styled(MdMenu)`
  color: ${(props) => props.theme.color};
`;
export const CloseMenuIcon = styled(MdClose)`
  color: ${(props) => props.theme.color};
`;

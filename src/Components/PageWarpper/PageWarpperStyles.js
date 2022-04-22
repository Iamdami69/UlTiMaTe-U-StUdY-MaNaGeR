import styled from "styled-components";

export const PageWarpperComponent = styled.section`
  overflow-y: scroll;
  height: 100vh;
  width: 100%;
  &::-webkit-scrollbar {
    display: none;
  }
  background-color: ${(props) => props.theme.background};
  overflow: hidden;
  width: 100%;
  height: 100vh;
`;

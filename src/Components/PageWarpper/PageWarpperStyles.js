import styled from "styled-components";

export const PageWarpperComponent = styled.main`
  overflow-y: scroll;
  height: 100%;
  width: 100%;
  &::-webkit-scrollbar {
    display: none;
  }
`;

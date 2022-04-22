import styled from "styled-components";

export const PageWarpperComponent = styled.section`
  overflow-y: scroll;
  height: 100%;
  width: 100%;
  &::-webkit-scrollbar {
    display: none;
  }
`;

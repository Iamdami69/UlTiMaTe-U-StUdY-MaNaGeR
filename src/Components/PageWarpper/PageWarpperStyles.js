import styled from "styled-components";

export const PageWarpperComponent = styled.section`
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

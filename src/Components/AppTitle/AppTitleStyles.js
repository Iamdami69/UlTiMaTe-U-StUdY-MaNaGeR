import styled from "styled-components";
export const AppTitleComponent = styled.h1`
  color: ${(props) => props.theme.color};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
`;

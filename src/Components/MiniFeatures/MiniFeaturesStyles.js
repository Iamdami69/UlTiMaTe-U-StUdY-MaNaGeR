import styled from "styled-components";

export const MiniFeaturesComponent = styled.section`
  width: 100%;
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2.5rem;
`;
export const FeaturesContainer = styled.div`
  width: min(90%, 1000px);
  height: 100%;
  display: grid;
  gap: 25px;
  grid-template-columns: repeat(auto-fill, 256px);
  @media only screen and (max-width: 660px) {
    gap: 15px;
    grid-template-columns: repeat(auto-fill, 100%);
  }
`;
export const Feature = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 256px;
  min-height: 100px;
  background-color: ${(props) => props.theme.depthColorThree};
`;

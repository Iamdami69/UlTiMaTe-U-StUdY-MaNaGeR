import styled from "styled-components";

export const DayAndNightComponent = styled.div`
  height: 50px;
  width: 90px;
  border-radius: 84px;
  display: flex;
  align-items: center;
  padding: 5px;
  background-color: ${(props) => (props.isClicked ? "#749DD6" : "#83D8FF")};
  @media only screen and (max-width: 550px) {
    height: 30px;
    width: 70px;
  }
`;

export const CircleComponent = styled.div`
  width: 44px;
  height: 44px;
  background-color: #ffcf96;
  border-radius: 50px;
  @media only screen and (max-width: 550px) {
    height: 24px;
    width: 24px;
  }
  transform: ${(props) => (props.wouldRotate ? "unset" : "translate(39px, 0)")};
`;

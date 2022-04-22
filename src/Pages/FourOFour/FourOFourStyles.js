import styled from "styled-components";

export const FourOFourHeader = styled.header`
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const FourOFourContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;
export const FourOFourImageContainer = styled.div`
  aspect-ratio: 1/1;
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow:hidden;
  & img {
    width: min(90%, 500px);
    z-index: 2;
    position: absolute;
  }
`;
export const FourOFourText = styled.span`
  position: absolute;
  font-size: 26rem;
  opacity: 0.2;
  z-index: 0;
  font-weight: bolder;
  left: 0;
  right: 0;
  text-align: center;
  top: -5%;
`;

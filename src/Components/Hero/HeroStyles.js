import styled from "styled-components";

export const HeroComponent = styled.section`
  padding-bottom: 2em;
  padding-top: 5rem;
  text-align: center;
  @media only screen and (min-width: 769px) {
    .hero {
      padding-bottom: 5rem;
      padding-top: 7.5rem;
    }
  }
`;
export const HeroFirstDiv = styled.div`
  padding: 0 1.25rem;
  @media only screen and (min-width: 550px) and (max-width: 768px) {
    padding-right: 4.25rem;
    padding-left: 4.25rem;
  }
`;
export const HeroSecondDiv = styled.div`
  margin-left: auto;
  margin-right: auto;
  @media only screen and (min-width: 550px) and (max-width: 768px) {
    width: calc((3.625rem * 6) + (1.5rem * 5));
  }
  @media only screen and (min-width: 769px) {
    width: calc((4rem * 6) + (2rem * 5));
  }
`;
export const HeroHeading = styled.h1`
  color: ${(props) => props.theme.color};
  margin-bottom: 0.75rem;
  font-size: 1.9375rem;
  line-height: 1.2;
  & span {
    color: ${(props) => props.theme.brandColor};
  }
  @media only screen and (min-width: 550px) and (max-width: 768px) {
    font-size: 2.1875rem;
  }
  @media only screen and (min-width: 769px) {
    margin-bottom: 1rem;
    font-size: 2.75rem;
  }
`;
export const HeroParagraph = styled.p`
  color: ${(props) => props.theme.colorThree};
  margin-bottom: 1.125rem;
`;
export const HeroFormContainer = styled.div`
  flex-direction: column;
  row-gap: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const HeroForm = styled.form`
  background-color: #ebebeb;
  border-radius: 5rem;
  grid-template-columns: minmax(0, 1fr) auto;
  padding: 0.25rem;
  align-items: center;
  justify-content: center;
  width: 100%;
  display: grid;
  @media only screen and (min-width: 550px) and (max-width: 768px) {
    width: calc((3.625rem * 4) + (1.5rem * 3));
  }
  @media only screen and (min-width: 769px) {
    width: calc((4rem * 4) + (2rem * 3));
  }
`;
export const HeroFormInput = styled.input`
  background-color: #ebebeb;
  border: 0.0625rem solid #ebebeb;
  border-radius: 5rem;
  height: 2.5rem;
  padding-left: 15px;
`;
export const HeroSubmitButton = styled.button`
  border: 0.0625rem solid #353535;
  border-radius: 5rem;
  display: block;
  font-weight: 700;
  line-height: 1;
  text-align: center;
  background-color: #353535;
  color: #fff;
  padding: 0.625rem 0.875rem 0.75rem;
  width: fit-content;
  cursor: pointer;
`;
export const HeroFormParagraph = styled.small`
  color: ${(props) => props.theme.colorTwo};
  line-height: 1;
`;
export const HeroDayAndNightToggle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1.5rem 0;
`;
export const HeroImage = styled.img`
  display: block;
  height: auto;
  margin: 1rem auto;
  max-width: 100%;
  @media only screen and (min-width: 550px) and (max-width: 768px) {
    margin-top: 1.5rem;
  }
  @media only screen and (min-width: 769px) {
    margin-top: 3rem;
  }
`;
export const HeroDashboardInnerContaiiner = styled.div`
  background-color: ${(props) => props.theme.depthColor};
  border-radius: inherit;
  width: 100%;
  height: 100%;
  display: flex;
`;

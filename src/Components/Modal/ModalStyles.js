import styled from "styled-components";

export const ModalComponent = styled.div`
  position: fixed;
  width: 100%;
  min-height: 100%;
  top: -100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: hidden;
  transition: 0.2s ease-in-out !important;
  top: ${(props) => props.showModal && "0"};
  transform: ${(props) => props.showModal && "unset"};
  visibility: ${(props) => props.showModal && "visible"};
`;
export const ModalBox = styled.div`
  width: min(90%, 500px);
  min-height: 200px;
  padding: 1.5rem;
  text-align: left;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  transform: scale(0);
  background-color: ${(props) => props.theme.color};
  transform: ${(props) => props.showModal && "unset"};
`;
export const ModalHeading = styled.h1`
  font-size: 18px;
  color: ${(props) => props.theme.depthColor};
`;
export const ModalParagraph = styled.p`
  font-size: 14px;
  white-space: nowrap;
  word-break: break-all;
  color: ${(props) => props.theme.colorTwo};
`;
export const ModalButton = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 0.4rem;
  border: none;
  font-size: 14px;
  font-weight: 500;
  background-color: ${(props) => props.theme.brandColor};
`;

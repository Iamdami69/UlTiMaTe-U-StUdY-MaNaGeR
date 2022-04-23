//@ts-check
import {
  ModalComponent,
  ModalBox,
  ModalHeading,
  ModalParagraph,
  ModalButton
} from "./ModalStyles";
export function Modal({ headContent, bodyContent, buttonContent, event }) {
  return (
    <ModalComponent
      // @ts-ignore
      showModal={headContent && bodyContent && buttonContent}
    >
      <ModalBox
        // @ts-ignore
        showModal={headContent && bodyContent && buttonContent}
      >
        <ModalHeading>{headContent}</ModalHeading>

        <ModalParagraph>{bodyContent}</ModalParagraph>

        <ModalButton onClick={event} className={`touchableOpacity `}>
          {buttonContent}
        </ModalButton>
      </ModalBox>
    </ModalComponent>
  );
}

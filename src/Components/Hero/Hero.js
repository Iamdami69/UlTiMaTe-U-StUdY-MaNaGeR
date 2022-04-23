//@ts-check
import { useState } from "react";
import { Modal } from "../Modal/Modal";
import {
  HeroComponent,
  HeroFirstDiv,
  HeroHeading,
  HeroParagraph,
  HeroSecondDiv,
  HeroFormContainer,
  HeroForm,
  HeroFormInput,
  HeroSubmitButton,
  HeroImage,
  HeroDayAndNightToggle,
  HeroFormParagraph
} from "./HeroStyles";
import { DayAndNight } from "../ToggleTheme/DayAndNight";
export function Hero() {
  const [email, setEmail] = useState(null);
  const [message, setMessage] = useState({
    headContent: null,
    bodyContent: null,
    buttonContent: null
  });
  const submitHeroForm = (/** @type {{ preventDefault: () => void; }} */ e) => {
    e.preventDefault();
    if (!email) {
      setMessage({
        headContent: "Invalid Input",
        bodyContent:
          "Please provide your email address to subscribe to newsletter",
        buttonContent: "Okay "
      });
    }
  };
  return (
    <main role="main">
      <HeroComponent>
        <HeroFirstDiv>
          <HeroSecondDiv>
            <HeroHeading>
              Study Management Platform On <span>Steroids</span>
            </HeroHeading>
            <HeroParagraph>
              Lorem ipsum dolor sit amet, consectetur lit, enimad eiusmod tempor
              incididunt ut labore et dolore magna aliqua ullamco laboris nisi.
            </HeroParagraph>
            {/* CTA */}
            <HeroFormContainer>
              <HeroForm action="#" onSubmit={submitHeroForm}>
                <HeroFormInput
                  onChange={({ target }) => setEmail(target.value)}
                  type="email"
                  placeholder="Email"
                />
                <HeroSubmitButton type="submit">Subscribe</HeroSubmitButton>
              </HeroForm>
              <HeroFormParagraph>
                Available on Mac, Windows, Linux, and Mobile.
              </HeroFormParagraph>
            </HeroFormContainer>
          </HeroSecondDiv>
          <HeroDayAndNightToggle>
            <DayAndNight />
          </HeroDayAndNightToggle>
          {/* IMAGE */}
          <HeroImage
            src="https://i.ibb.co/yWLvNK4/ultimate-u-ipad.png"
            alt="ultimate-u-ipad"
          />
        </HeroFirstDiv>
      </HeroComponent>
      <Modal
        headContent={message?.headContent}
        bodyContent={message?.bodyContent}
        buttonContent={
          <span role="img" aria-label="Button-with  &#128077; emoji">
            {message?.buttonContent} &#128077;
          </span>
        }
        event={() => setMessage(null)}
      />
    </main>
  );
}

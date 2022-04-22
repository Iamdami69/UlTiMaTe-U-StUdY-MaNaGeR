import React from "react";
import { DayAndNight } from "../../Components/ToggleTheme/DayAndNight";
import { useNavigate } from "../../Hooks/useNavigate/useNavigate";
import "./FourOFour.css";
export function FourOFour() {
  const { goTo } = useNavigate();
  return (
    <section className="wrapper page">
      <div className="toggleContainer">
        <DayAndNight />
      </div>
      <div className="container">
        <div id="scene" className="scene">
          <div className="circle"></div>

          <div className="one">
            <div className="content">
              <span className="piece"></span>
              <span className="piece"></span>
              <span className="piece"></span>
            </div>
          </div>

          <div className="two">
            <div className="content">
              <span className="piece"></span>
              <span className="piece"></span>
              <span className="piece"></span>
            </div>
          </div>

          <div className="three">
            <div className="content">
              <span className="piece"></span>
              <span className="piece"></span>
              <span className="piece"></span>
            </div>
          </div>

          <p className="p404">404</p>
        </div>

        <div className="text">
          <article>
            <p>
              Uh oh! Looks like you got lost. <br />
              Go back to the homepage if you dare!
            </p>
            <button onClick={() => goTo("/")}>i dare!</button>
          </article>
        </div>
      </div>
    </section>
  );
}

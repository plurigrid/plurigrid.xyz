import * as React from "react";
import { useNavigate } from "react-router";
import "./App.css";
import { Header } from "./Header";
import Socials from "./Socials";

function Landing() {
  let navigate = useNavigate();

  return (
    <div>
      <Header />
      <div className="lead">
        <img src="/logo.png" className="logo" height={300} />
        <div className="lead-explainer">
          <h1>Plurigrid</h1>
          <p>Plurigrid is building a powerful tool that allows you to own a vertex of an energy grid that guarantees a stable, resilient clean energy supply to your home or business.</p>

          <div className="socials-container">
            <Socials />
          </div>

          <button className="btn btn-primary lead-cta" onClick={() => {
            navigate("/hatchers")
          }}>
            Enter</button>
        </div>
        <div className="inviter">
          <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 384 512"><path d="M169.4 278.6C175.6 284.9 183.8 288 192 288s16.38-3.125 22.62-9.375l160-160c12.5-12.5 12.5-32.75 0-45.25s-32.75-12.5-45.25 0L192 210.8L54.63 73.38c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25L169.4 278.6zM329.4 265.4L192 402.8L54.63 265.4c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25l160 160C175.6 476.9 183.8 480 192 480s16.38-3.125 22.62-9.375l160-160c12.5-12.5 12.5-32.75 0-45.25S341.9 252.9 329.4 265.4z"/></svg>
        </div>
      </div>
      <div className="lead">
        <div className="vision-container">
          <h1>Plurigrid's vision</h1>
          <p>Energy coordination and baseline level of access to electricity is a human right ⚡️🇺🇳</p>
          <div className="vision-grid">
            <div className="vision-item">
              <img src="noun-capital-2842004.svg" width={80} />
              <div className="vision-item-explainer">
                <div className="vision-item-title">Capital efficiency</div>
                <div>As a microgrid powered by solar &mdash; can&nbsp;I go to the market and be sure that I am optimally allocating every $ </div>
              </div>
            </div>
            <div className="vision-item">
              <img src="noun-moral-901639.svg" width={80} />
              <div className="vision-item-explainer">
                <div className="vision-item-title">Value alignment</div>
                <div>Not violating ethical standards of microgrid users while still coordinating in the grid</div>
              </div>
            </div>
            <div className="vision-item">
              <img src="noun-domino-effect-4450396.svg" width={80} />
              <div className="vision-item-explainer">
                <div className="vision-item-title">Resilience</div>
                <div>In an event of a transmission failure&#xfeff;&mdash;&#xfeff;climate, war, political upheaval&#xfeff;&mdash;&#xfeff;the grid of grids needs to rapidly reconfigure itself or risk an outage</div>
              </div>
            </div>
            <div className="vision-item">
              <img src="noun-stealing-money-2060045.svg" width={80} />
              <div className="vision-item-explainer">
                <div className="vision-item-title">Fraud prevention</div>
                <div>Shift the enforcement of agreed upon energy distribution rules from human intermediaries / operators to math and code under certain well-understood corruptibility barriers</div>
              </div>
            </div>
          </div>
        </div>

        {/* <ul>
          <li><b>capital efficiency</b> - as a microgrid powered by solar ☀️  - can I go to the market and be sure that I am optimally allocating every $ </li>
          <li><b>value alignment</b> - not violating ethical standards of microgrid users while still coordinating in the grid</li>
          <li><b>resilience</b> - in an event of a transmission failure - climate, war, political upheaval - the grid of grids needs to rapidly reconfigure itself or risk an outage</li>
          <li><b>fraud prevention</b> - shift the enforcement of agreed upon energy distribution rules from human intermediaries / operators to math and code under certain well-understood corruptibility barriers</li>
        </ul> */}
      </div>
    </div>
  );
}

export default Landing;


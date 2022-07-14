import React from "react";
import { CTAButton } from "./CTAButton";
import { Header } from "./Header";

function Matrix() {
  return (
    <div>
      <Header />
      <div className="whitepaper-like">
        <h1>$MATRIX</h1>
        <p className="intro">Simulation token from Plurigrid</p>

        <div>A way for a self-bootstrapping energy grid simulation value network, combined with the ability to run your own simulations that will allow you to:</div>

        <ul>
          <li> run an Akash container or series of containers including w/ GPUs (when functionality comes out) to execute a full-scale, self-contained Plurigrid simulation (includes all the chains involved in the recording of generation / transmission / consumption of power)</li>
          <li>the simulation itself will be indexed and exposed as a GraphQL queryeable indexed dataset asset, that social, systems, energy scientists can use to understand what happened (example of what kind of simulation types can be run is here: <a href="https://www.nrel.gov/docs/fy20osti/73071.pdf">www.nrel.gov/docs/fy20osti/73071.pdf</a>)</li>
          {/* Screen Shot 2022-07-09 at 19.48.28.png */}
          <li>self-bootstrapping public good that is going to use Nouns DAO type weekly mint of a simulation -- starting with cadcad in a single Docker container with a single chain, and growing to become full-fledged grid simulations at 100 chains, synthetic data based on historic modeling, IBC analogue etc etc.</li>
          <li>those who get these weekly Non-Fungible Simulations will be eligible for ongoing airdrops of $MATRIX token as simulation environment evolves</li>
          <li>going to a large-scale IRL deployment in 6 months preceded by several IRL deployments based on simulations thus far (example clarification: an IRL deployment can be a solar field or other Distributed Energy Resource) operator who agrees to switch out their existing Industrial Control System to the one Plurigrid offers w/ its models for coordination in the event of a grid disruption subject to the standard</li>
          <li>the simulations exist to try out various scenarios that can occur</li>



        </ul>
        <h1>Tokenomics</h1>
        <ul>
          <li>TODO: token distribution graph</li>
          <li>TODO: token vesting graph</li>
        </ul>
        <ul>
          <li>Simulation token for self-bootstrapping network of value around running simulations of the grid</li>
          <li>Airdrop to these organizations</li>
          <li>$MATRIX tokens allows participants to bid on the grid simulation mints</li>
          <li>Holding a simulation mint makes you eligible for future $MATRIX token airdrops</li>
        </ul>

        <br />
        <br />
        <br />
        <div style={{ textAlign: "center" }}>
          <CTAButton title="Claim airdrop" />
        </div>
      </div>
    </div>
  )
}

export default Matrix;
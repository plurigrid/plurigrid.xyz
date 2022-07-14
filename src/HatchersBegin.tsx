import React from "react";
import { useNavigate } from "react-router";
import { CTAButton } from "./CTAButton";
import { Header } from "./Header";

function Hatchers() {
  let navigate = useNavigate();

  return (
    <div>
      <Header />
      <div className="whitepaper-like">
        <h1>Connect wallet</h1>
        <p className="intro">Connect your wallet to begin simulation</p>
        <CTAButton title="Connect Keplr wallet" onClick={() => {
          // navigate("/hatchers/begin")
        }} />
      </div>
    </div>
  )
}

export default Hatchers;
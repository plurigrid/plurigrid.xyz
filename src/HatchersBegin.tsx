import { useAccount, useConnect, useDisconnect } from "graz";
import React from "react";
import { useNavigate } from "react-router";
import { CTAButton } from "./CTAButton";
import { Header } from "./Header";

function Hatchers() {

  const { connect, status } = useConnect();
  const { data: account, isConnected } = useAccount();
  const { disconnect } = useDisconnect();

  function handleConnect() {
    return isConnected ? disconnect() : connect();
  }

  return (
    <div>
      <Header />
      <div className="whitepaper-like">
        <h1>Connect wallet</h1>
        <p className="intro">Connect your wallet to begin simulation</p>
        {account ? `Connected to ${account.bech32Address}` : status}
        <button onClick={handleConnect}>{isConnected ? "Disconnect" : "Connect"}</button>

        {/* <CTAButton title="Connect Keplr wallet" onClick={() => {
          // navigate("/hatchers/begin")
        }} /> */}
      </div>
    </div>
  )
}

export default Hatchers;
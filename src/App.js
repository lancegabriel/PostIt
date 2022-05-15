import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Greeter from "./artifacts/contracts/Greeter.sol/Greeter.json";
import { useMoralis} from "react-moralis";
import { Button, ConnectButton, Typography} from "web3uikit";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

const greeterAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";

function App() {
    const { isAuthenticated, Moralis, logout} = useMoralis();

  return (
    <> 
    
    {isAuthenticated ? (
    <div className="page">
      <div className="sideBar"> Sidebar</div>
          <div className="mainWindow">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
            <Button 
            text="Sign out"
            onClick={() => logout()}
            />
              <div className="Rightbar"> RightBar</div>
        </div>
       
    ) : (
      <div className="loginPage">
        <Typography variant="h1" color="white">Post It</Typography>
        <Typography variant="caption14" color="white">Anonymous and fun.</Typography>
        <ConnectButton />
      </div>
    )}
    </>
  );
  }

export default App;

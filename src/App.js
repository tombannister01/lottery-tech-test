import React, { createContext, useContext, useState } from "react";
import "./App.css";
import { PreviousDraws } from "./components/PreviousDraws";
import { TicketDetails } from "./components/TicketDetails";
import './styles/styles.css'

import lotteryData from './lotteryData.json'



export const App = () => {
  return (
    // <LotteryContext.Provider value ={{ lotteryData }}>
    <>
      <section className="ticket-details-section">
        <TicketDetails lotteryData={lotteryData}/>
      </section>
      <section className="previous-draws-section">
        <PreviousDraws lotteryData={lotteryData}/>
      </section>
      </>
      // </LotteryContext.Provider>
  );
};


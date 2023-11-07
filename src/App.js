import React, { createContext, useContext } from "react";
import "./App.css";
import { PreviousDraws } from "./components/PreviousDraws";
import { TicketDetails } from "./components/TicketDetails";
import './styles/styles.css'

import lotteryData from './lotteryData.json'

const LotteryContext = createContext()

export const App = () => {
  return (
    <LotteryContext.Provider value ={{ lotteryData }}>
      <section className="ticket-details-section">
        <TicketDetails />
      </section>
      <section className="previous-draws-section">
        <PreviousDraws />
      </section>
      </LotteryContext.Provider>
  );
};

export const useLotteryContext = () => {
  return useContext(LotteryContext)
}

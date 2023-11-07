import React from "react";
import { useLotteryContext } from "../App";
import "../styles/styles.css";

export const TicketDetails = () => {
  const { lotteryData } = useLotteryContext();
  return (
    <>
    <div className="heading">
        <p>Lottery Details:</p>
    </div>
      {lotteryData.ticketDetails.map(ticket => {
        const { ticketNumber, purchaseDate, price, numbers, imageUrl } = ticket;
        return (
          <div
            key={ticketNumber}
            className="individual-ticket"
            style={{
              backgroundImage: `url(${imageUrl})`
            }}
          >
            <div className="ticket-details-container">
              <p>Ticket Number: {ticketNumber}</p>
              <p>Purchase Date: {purchaseDate}</p>
              <p>Price: £{price}</p>
              <p>Numbers: {numbers.join(", ")}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

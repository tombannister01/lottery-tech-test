import React from "react";
import { useLotteryContext } from "../App";
import { formatCurrency } from "../utils/utils.js";

export const PreviousDraws = ({ lotteryData }) => {
  // console.log(props.lotteryData.previousDraws)
  // const { lotteryData } = useLotteryContext();

  return (
    <>
    <div className="heading">
        <p>Previous Draws:</p>
    </div>
      {lotteryData.previousDraws.map(previousDraw => {
        const { imageUrl, drawDate, winningNumbers, jackpotAmount } = previousDraw
        return (
          <div
            key={`${winningNumbers}-${jackpotAmount}-${drawDate}`}
            className="individual-ticket"
            style={{
              backgroundImage: `url(${imageUrl})`,
            }}
          >
            <div className="ticket-details-container">
              <p>Draw Date: {drawDate}</p>
              <p>Winning Numbers: {winningNumbers.join(", ")}</p>
              <p>Jackpot Amount: {formatCurrency.format(jackpotAmount)}
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
};

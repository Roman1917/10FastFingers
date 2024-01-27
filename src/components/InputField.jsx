import React, { useState } from "react";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import { Checkbox } from "@mui/material";
import CountDown from "../CountDown";

const InputField = ({
  seconds,
  inputValue,
  countCorrect,
  countIncorrect,
  onStart,
  setSeconds,
  onClickReboot,
  handleInputChange,
  blink,
}) => {
  return (
    <div className="Shadow-input-value">
      <div className="Input-value">
        <input
          type="text"
          value={inputValue}
          disabled={seconds === 0 ? true : false}
          onChange={handleInputChange}
        ></input>
        <div className={seconds === 0 ? "Red-timer" : "Timer"}>
          <CountDown
            seconds={seconds}
            onStart={onStart}
            setSeconds={setSeconds}
          />
        </div>

        <div className={blink ? "Red-refresh" : "Refresh"}>
          {" "}
          <AutorenewIcon
            fontSize="large"
            color="warning"
            variant="outlined"
            onClick={onClickReboot}
          />
        </div>
        <div>
          <Checkbox color="success" size="large" checked={true} />
          {countCorrect}
        </div>
        <div>
          <Checkbox color="error" size="large" checked={true} />
          {countIncorrect}
        </div>
      </div>
    </div>
  );
};
export default InputField;

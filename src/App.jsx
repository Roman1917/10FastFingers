import "./App.css";
import React, { useState, useEffect, useMemo } from "react";
import initialArr from "./Words";
import InputField from "./components/InputField";
import ResultScreenshot from "./components/ResultScreenshot";
import InputWordsField from "./components/InputWordsField";
import Header from "./components/Header";

function App() {
  const constSec = 60;
  const [inputValue, setInputValue] = useState("");
  const [value, setValue] = useState("");
  const [onStart, setOnStart] = useState(false);
  const [seconds, setSeconds] = useState(constSec);
  const [newArr, setNewArr] = useState([...initialArr]);
  const [countCorrect, setCountCorrect] = useState(0);
  const [countIncorrect, setCountIncorrect] = useState(0);
  const [red, setRed] = useState(false);
  const [listOfCorrect, setListOfCorrect] = useState([]);
  const [listOfWrong, setListOfWrong] = useState([]);
  const [blink, setBlink] = useState(false);
  const updatedArr = useMemo(() => [...newArr], [newArr]);

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    if (newValue !== newArr[0]?.substring(0, newValue.length)) {
      setRed(true);
    } else setRed(false);

    if (newValue.includes(" ") && newValue !== newArr[0]) {
      setCountIncorrect(countIncorrect + 1);
      setListOfWrong([...listOfWrong, updatedArr[0]]);
      updatedArr.shift();
      setNewArr(updatedArr);
      setValue("");
      setRed(false);
    }

    if (newValue.length > 0 && newValue !== " ") setOnStart(true);

    if (newValue.includes(" ")) {
      setValue(newValue);
      setInputValue("");
    } else {
      setInputValue(newValue);
    }
  };

  const onClickReboot = () => {
    setInputValue("");
    setOnStart(false);
    setNewArr([...initialArr]);
    setSeconds(constSec);
    setCountCorrect(0);
    setCountIncorrect(0);
    setRed(false);
    setListOfCorrect([]);
    setListOfWrong([]);
    setBlink(false);
  };
  useEffect(() => {
    if (value.toLowerCase() === newArr[0]) {
      setListOfCorrect([...listOfCorrect, updatedArr[0]]);
      updatedArr.shift();
      setNewArr(updatedArr);
      setCountCorrect(countCorrect + 1);
      setValue("");
    }
  }, [value, newArr, listOfCorrect, updatedArr, countCorrect]);
  useEffect(() => {
    let interval;

    if (seconds === 0) {
      interval = setInterval(() => {
        setBlink((prevBlink) => !prevBlink);
      }, 800);
    }

    return () => clearInterval(interval);
  }, [seconds, blink]);
  return (
    <>
      <div className="App">
        <Header />

        <InputWordsField newArr={newArr} red={red} />
        <InputField
          seconds={seconds}
          inputValue={inputValue}
          countCorrect={countCorrect}
          countIncorrect={countIncorrect}
          onStart={onStart}
          setSeconds={setSeconds}
          onClickReboot={onClickReboot}
          handleInputChange={handleInputChange}
          blink={blink}
        />

        {seconds === 0 ? (
          <ResultScreenshot
            listOfCorrect={listOfCorrect}
            listOfWrong={listOfWrong}
            countCorrect={countCorrect}
            countIncorrect={countIncorrect}
          />
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

export default App;

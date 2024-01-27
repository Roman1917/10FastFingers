import { useState } from "react";

const ResultScreenshot = ({
  listOfCorrect,
  listOfWrong,
  countCorrect,
  countIncorrect,
}) => {
  const [status, setStatus] = useState(false);
  const accuracy = (
    ((listOfCorrect.join("").length - countCorrect) /
      (listOfCorrect.join("").length -
        countCorrect +
        listOfWrong.join("").length -
        countIncorrect)) *
    100
  ).toFixed(2);
  const onClickShare = () => {
    setStatus(!status);
  };
  return (
    <>
      <div className="Result">
        <div>
          <h2>Result Screenshot </h2>
        </div>
        <div className="Wpm">
          <h1>{countCorrect}WPM</h1>
          (words per minute)
        </div>
        <div className="Keystrokes">
          <div> Keystrokes</div>
          <div>
            (
            <span className="Green">
              {listOfCorrect.join("").length - countCorrect}
            </span>
            |
            <span className="Red">
              {" "}
              {listOfWrong.join("").length - countIncorrect}
            </span>
            ){" "}
            {listOfCorrect.join("")?.length -
              countCorrect +
              listOfWrong.join("").length -
              countIncorrect}
          </div>
        </div>
        <div className="Accuracy">
          Accuracy <b>{accuracy === "NaN" ? 0 : accuracy}</b>
        </div>
        <div className="Correct-words">
          Correct words<span className="Green">{countCorrect}</span>{" "}
        </div>
        <div className="Wrong-words">
          Wrong words <span className="Red">{countIncorrect}</span>
        </div>
        <button onClick={onClickShare}>Share on Facebook</button>
        <div>
          {" "}
          {status === true ? (
            <>
              <b>Not today bro, you are so bad!</b>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className="Creator">#roma-belfort</div>
    </>
  );
};
export default ResultScreenshot;

const InputWordsField = ({ newArr, red }) => {
  return (
    <div className="Field">
      <div className="Inside-field">
        {[...newArr].map((word, index) => (
          <span
            key={index}
            className={
              index === 0 && red === true
                ? "Bc-red"
                : "" || index === 0
                ? "First-word"
                : ""
            }
          >
            {word}
          </span>
        ))}
      </div>
    </div>
  );
};
export default InputWordsField;

import { useState, useEffect, useCallback, useRef } from "react";
import "./App.css";

/**
 * The main App component.
 *
 * This component renders a div with two sections, one for the password and one
 * for the settings.
 *
 * The password section displays a read-only input field with the generated
 * password. It also has a copy button that copies the password to the clipboard.
 *
 * The settings section has a range input for adjusting the length of the
 * password, a checkbox for including numbers in the password, a checkbox for
 * including symbols in the password, and a checkbox for including lower case
 * letters in the password.
 *
 * The component memoizes the GeneratePassword function to prevent unnecessary
 * re-renders.
 *
 * The component calls the GeneratePassword function on mount and whenever any of
 * the state variables change.
 */
function App() {
  const [InputRangeValue, setInputRangeValue] = useState(8);
  const [password, setPassword] = useState("");
  const copyButton = useRef(null);

  const [AllowNumbers, setAllowNumbers] = useState(false);
  const [AllowSymbols, setAllowSymbols] = useState(false);
  const [IncludeLowerCase, setAllowLowerCase] = useState(false);
  const handleRangeChange = (event) => {
    setInputRangeValue(event.target.value);
  };

  const handleCopy = () => {
    navigator.clipboard
      .writeText(password)
      .then(() => {
        copyButton.current.textContent = "Copied!";
        setTimeout(() => {
          copyButton.current.textContent = "Copy";
        }, 400);
      })
      .catch((err) => {
        console.error("Error copying to clipboard:", err);
      });
  };

  const GeneratePassword = useCallback(
    (InputRangeValue) => {
      //memoized function call , to prevent unnecessary re-renders.
      let length = InputRangeValue;
      let password = "";
      let char = "";
      char += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      if (AllowNumbers) char += "0123456789";
      if (AllowSymbols) char += "!@#$%^&*()_+";
      if (IncludeLowerCase) char += "abcdefghijklmnopqrstuvwxyz";

      for (var i = 0; i < length; i++) {
        password += char.charAt(Math.floor(Math.random() * char.length));
      }
      setPassword(password);
    },
    [AllowNumbers, AllowSymbols, IncludeLowerCase]
  );

  useEffect(() => {
    //call when any of the state variables change
    GeneratePassword(InputRangeValue);
  }, [
    InputRangeValue,
    AllowNumbers,
    AllowSymbols,
    IncludeLowerCase,
    GeneratePassword,
  ]);

  return (
    <div className="container-fluid">
      <div style={{ backgroundColor: "#212529", height: "50vh" }}></div>
      <div style={{ backgroundColor: "#ffd400", height: "50vh" }}></div>

      <div className="divbox">
        <div style={{ color: "white", fontSize: "20px", textAlign: "center" }}>
          Password Generator
          <div className="divider" />
        </div>
        <div className="input-container">
          <input
            type="text"
            className="form-control input-field"
            placeholder="Enter Password"
            value={password}
            readOnly
          />
          <button
            className="btn btn-primary btn-custom"
            id="copy"
            onClick={handleCopy}
            ref={copyButton}
          >
            Copy
          </button>
        </div>
        <div className="range-container">
          <input
            type="range"
            className="form-range"
            id="range"
            min={8}
            max={22}
            value={InputRangeValue} //**value of the range */
            onChange={handleRangeChange} //** Update the state when the range is changed **
          />
          <p className="range-value">{InputRangeValue}</p>
        </div>
        <div className="password-settings">
          <label>
            <input
              type="checkbox"
              className="form-check-input"
              id="numbers"
              checked={AllowNumbers}
              onChange={(e) => setAllowNumbers(e.target.checked)}
            />
            Numbers
          </label>
          <label>
            <input
              type="checkbox"
              className="form-check-input"
              id="symbols"
              checked={AllowSymbols}
              onChange={(e) => setAllowSymbols(e.target.checked)}
            />
            Symbols
          </label>

          <label>
            <input
              type="checkbox"
              className="form-check-input"
              id="IncludeLowerCase"
              checked={IncludeLowerCase}
              onChange={(e) => setAllowLowerCase(e.target.checked)}
            />
            Include LowerCase
          </label>
        </div>
      </div>
    </div>
  );
}
export default App;

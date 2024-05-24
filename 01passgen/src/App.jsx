import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [length, setLenght] = useState(8);
  const [isNumber, setIsNumber] = useState(false);
  const [isChar, setIsChar] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenetor = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghiklmnopqrstuvwxyz";
    if (isNumber) str += "1234567890";
    if (isChar) str += "!@#$%^&*()~<>?";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, isNumber, isChar, setPassword]);

  useEffect(() => {
    passwordGenetor();
  }, [length, isNumber, isChar, passwordGenetor]);

  const inputRef = useRef(null);

  // const copyPassToClipboard = () => {
  //   window.navigator.clipboard.writeText(password);
  // };

  const copyPassToClipboard = useCallback(() => {
    inputRef.current?.select();
    inputRef.current?.setSelectionRange(0, 3);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700">
        <h1 className="text-center text-white my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            className="outline-none w-full py-1 px-3"
            value={password}
            readOnly
            placeholder="password"
            ref={inputRef}
          />
          <button
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
            onClick={copyPassToClipboard}
          >
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2 pb-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              max={20}
              min={6}
              value={length}
              className=" cursor-pointer"
              onChange={(e) => setLenght(e.target.value)}
            />
            <label>Lenght: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={isNumber}
              id="numberCheck"
              onChange={() => setIsNumber((prev) => !prev)}
            />
            <label htmlFor="numberCheck">Number</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={isChar}
              id="charCheck"
              onChange={() => setIsChar((prev) => !prev)}
            />
            <label htmlFor="charCheck">Special Character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

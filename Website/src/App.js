import Descriptor from "./Descriptor";
import InputForm from "./Input_form";
import React, { useState } from "react";
import "./index.css";

function App() {
  const [fetching, setFetching] = useState(false);
  const [answer, setAnswer] = useState(100);

  return (
    <div className="mt-3">
      <div>
        <h1 className="text-5xl text-center">Heart Deasease Prediction </h1>
      </div>
      <div className="flex flex-r h-[100%] mt-8 justify-around">
        <InputForm
          fetching={fetching}
          setFetching={setFetching}
          answer={answer}
          setAnswer={setAnswer}
        />
        <div className="">
          <Descriptor fetching={fetching} answer={answer} />
        </div>
      </div>
    </div>
  );
}

export default App;

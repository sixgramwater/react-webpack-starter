import './style.css';
import './style.scss';
import './styles/index.scss';

import React, { useState } from "react";
import { render } from "react-dom";

import App from './app';
// function App() {
//   const [state, setState] = useState("CLICK ME");

//   return <button onClick={() => setState("CLICKED")}>{state}</button>;
// }

render(<App lang="typescript" username="Ryuk" />, document.getElementById("root"));

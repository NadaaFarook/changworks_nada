import { GlobalHotKeys } from "react-hotkeys";
import React from "react";
import "./App.css";
import confetti from "canvas-confetti";
const keyMap = {
  chang: "c h a n g w o r k s",
};

const showConfetti = () => {
  confetti({
    particleCount: 700,
    angle: 60,
    spread: 155,
    origin: { x: 0 },
  });
  confetti({
    particleCount: 700,
    angle: 120,
    spread: 155,
    origin: { x: 1 },
  });
};

const handlers = {
  chang() {
    showConfetti();
  },
};

const App = () => {
  return (
    <div className="App">
      <GlobalHotKeys
        className="hotkeyarea"
        keyMap={keyMap}
        handlers={handlers}
        allowChanges={true}
      >
        <div className="changworks">Changworks</div>
        <p>Click me and type changworks(all small) to see the magicπππ</p>
      </GlobalHotKeys>
    </div>
  );
};

export default App;

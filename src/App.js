import { HotKeys } from "react-hotkeys";
import React from "react";
import "./App.css";
import confetti from "canvas-confetti";
const keyMap = {
  chang: "c h a n g w o r k s",
};

const frame = () => {
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
    frame();
  },
};

const App = () => {
  return (
    <div className="App">
      <HotKeys
        className="hotkeyarea"
        keyMap={keyMap}
        handlers={handlers}
        allowChanges={true}
      >
        <div className="changworks">Changworks</div>
        <p>Type changworks(all small) to see the magic🎉🎉🎉</p>
      </HotKeys>
    </div>
  );
};

export default App;

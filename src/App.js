import React, { useState } from "react";
import useTimeout from "utils/useTimeout";
import useInterval from "utils/useInterval";
import useToggle from "utils/useToggle";
import Icon from "components/Icon";

function App() {
  const [started, toggleState] = useToggle(false);
  const [startBountyRuneHunting, setStartRuneHunting] = useState(false);
  const [showBountyWarning, setShowBountyWarning] = useState(false);
  const twentySecondBuffer = 20000;
  const spawnBountyRuneTime = 5 * 60000 - twentySecondBuffer;
  const bountyWarningTimeout = 5000;
  useTimeout(
    () => {
      setShowBountyWarning(false);
    },
    showBountyWarning ? bountyWarningTimeout : null
  );
  useInterval(
    () => {
      setShowBountyWarning(true);
    },
    startBountyRuneHunting ? spawnBountyRuneTime : null
  );
  const startGame = () => {
    setStartRuneHunting(true);
    toggleState();
  };
  const stopGame = () => {
    setShowBountyWarning(false);
    setStartRuneHunting(false);
    toggleState();
  };
  return (
    <div className="App">
      <div className="content">
        {showBountyWarning && (
          <span className="warning">20 SECS FOR BOUNTY!</span>
        )}
        {started ? (
          <div
            className="icon-button stop-icon"
            onClick={stopGame}
            title="stop game"
          >
            <Icon className="" type="stop" width="2rem" height="2rem" />
          </div>
        ) : (
          <button onClick={startGame} title="start game">
            START GAME
          </button>
        )}
      </div>
      <div className="draggable">
        <Icon type="move" width="2rem" height="2rem" />
      </div>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import DrumPads from "./Drumpads";

function App() {
  const [state, setState] = useState({
    isOn: true,
    vol: 100,
    display: "CLAP"
  });

  const powerOn = () => {
    setState({ ...state, isOn: !state.isOn, display: "" });
  };

  const changeVolume = e => {
    setState({ ...state, vol: e.target.value });
  };

  const changeDisplay = display => {
    if (!state.isOn) return;

    setState({ ...state, display: display });
  };

  let volIcon;
  if (state.vol >= 50) {
    volIcon = (
      <i
        className="fas fa-volume-up fa-2x"
        style={{ color: "#3C93FF", textShadow: "0px 0px 6px #3C93FF" }}
      ></i>
    );
  } else if (state.vol >= 1 && state.vol < 50) {
    volIcon = (
      <i
        className="fas fa-volume-down fa-2x"
        style={{ color: "#F5A321", textShadow: "0px 0px 6px #F5A321" }}
      ></i>
    );
  } else {
    volIcon = (
      <i
        className="fas fa-volume-mute fa-2x"
        style={{ color: "#E31C1C", textShadow: "0px 0px 6px #E31C1C" }}
      ></i>
    );
  }

  return (
    <div className="drum-wrapper">
      {/* Title */}
      <div id="title" className="flex">
        <h1>Drum Machine</h1>
      </div>

      {/* Handle state -> On/Off */}
      <div id="on" className="flex">
        <input
          type="checkbox"
          name="switchON"
          onChange={powerOn}
          checked={state.isOn ? "checked" : ""}
        />
        <label htmlFor="switchON" className="flex">
          <i className="fas fa-power-off"></i>
        </label>
      </div>

      {/* Handle each pad */}
      <DrumPads
        updateDisplay={changeDisplay}
        isOn={state.isOn}
        vol={state.vol}
      />

      {/* Change the volume of the sound */}
      <div id="volumen">
        {volIcon}
        {state.isOn ? (
          <input
            type="range"
            className="slider"
            min="0"
            max="100"
            value={state.vol}
            onChange={changeVolume}
          />
        ) : (
          <input
            type="range"
            className="slider"
            min="0"
            max="100"
            value={state.vol}
            onChange={changeVolume}
            disabled
          />
        )}
      </div>

      {/* Display state of the App */}
      <Display
        vol={state.vol}
        display={state.display}
        power={state.isOn ? "ON" : "OFF"}
      />
    </div>
  );
}

const Display = props => {
  return (
    <div id="display" style={{ opacity: props.power === "OFF" ? 0.7 : 1 }}>
      <div className="clearfix">
        <p style={{ float: "left" }}>Vol: {props.vol}</p>
        <p style={{ float: "right" }}>Power: {props.power}</p>
      </div>
      <h2>{props.display}</h2>
    </div>
  );
};

export default App;

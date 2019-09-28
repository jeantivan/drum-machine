import React from 'react'
import Pad from './Pad'

const bankOne = [{
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  }, {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  }, {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  }, {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  }, {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  }, {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  }, {
    keyCode: 90,
    keyTrigger: 'Z',
    id: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  }, {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  }, {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  },
];

class DrumPads extends React.Component
{
  constructor(props){
    super(props)
    this.state = {
      banks: bankOne,
    }
  }
  render() {
    let pads;
    if(this.props.isOn) {
      pads = this.state.banks.map((item, i, bank) => {
        return(
          <Pad 
            updateDisplay={this.props.updateDisplay} 
            soundId={bank[i].id} 
            key={bank[i].id}
            url={bank[i].url} 
            keyTrigger={bank[i].keyTrigger}
            keyCode={bank[i].keyCode} 
            isOn={this.props.isOn}
            vol={this.props.vol} />
        );
      });
    } else {
      pads = this.state.banks.map((item, i, bank) => {
        return(
          <Pad 
            soundId={bank[i].id} 
            url="#" 
            keyTrigger={bank[i].keyTrigger} 
            isOn={this.props.isOn} />
        );
      });
    }
    
    return (
      <div id="drum-pads">
        {pads}
      </div>
    );
  }
}

export default DrumPads; 
import  React from 'react';

class Pad extends React.Component 
{
  constructor(props){
    super(props);
    this.state = {
      stylePad: {
        color: "#FFF",
      }
    }

    this.playSound = this.playSound.bind(this);
    this.keyPressed = this.keyPressed.bind(this);
    this.changePad = this.changePad.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.keyPressed);
  }

  componentWillUnmount(){
    document.removeEventListener('keydown', this.keyPressed);
  }

  playSound(e){
    if(this.props.isOn){
      const sound = document.getElementById(this.props.keyTrigger);
      sound.volume = this.props.vol/100;
      sound.play();
      this.changePad();
      setTimeout(() => this.changePad(), 300)
      this.props.updateDisplay(this.props.soundId.replace(/-/g, " "));
    } 
  }

  changePad(){
    if(this.state.stylePad.color === "#FFF")
      this.setState({
        stylePad: { 
          color: "#3C93FF",
          boxShadow: "inset 0px 0px 6px #8B8B8B"
        } 
      });
    else
      this.setState({
        stylePad: { 
          color: "#FFF",
        } 
      });
  }

  keyPressed(e){
    if(e.keyCode === this.props.keyCode){
      this.playSound();
      console.log(":)")
    }
  }

  render(){
    return(
      <button 
        className={`drum-pad pad-${this.props.keyTrigger.toLowerCase()} flex`} 
        id={this.props.soundId} 
        onClick={this.playSound}
        style={this.state.stylePad}>

        {this.props.keyTrigger} 

        <audio id={this.props.keyTrigger} src={this.props.url} className="clip"></audio>

      </button>
    );
  }
}

export default Pad;
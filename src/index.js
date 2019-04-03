import React from 'react';
import ReactDOM from 'react-dom';


function Button(props) {
  return (
    <button onClick={props.onClick}>{props.name}</button>
  )
};

function Display(props) {
  return (
    <div>
      {props.children}
    </div>
  )
};

class GoldenAcornApp extends React.Component {
  constructor() {
    super();
    this.state = { number: 0 };
    this.buyOne = this.buyOne.bind(this);
    this.eatOne = this.eatOne.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  buyOne() {
    this.setState(previousState => ({
      number: previousState.number + 1
    }), () => { console.log(this.state) });
  }

  eatOne() {
    this.setState({
      number: Math.max(this.state.number - 1, 0)
    }, () => { console.log(this.state) });
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress(event) {
    if (event.keyCode == 38) {
      this.buyOne();
    } else if (event.keyCode === 40) {
      this.eatOne();
    }
  };

  render() {
    return (
      <div className="content"><br/>
        <Button onClick={this.buyOne} name="Buy one" ></Button><br/><br/>
        <Display >{this.state.number}</Display><br/>
        <Button onClick={this.eatOne} name="Eat one"></Button><br/>
      </div>
    )
  }
};

ReactDOM.render(
  <GoldenAcornApp />,
  document.getElementById('root')
);

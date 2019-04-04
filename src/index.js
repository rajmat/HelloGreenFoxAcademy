//import { render } from 'react-dom';
//import PropTypes from 'prop-types';
//import { createStore } from 'redux';
//import myReducer from './reducers/reducer';
//import {Button} from './components/button';
//import {Display} from './components/display';
import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import { Provider } from 'react-redux';
import AppContainer from './containers/AppContainer';

ReactDOM.render(
<Provider store={store}>
  <AppContainer />
  </Provider>,
document.getElementById('root')
)

/* class GoldenAcornApp extends React.Component {
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
        <Button onClick={this.buyOne} name="Buy one"></Button><br/><br/>
        <Display >{this.state.number}</Display><br/>
        <Button onClick={this.eatOne} name="Eat one"></Button><br/>
      </div>
    )
  }
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

Display.propTypes = {
  children: PropTypes.node.isRequired
}

ReactDOM.render(
  <GoldenAcornApp />,
  document.getElementById('root')
);
 */
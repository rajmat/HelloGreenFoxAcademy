import { connect } from 'react-redux';
import App from '../App';

const mapStateToProps = (state) => {
  return {
    string: 'Heyyyyy ',
    number: state.number
  };
};

const AppContainer = connect(
  mapStateToProps,
)(App);

export default AppContainer;
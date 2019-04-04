import { connect } from 'react-redux';
import { buyAcorn } from '../action_creators/actionCreators';
import { eatAcorn } from '../action_creators/actionCreators';
import Display from '../components/display';


//if we create a container component for App, do not need this anymore, otherwise the number goes directly to the display
/* const mapStateToProps = (state) => {
  return {
    value: state.number
  };
}; */

//keypresses here 



const DisplayAcorn = connect(
  //mapStateToProps,
  //mapDispatchToProps,
)(Display);

export default DisplayAcorn;
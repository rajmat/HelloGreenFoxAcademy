import { connect } from 'react-redux';
import { eatAcorn } from '../action_creators/actionCreators';
import Button from '../components/button';

const mapStateToProps = (state) => {
  return {
    name: 'Eat one',
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => {
      dispatch(eatAcorn(1));
    },
  };
};

const EatAcorn = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Button);

export default EatAcorn;
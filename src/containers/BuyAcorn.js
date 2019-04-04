import { connect } from 'react-redux';
import { buyAcorn } from '../action_creators/actionCreators';
import Button from '../components/button';

const mapStateToProps = (state) => {
  return {
    name: 'Buy one',
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => {
      dispatch(buyAcorn(1));
    },
  };
};

const BuyAcorn = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Button);

export default BuyAcorn;
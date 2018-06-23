import { connect } from 'react-redux';

import Counter from '../components/example/Counter';
import { increment, decrement, incrementAsync } from '../actions';

const mapStateToProps = state => ({
  value: state.counter
});

const mapDispatchToProps = dispatch => ({
  onIncrement: () => dispatch(increment()),
  onDecrement: () => dispatch(decrement()),
  onIncrementAsync: () => dispatch(incrementAsync())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

import { connect } from 'react-redux';
import { getTwitterData } from '../../actions';
import Analytics from './Analytics';

const mapStateToProps = state => {
  return {
    cred: state.user,
    isLoaded: state.isLoaded
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getTwitterData: () => dispatch(getTwitterData())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Analytics);

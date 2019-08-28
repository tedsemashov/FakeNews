import { connect } from 'react-redux';
import { setSelectedInfluencer } from '../../actions';
import TopInfluencers from './TopInfluencers';

const mapStateToProps = state => {
  return {
    topInfluencers: state.topInfluencers,
    selectedInfluencer: state.selectedInfluencer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setSelectedInfluencer: value => dispatch(setSelectedInfluencer(value))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopInfluencers);

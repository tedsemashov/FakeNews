import { connect } from 'react-redux';
import { setSelectedInfluencer } from '../../actions';
import TopTrolls from './TopTrolls';

const mapStateToProps = state => {
  return {
    fakeData: state.fakeData,
    topInfluencers: state.topInfluencers
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopTrolls);

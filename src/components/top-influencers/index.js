import { connect } from 'react-redux';
import TopInfluencers from './TopInfluencers';

const mapStateToProps = state => {
  return {
    topInfluencers: state.topInfluencers
  };
};

export default connect(mapStateToProps)(TopInfluencers);

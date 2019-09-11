import { connect } from 'react-redux';

import TopTrolls from './TopTrolls';

const mapStateToProps = state => {
  return {
    fakeData: state.fakeData,
    topInfluencers: state.topInfluencers
  };
};

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps,mapDispatchToProps)(TopTrolls);

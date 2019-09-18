import { connect } from 'react-redux';

import TopTrolls from './TopTrolls';

const mapStateToProps = state => {
  return {
    topTrolls: state.top_fn_usr
  };
};

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps,mapDispatchToProps)(TopTrolls);

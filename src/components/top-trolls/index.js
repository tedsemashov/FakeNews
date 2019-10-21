import { connect } from 'react-redux';

import TopTrolls from './TopTrolls';

const mapStateToProps = state => {
  return {
    topTrolls: state.top_fn_usr
  };
};

export default connect(mapStateToProps)(TopTrolls);

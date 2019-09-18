import { connect } from 'react-redux';

import TopMentionedTrolls from './TopMentionedTrolls';

const mapStateToProps = state => {
  return {
    top_rt_fn_usr: state.top_rt_fn_usr
  };
};

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps,mapDispatchToProps)(TopMentionedTrolls);

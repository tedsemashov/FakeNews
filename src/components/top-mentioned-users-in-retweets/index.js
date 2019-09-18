import { connect } from 'react-redux';

import TopMentionedUsersInRetweets from './TopMentionedUsersInRetweets';

const mapStateToProps = state => {
  return {
    top_rt_m_usr: state.top_rt_m_usr
  };
};

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(TopMentionedUsersInRetweets);

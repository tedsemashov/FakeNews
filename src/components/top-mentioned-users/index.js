import { connect } from 'react-redux';

import TopMentionedUsers from './TopMentionedUsers';

const mapStateToProps = state => {
  return {
    topMentionedUsers: state.topMentionedUsers
  };
};

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(TopMentionedUsers);

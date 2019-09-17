import { connect } from 'react-redux';
import { setSelectedMentionedUser } from '../../actions';
import TopMentionedUsers from './TopMentionedUsers';

const mapStateToProps = state => {
  return {
    topMentionedUsers: state.topMentionedUsers
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setSelectedMentionedUser: value => dispatch(setSelectedMentionedUser(value))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopMentionedUsers);

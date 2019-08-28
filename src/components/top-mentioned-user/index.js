import { connect } from 'react-redux';
import TopMentionedUser from './TopMentionedUser';

const mapStateToProps = state => {
  return {
    topInfluencers: state.topInfluencers
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopMentionedUser);

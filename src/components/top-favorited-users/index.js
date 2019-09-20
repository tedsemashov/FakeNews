import { connect } from 'react-redux';
import TopFavoritedUsers from './TopFavoritedUsers';

const mapStateToProps = state => {
  return {
    topFavoritedUsers: state.top_favorite_tw_users
  };
};

export default connect(mapStateToProps)(TopFavoritedUsers);

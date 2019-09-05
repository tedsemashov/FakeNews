import { connect } from "react-redux";

import { getExpertsData, setLoadingState } from '../../actions';

import Expert from './Expert';

const mapStateToProps = (state) => {
   return {
     topNewsList: state.top_news_list,
     topReTweets: state.top_rtweets,
     topReTweetedUsersTweets: state.top_rt_users_tw,
     topUsersTweets: state.top_users_tw,
     fakeNewsUsers: state.fn_users,
     isLoaded: state.isLoaded
   }
};

const mapDispatchToProps = dispatch => {
  return {
    getExpertsData: () => {
      dispatch(setLoadingState(false));
      dispatch(getExpertsData());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Expert);

import { connect } from "react-redux";

import { getExpertsData, setLoadingState, onFilterChange } from '../../actions';
import { convertToDates } from "./../subheader/Subheader";

import Expert from './Expert';

const mapStateToProps = (state) => {
   return {
     topNewsList: state.top_news,
     topReTweets: state.top_rtweets,
     topReTweetedUsersTweets: state.top_rt_users_tw,
     topUsersTweets: state.top_users_tw,
     fakeNewsUsers: state.fn_users,
     dates: state.timePeriod,
     keyword: state.keyword,
     isLoaded: state.isLoaded
   }
};

const mapDispatchToProps = dispatch => {
  return {
    getExpertsData: (period, keyword) => {
      const dates = convertToDates(period);

      dispatch(setLoadingState(false));
      dispatch(getExpertsData({ dates, keyword }));
    },

    onFilterChange: (period, keyword) => {
      const dates = convertToDates(period);

      dispatch(setLoadingState(false));
      dispatch(onFilterChange(period, keyword));
      dispatch(getExpertsData({ dates, keyword }));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Expert);

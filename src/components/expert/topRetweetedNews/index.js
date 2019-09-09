import { connect } from "react-redux";

import {apiToggleTopReTweetedNewsFakeStatus, processTopReTweetedNews} from "../../../actions/top-re-tweeted-news";

import TopRetweetedNews from './TopRetweetedNews';

const mapStateToProps = (state) => {
   return {
     topReTweetedNews: state.top_rtweets,
     topReTweetedNewsProcessing: state.topReTweetedNewsProcessing,
   }
};

const mapDispatchToProps = dispatch => {
  return {
    toggleFakeStatus: (news) => {
      dispatch(processTopReTweetedNews(news.id_txt));
      dispatch(apiToggleTopReTweetedNewsFakeStatus(news));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TopRetweetedNews);

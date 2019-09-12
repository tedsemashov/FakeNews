import { connect } from "react-redux";

import {apiToggleTopReTweetedNewsFakeStatus, processTopReTweetedNews } from "../../../actions/top-re-tweeted-news";
import { needTrainModel } from "../../../actions/expert";

import TopRetweetedNews from './TopRetweetedNews';

const mapStateToProps = (state) => {
   return {
     topReTweetedNews: state.top_rtweets,
     topReTweetedNewsProcessing: state.topReTweetedNewsProcessing,
     trainingProcessing: state.trainingProcessing
   }
};

const mapDispatchToProps = dispatch => {
  return {
    toggleFakeStatus: (news) => {
      dispatch(needTrainModel(true));
      dispatch(processTopReTweetedNews(news.id_txt));
      dispatch(apiToggleTopReTweetedNewsFakeStatus(news));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TopRetweetedNews);

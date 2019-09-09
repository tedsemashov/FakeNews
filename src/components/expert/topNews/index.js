import { connect } from "react-redux";

import {apiToggleTopNewsFakeStatus, processTopNews} from "../../../actions/top-news";

import TopNews from "./TopNews";

const mapStateToProps = (state) => {
  return {
    topNewsProcessing: state.topNewsProcessing,
    topNewsList: state.top_news,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleFakeStatus: (news) => {
      dispatch(processTopNews(news.id_txt));
      dispatch(apiToggleTopNewsFakeStatus(news));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TopNews);

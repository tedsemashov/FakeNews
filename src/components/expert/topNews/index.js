import { connect } from "react-redux";

import {apiUnmarkFakeTopNews, apiMarkFakeTopNews, processTopNews} from "../../../actions/top-news";

import TopNews from "./TopNews";

const mapStateToProps = (state) => {
  return {
    topNewsProcessing: state.topNewsProcessing,
    topNewsList: state.top_news,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    markFake: (news) => {
      dispatch(processTopNews(news.id_txt));
      dispatch(apiMarkFakeTopNews(news));
    },
    unmarkFake: (news) => {
      dispatch(processTopNews(news.id_txt));
      dispatch(apiUnmarkFakeTopNews(news));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TopNews);

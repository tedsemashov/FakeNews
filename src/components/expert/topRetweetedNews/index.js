import { connect } from "react-redux";

import TopRetweetedNews from './TopRetweetedNews';

const mapStateToProps = (state) => {
   return {
     topReTweetedNews: state.top_rtweets,
     isLoaded: state.isLoaded
   }
};

const mapDispatchToProps = dispatch => {
  return {
    toggleNewsFakeStatus: () => {
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TopRetweetedNews);

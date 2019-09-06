import { connect } from "react-redux";

import TopNews from './TopNews';

const mapStateToProps = (state) => {
   return {
     topNewsList: state.top_news,
     isLoaded: state.isLoaded
   }
};

const mapDispatchToProps = dispatch => {
  return {
    toggleNewsFakeStatus: () => {
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TopNews);

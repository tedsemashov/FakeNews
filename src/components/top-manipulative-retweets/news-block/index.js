import { connect } from "react-redux";

import NewsBlock from './NewsBlock';

const mapStateToProps = (state) => {
  return {
    topManipulativeRetweets: state.top_fn_rtweets
  }
};

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(NewsBlock);

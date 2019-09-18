import { connect } from "react-redux";

import NewsBlock from './NewsBlock';

const mapStateToProps = (state) => {
  return {
    topManipulativeNews: state.top_fnews_tw
  }
};

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(NewsBlock);

import { connect } from "react-redux";
import RetweetedNews from './RetweetedNews';

const mapStateToProps = (state) => {
   return {
      topRetweetedNews: state.topRetweetedNews
   }
};

const mapDispatchToProps = (dispatch) => {
   return {
   }
};

export default connect(mapStateToProps, mapDispatchToProps)(RetweetedNews)
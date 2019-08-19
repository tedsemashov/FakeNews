import { connect } from "react-redux";
import TopNews from './TopNews';

const mapStateToProps = (state) => {
   return {
      topNews: state.topNews
   }
};

const mapDispatchToProps = (dispatch) => {
   return {
   }
};

export default connect(mapStateToProps, mapDispatchToProps)(TopNews)
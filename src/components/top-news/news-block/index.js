import { connect } from "react-redux";
import NewsBlock from './NewsBlock';

const mapStateToProps = (state) => {
   return {
      topNews: state.topNews
   }
};

const mapDispatchToProps = (dispatch) => {
   return {
   }
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsBlock)
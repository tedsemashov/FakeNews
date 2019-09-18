import { connect } from "react-redux";
import TopManipulativeNews from './TopManipulativeNews';

const mapStateToProps = (state) => {
   return {
      topManipulativeNews: state.top_fnews_tw
   }
};

const mapDispatchToProps = (dispatch) => {
   return {
   }
};

export default connect(mapStateToProps, mapDispatchToProps)(TopManipulativeNews)

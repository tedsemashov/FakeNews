import { connect } from "react-redux";
import Hashtags from './Hashtags';

const mapStateToProps = (state) => {
   return {
      hashtags: state.hashtags
      // filteredNames: getFilteredNames(state)
   }
};

const mapDispatchToProps = (dispatch) => {
   return {
   }
};

export default connect(mapStateToProps, mapDispatchToProps)(Hashtags)
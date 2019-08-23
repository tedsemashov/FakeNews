import { connect } from "react-redux";
import Subheader from './Subheader';

const mapStateToProps = (state) => {
   return {
      timePeriod: state.timePeriod
      // filteredNames: getFilteredNames(state)
   }
};

const mapDispatchToProps = (dispatch) => {
   return {
   }
};

export default connect(mapStateToProps, mapDispatchToProps)(Subheader)
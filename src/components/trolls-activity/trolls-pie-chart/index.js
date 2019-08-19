import { connect } from "react-redux";
import TrollsPieChart from './TrollsPieChart';

const mapStateToProps = (state) => {
   return {
      // filteredNames: getFilteredNames(state)
   }
};

const mapDispatchToProps = (dispatch) => {
   return {
   }
};

export default connect(mapStateToProps, mapDispatchToProps)(TrollsPieChart)
import { connect } from "react-redux";
import TrollsNewsChart from './TrollsNewsChart';

const mapStateToProps = (state) => {
   return {
      // filteredNames: getFilteredNames(state)
   }
};

const mapDispatchToProps = (dispatch) => {
   return {
   }
};

export default connect(mapStateToProps, mapDispatchToProps)(TrollsNewsChart)
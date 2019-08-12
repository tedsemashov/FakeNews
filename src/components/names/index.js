import { connect } from "react-redux";
import {getTwitterData, setSelectedName} from "../../actions";
import {getFilteredNames} from '../../selectors';
import Names from './Names';

const mapStateToProps = (state) => {
   return {
      // filteredNames: getFilteredNames(state)
   }
};

const mapDispatchToProps = (dispatch) => {
   return {
      getTwitterData: () => dispatch(getTwitterData()),
      // setSelectedName: (id) => dispatch(setSelectedName(id))
   }
};

export default connect(mapStateToProps, mapDispatchToProps)(Names)
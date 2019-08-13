import { connect } from "react-redux";
import {getTwitterData, setSelectedName} from "../../actions";
import {getFilteredNames} from '../../selectors';
import Analytics from './Analytics';

const mapStateToProps = (state) => {
   return {
      cred: state.user
      // filteredNames: getFilteredNames(state)
   }
};

const mapDispatchToProps = (dispatch) => {
   return {
      getTwitterData: () => dispatch(getTwitterData()),
      // setSelectedName: (id) => dispatch(setSelectedName(id))
   }
};

export default connect(mapStateToProps, mapDispatchToProps)(Analytics)
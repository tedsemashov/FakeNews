import { connect } from "react-redux";
import { getExpertsData } from '../../actions';
import Manage from './Manage';

const mapStateToProps = (state) => {
   return {
     expertsData: state.expertsData
   }
};

const mapDispatchToProps = dispatch => {
  return {
    getExpertsData: () => dispatch(getExpertsData())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Manage);

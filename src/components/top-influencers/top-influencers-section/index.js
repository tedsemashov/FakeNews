import { connect } from "react-redux";
import TopInfluencersSection from './TopInfluencersSection';
import {setSelectedInfluencer} from "../../../actions";

const mapStateToProps = (state) => {
   return {
   }
};

const mapDispatchToProps = (dispatch) => {
   return {
      setSelectedInfluencer: (value) => dispatch(setSelectedInfluencer(value))
   }
};

export default connect(mapStateToProps, mapDispatchToProps)(TopInfluencersSection)
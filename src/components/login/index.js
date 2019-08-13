import { connect } from "react-redux";
import Login from './Login';


const mapStateToProps = (state) => {
   return {
      user: state.user
   }
};

const mapDispatchToProps = (dispatch) => {
   return {
   }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login)
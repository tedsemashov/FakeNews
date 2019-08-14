import { connect } from "react-redux";
import Header from './Header';

const mapStateToProps = (state) => {
   return {
      user: state.user
   }
};

const mapDispatchToProps = (dispatch) => {
   return {
   }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header)
import { connect } from "react-redux";

import { setFlashMessage } from "../../actions";

import FlashMessage from './FlashMessage';

const mapStateToProps = (state) => {
   return {
     flashMessage: state.flashMessage,
   }
};

const mapDispatchToProps = dispatch => {
  return {
    removeFlashMessage: () => dispatch(setFlashMessage(""))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FlashMessage);

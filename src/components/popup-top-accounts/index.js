import { connect } from 'react-redux';
import Popup from './Popup';

const mapStateToProps = state => {
  return {
    topInfluencers: state.topInfluencers,
    selectedInfluencer: state.selectedInfluencer
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Popup);

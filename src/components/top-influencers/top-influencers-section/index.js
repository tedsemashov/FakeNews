import { connect } from 'react-redux';
import TopInfluencersSection from './TopInfluencersSection';
import { setSelectedInfluencer } from '../../../actions';

const mapDispatchToProps = dispatch => {
  return {
    setSelectedInfluencer: value => dispatch(setSelectedInfluencer(value))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(TopInfluencersSection);

import { connect } from "react-redux";
import { getExpertsData } from '../../actions';
import Manage from './Manage';

const mapStateToProps = (state) => {
   return {
     topNewsList:  state.topNewsList,
     topRtweets:  state.topRtweets,
     topRtUsersTw:  state.topRtUsersTw,
     topUsersTweets:  state.topUsersTweets,
     fakeNewsUsers:  state.fakeNewsUsers,
     isLoaded: state.isLoaded
   }
};

const mapDispatchToProps = dispatch => {
  return {
    getExpertsData: () => dispatch(getExpertsData())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Manage);

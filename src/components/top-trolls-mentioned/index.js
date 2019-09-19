import { connect } from "react-redux";

import TopTrollsMentioned from "./TopTrollsMentioned";

const mapStateToProps = (state) => {
  return {
    top_rt_fn_usr: state.top_rt_fn_usr
  };
};

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(TopTrollsMentioned);

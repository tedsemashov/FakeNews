import { connect } from "react-redux";
import _ from "lodash";

import Subheader from "./Subheader";

const mapStateToProps = (state) => _.pick(state, ["keyword", "timePeriod"]);
const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Subheader);

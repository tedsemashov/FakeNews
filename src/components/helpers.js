import React from "react";
import _ from "lodash";

import default_logo from "../images/icons/default-avatar.png";

export function avatar(avatar_url) {
  switch(true) {
    case !_.isNil(avatar_url):
      return <img className='avatar' src={avatar_url}/>;
    default:
      return <img className='avatar' src={default_logo}/>;
  }
}

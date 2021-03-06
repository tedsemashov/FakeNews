import React from "react";
import classNames from "classnames";

import DEFAULT_USER_AVATAR from "./../images/user-avatar.png";

export function userAvatar(user = {}, { className, ...props } = {}) {
  const { nickname } = user;
  // TBD: figure out what's avatar' key;
  const avatar = user.user_profile_image_url || DEFAULT_USER_AVATAR;

  return <img {...props} className={classNames("user-avatar", className)} src={avatar} alt={nickname || ""} title={nickname || ""} />;
}

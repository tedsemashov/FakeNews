import React from "react";

import DEFAULT_USER_AVATAR from "./../images/user-avatar.png";

export function userAvatar(user = {}) {
  const { nickname } = user;
  // TBD: figure out what's avatar' key;
  const avatar = user.user_profile_image_url || DEFAULT_USER_AVATAR;

  return <img className="user-avatar" src={avatar} alt={nickname || ""} title={nickname || ""} />;
}

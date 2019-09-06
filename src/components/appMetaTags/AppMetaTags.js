import React from 'react';
import MetaTags from 'react-meta-tags';
import _ from 'lodash';

function AppMetaTags ({title, description}) {
  const metaTitle = _.join(_.compact(['Fake News', title]), ' | ');

  return(
    <MetaTags>
      <title>{metaTitle}</title>
    </MetaTags>
  );
};

export default AppMetaTags;

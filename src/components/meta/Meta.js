import React from 'react';
import MetaTags from 'react-meta-tags';
import _ from 'lodash';

export function setDocumentTitle({title}) {
  const metaTitle = _.join(_.compact(['Fake News', title]), ' | ');

  return(
    <MetaTags>
      <title>{metaTitle}</title>
    </MetaTags>
  );
};

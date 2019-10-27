import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { Button } from '@material-ui/core';

import Collapsible from '../Collapsible';

const Map: React.FunctionComponent = () => {
  const [isCollapsed, toggleCollapse] = useState(false);

  const handleToggleCollapse = () => {
    toggleCollapse(!isCollapsed)
  }

  const DynamicComponentWithNoSSR = dynamic(() => import('../Mapbox'), {
    ssr: false
  });


  return (
    <>
      <DynamicComponentWithNoSSR />
      <Button variant="contained" color="primary" onClick={handleToggleCollapse}>
        Hello World
      </Button>
      <Collapsible title="title" isCollapsed={isCollapsed} />
    </>
  );
}


export default Map
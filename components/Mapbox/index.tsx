import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';

const Mapbox: React.FunctionComponent = () => {
  const [viewportOptions, setViewport] = useState({});

  return (
    <ReactMapGL
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxApiAccessToken="pk.eyJ1IjoicmFmYWVsbWVsb24iLCJhIjoiY2syOWNzNng2MDdqaDNjbWp2czZtcjl0ciJ9.8SuHDi6E9lRERaWVbULzDQ"
        onViewportChange={(viewport) => setViewport({viewport})}
        {...viewportOptions}
      />
  );
}


export default Mapbox
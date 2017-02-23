import React from 'react'
import SingleTab from './single_tab'

const Tabs = ({ routes }) => (
  <div>
    {
      routes.map(
        (route, index) => { return <SingleTab key={index}
                                              index={index}
                                              points={route.points}
                                              climbs={route.climbs}
                                              totalDistance={route.totalDistance}
                                              averageSlope={route.averageSlope} />})
    }
  </div>
)

export default Tabs

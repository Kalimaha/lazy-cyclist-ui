/* global google */
import React from 'react'

const tab = (props) => (
  <div className="row">
    <div className="col-lg-6">
      <div ref={"chart_" + props.index}>
        Your chart will appear here.
      </div>
    </div>
    <div className="col-lg-6 text-center">
      <div ref={"map_" + props.index} className="map">
        Your map will appear here.
      </div>
    </div>
  </div>
)

const encode_points = (points) => points.map(p => [p.x, p.y])

const encode_climb  = (climb) => {
  const distance  = climb.end.x - climb.start.x
  var plot_band = {}

  if (distance > 10 && climb.slope >= 1) {
    plot_band = {
      from: climb.start.x,
      to: climb.end.x,
      color: '#9B2335',
      borderColor: '#FFF',
      borderWidth: 1,
      label: {
        y: 30,
        text: `${climb.slope.toFixed(2)}%`,
        rotation: -90,
        style: {
          color: '#FFF'
        }
      }
    }
  }

  return plot_band
}

const encode_climbs = (climbs) => climbs.map(climb => encode_climb(climb))

const chart = (index, route) => {
  return {
    chart:        { type: 'areaspline', zoomType: 'xy' },
    credits:      { enabled: false },
    legend:       { enabled: false },
    title:        { text: `Route #${1 + index}`, x: -20 },
    subtitle:     { text: `Total Distance: ${route.totalDistance}m<br>Average Slope: ${route.averageSlope.toFixed(2)}%.`, x: -20 },
    yAxis:        { gridLineWidth: 0, title: { text: 'Elevation [m]' } },
    xAxis:        { plotBands: encode_climbs(route.climbs) },
    series:       [{ data: encode_points(route.points) }],
    plotOptions:  {
      series: { fillColor: '#009B77', color: '#000' },
      areaspline: { marker: { enabled: false, fillOpacity: 1, enableMouseTracking: false } }
    }
  }
}

const render_map = (props, refs) => {
  const map_element = refs[`map_${props.index}`]
  // const center = props.points[parseInt(props.points.length / 2)]

  new google.maps.Map(map_element, {
    zoom: 3,
    center: { lat: 0, lng: -180 },
    mapTypeId: 'terrain'
  });
}

const render_chart = (props, refs) => {
  const Highcharts = require('highcharts')
  const chart_element = refs[`chart_${props.index}`]
  const route = {
    points:         props.points,
    climbs:         props.climbs,
    totalDistance:  props.totalDistance,
    averageSlope:   props.averageSlope
  }

  Highcharts.chart(chart_element, chart(props.index, route))
}

class SingleTab extends React.Component {
  componentDidMount = () => {
    render_chart(this.props, this.refs)
    render_map(this.props, this.refs)
  }

  render() {
    return tab(this.props)
  }
}

export default SingleTab

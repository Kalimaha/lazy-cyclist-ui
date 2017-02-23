import React from 'react'

const tab = (props) => (
  <div>
    <div>
      <ul className="nav nav-tabs">
        <li className="active"><a data-toggle="tab" href="#chart">
          <i className="fa fa-area-chart"></i> Chart
        </a></li>
        <li><a data-toggle="tab" href="#map">
          <i className="fa fa-map-o"></i> Map
        </a></li>
      </ul>
      <div className="tab-content">
        <div id="chart" className="tab-pane fade in active">
          <div className="row">
            <div className="col-lg-12">
              <br />
              <div ref={"chart_" + props.index}>
                Your chart will appear here.
              </div>
            </div>
          </div>
        </div>
        <div id="map" className="tab-pane fade">
          <div className="row">
            <div className="col-lg-12">
              <br />
              <div ref={"map_" + props.index}>
                Your map will appear here.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr />
  </div>
)

const encode_points = (points) => points.map(p => [p.x, p.y])
const encode_climb = (climb) => {
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
    chart: {
    	type: 'areaspline',
      zoomType: 'xy'
    },
    credits: {
      enabled: false
    },
    legend: {
      enabled: false
    },
    title: {
      text: `Route #${1 + index}`,
      x: -20
    },
    subtitle: {
      text: `Total Distance: ${route.totalDistance}m<br>Average Slope: ${route.averageSlope.toFixed(2)}%.`,
      x: -20
    },
    yAxis: {
      gridLineWidth: 0,
      title: {
        text: 'Elevation [m]'
      }
    },
    xAxis: {
      plotBands: encode_climbs(route.climbs)
    },
    plotOptions: {
      series: {
        fillColor: '#009B77',
        color: '#000'
      },
      areaspline: {
        marker: {
          enabled: false,
          fillOpacity: 1,
          enableMouseTracking: false
        }
      }
    },
    series: [{
      data: encode_points(route.points)
    }]
  }
}

class SingleTab extends React.Component {
  componentDidMount() {
    const Highcharts = require('highcharts')
    const chart_element = this.refs[`chart_${this.props.index}`]
    const route = {
      points:         this.props.points,
      climbs:         this.props.climbs,
      totalDistance:  this.props.totalDistance,
      averageSlope:   this.props.averageSlope
    }

    Highcharts.chart(chart_element, chart(this.props.index, route))
  }

  render() {
    return tab(this.props)
  }
}

export default SingleTab

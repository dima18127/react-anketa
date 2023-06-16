import React from 'react'
import s from './metric.module.css'

function metric(props) {
    const{width} = props;
    console.log( width);
    // const {fillMetric} = props;
    return ( 
    <div className={s.metric}  >
        <div style={width} className="metricProgress"></div>
        <span className='metricPoint metricPoint1'></span>
        <span className='metricPoint metricPoint2'></span>
        <span className='metricPoint metricPoint3'></span>
    </div>
     );
}

export default metric;
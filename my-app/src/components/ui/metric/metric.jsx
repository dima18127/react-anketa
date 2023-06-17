import React from 'react'
import s from './metric.module.css'

function metric(props) {
    const{width, tab} = props;
    console.log( width);
    // const {fillMetric} = props;
    // const AddActive = (tab) => {

    // }
    const getWidth = (width)=>{
        console.log(width);
         if (width==1){
            return {width: "50%"}
        }
         if (width>=2){
            return {width: "100%"}
        }

    }
    return ( 
    <div className={s.metric}  >
        <div style={getWidth(width)} className="metricProgress"></div>
        <span className={width >= 0?s.active: null}></span>
        <span className={width >= 1?s.active: null}></span>
        <span className={width >= 2?s.active: null}></span>
    </div>
     );
}

export default metric;
import React from 'react';
import './Train.css';

export default function Train({arrival, color}) {
    return (
        <div className='outerDiv'>
            <div className='letter'>
                {arrival.STATION[0]}
            </div>
            <div className='station'>
                <p className='stationText'>{arrival.STATION} --{">"} {arrival.DESTINATION}</p>
                <div className='stationColor'>
                    <p className={`${color}Text`}>{color.charAt(0).toUpperCase() + color.slice(1)}</p>
                    <p className='delayText'>{arrival.DELAY === "T0S" ? "Delayed" : "On Time"}</p>
                </div>
            </div>
            <div className='wait'>
                <p className='text'>{arrival.WAITING_TIME}</p>
            </div>
        </div>
    );
}
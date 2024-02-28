import React from 'react';
import './Navbar.css'

export default function Navbar({loading, stationData, setCurrStation}) {
    return (
        <div className='navDiv'>
            {loading ? (<div>Loading...</div>) : stationData ? (
            <ul className='ul'>
                <li>
                    <button className = "navButton" onClick={() => setCurrStation("")}>
                        All Stations
                    </button>
                </li>
                {stationData.map(station => 
                    <li className='li'>
                        <button className = "navButton" onClick={() => setCurrStation(station)}>
                            {station}
                        </button>
                    </li>
                )}
            </ul>
            ) : (
                <div>Error fetching data</div>
            )}
        </div>
    );
}
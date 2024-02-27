import React from 'react';

export default function Navbar({loading, stationData, setCurrStation}) {
    return (
        <div>
            {loading ? (<div>Loading...</div>) : stationData ? (
            <ul className='text-center'>
                <li>
                    <button onClick={() => setCurrStation("")}>
                        All Stations
                    </button>
                </li>
                {stationData.map(station => 
                    <li className='px-14'>
                        <button onClick={() => setCurrStation(station)}>{station}</button>
                    </li>
                )}
            </ul>
            ) : (
                <div>Error fetching data</div>
            )}
        </div>
    );
}
import React, {useState, useEffect} from 'react';
import Train from './Train';
import './TrainList.css';

export default function TrainList({loading, arrivalsData, currStation, direction, color}) {

    const [arriving, setArriving] = useState(false)
    const [scheduled, setScheduled] = useState(false)

    const [north, setNorth] = useState(false)
    const [south, setSouth] = useState(false)
    const [east, setEast] = useState(false)
    const [west, setWest] = useState(false)

    function selected(e) {
        if (e.target.classList.contains("on")) {
            e.target.classList.remove("on")
        } else {
            e.target.classList.add("on")
        }
    }

    function NorthSouth() {
        return (
            <div className='filterButtonsDiv'>
                <button className = "filterButtons" onClick={(e) => {selected(e); setArriving(!arriving ? true : false)}}>Arriving</button>
                <button className = "filterButtons" onClick={(e) => {selected(e); setScheduled(!scheduled ? true : false)}}>Scheduled</button>
                <button className = "filterButtons" onClick={(e) => {selected(e); setNorth(!north ? true : false); }}>Northbound</button>
                <button className = "filterButtons" onClick={(e) => {selected(e); setSouth(!south ? true : false); }}>Southbound</button>
            </div>
        );
    }

    function EastWest() {
        return (
            <div className='filterButtonsDiv'>
                <button className = "filterButtons" onClick={(e) => {selected(e); setArriving(!arriving ? true : false)}}>Arriving</button>
                <button className = "filterButtons" onClick={(e) => {selected(e); setScheduled(!scheduled ? true : false)}}>Scheduled</button>
                <button className = "filterButtons" onClick={(e) => {selected(e); setEast(!east ? true : false); }}>Eastbound</button>
                <button className = "filterButtons" onClick={(e) => {selected(e); setWest(!west ? true : false); }}>Westbound</button>
            </div>
        );
    }
    
    return (
        <div className='centDiv'>
          {direction === "E" ? EastWest() : NorthSouth()}
          {loading ? (
            <div className='load'>Loading...</div>
          ) : arrivalsData ? (
            arrivalsData.filter((e) => {
              return ((!arriving || scheduled) || e.WAITING_TIME === "Arriving") &&
              ((!scheduled || arriving) || e.WAITING_TIME !== "Arriving" ) &&
              ((!east || west) || e.DIRECTION === "E") &&
              ((!west || east) || e.DIRECTION === "W") &&
              ((!north || south) || e.DIRECTION === "N") &&
              ((!south || north)|| e.DIRECTION === "S")
            }).filter((e) => {
              if (currStation !== "all") {
                return e.STATION.includes(currStation.toUpperCase())
              } else {
                return true;
              }
            }).map((arrival) => {
              return <Train arrival={arrival} color={color}/>
            })
          ) : (
            <div>Error fetching data</div>
          )}
        </div>
      )
}
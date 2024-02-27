import React, {useState, useEffect} from 'react';
import Navbar from '../components/Navbar';
import TrainList from '../components/TrainList';

export default function LinesPage({color}) {
    const URL = "https://midsem-bootcamp-api.onrender.com";

    const [loading, setLoading] = useState(true);
    const [stationData, setStationData] = useState(null);
    const [direction, setDirection] = useState("");
    const [arrivalsData, setArrivalsData] = useState(null);
    const [currStation, setCurrStation] = useState("all");

    async function fetchAPI() {
        setLoading(true);
        try {
            const responseStation = await fetch(`${URL}/stations/`);
            const stationData = await responseStation.json();
            setStationData(stationData);

            const responseArrival = await fetch(`${URL}/arrivals/`);
            const arrivalData = await responseArrival.json();
            setArrivalsData(arrivalData);
        } catch (error) {
            console.log("Error fetching data:", error);
        }
        setLoading(false);
    }

    useEffect(() => {
        fetchAPI();
        if (color === "gold" || color === "red") {
            setDirection("N")
        } else {
            setDirection("E")
        }
    }, []);

    return (
        <div className='lineDiv'>
            <Navbar loading={loading} stationData={stationData} setCurrStation={setCurrStation}></Navbar>
            <TrainList loading={loading} arrivalsData={arrivalsData} setArrivalsData={setArrivalsData} direction={direction} color={color}></TrainList>
        </div>
    );
}
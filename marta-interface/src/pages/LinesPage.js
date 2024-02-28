import React, {useState, useEffect} from 'react';
import Navbar from '../components/Navbar';
import TrainList from '../components/TrainList';
import { useNavigate } from 'react-router-dom';
import './LinesPage.css';

export default function LinesPage({color}) {
    const URL = "https://midsem-bootcamp-api.onrender.com";
    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);
    const [stationData, setStationData] = useState(null);
    const [direction, setDirection] = useState("");
    const [arrivalsData, setArrivalsData] = useState(null);
    const [currStation, setCurrStation] = useState("all");
    const [newColor, setNewColor] = useState(color);

    async function fetchAPI() {
        setLoading(true);
        try {
            const responseStation = await fetch(`${URL}/stations/${newColor}`);
            const stationData = await responseStation.json();
            setStationData(stationData);

            const responseArrival = await fetch(`${URL}/arrivals/${newColor}`);
            const arrivalData = await responseArrival.json();
            setArrivalsData(arrivalData);
        } catch (error) {
            console.log("Error fetching data", error);
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
    }, [newColor]);

    return (
        <div>
            <div className="upperButtonDiv">
                <button className="gold" onClick={() => {setLoading(true); setCurrStation("all"); setNewColor("gold"); navigate("/line/gold")}}>Gold</button>
                <button className="red" onClick={() => {setLoading(true); setCurrStation("all"); setNewColor("red"); navigate("/line/red")}}>Red</button>
                <button className="blue" onClick={() => {setLoading(true); setCurrStation("all"); setNewColor("blue"); navigate("/line/blue")}}>Blue</button>
                <button className="green" onClick={() => {setLoading(true); setCurrStation("all"); setNewColor("green"); navigate("/line/green")}}>Green</button>
            </div>
            <div className='titleDiv'>
                <p className='titleP'>{newColor.toUpperCase()}</p>
            </div>
            <div className='lineDiv'>
                <Navbar loading={loading} stationData={stationData} setCurrStation={setCurrStation}></Navbar>
                <TrainList loading={loading} arrivalsData={arrivalsData} currStation={currStation} direction={direction} color={color}></TrainList>
            </div>
        </div>
    );
}
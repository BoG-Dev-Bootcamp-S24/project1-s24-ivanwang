import React, {useState, useEffect} from "react";
import LinesPage from "./LinesPage";
import { useNavigate } from "react-router-dom";
import './FrontPage.css';
import marta from "../marta.jpg";

export default function FrontPage() {
    
    const navigate = useNavigate();

    return (
        <div className="outerDiv">
            <div className="topDiv">
                <h1>
                    MARTA
                </h1>
                <button className = 'about' onClick={() => navigate('/about')}>
                    About Me
                </button>
            </div>
            <div className="bottomDiv"></div>
            <div className="leftDiv">
                <p className="routesText">
                    VIEW ROUTES SCHEDULE
                </p>
                <ul className="ul">
                    <li><button onClick={() => navigate('./line/gold')}>
                        <span style={{color: "gold"}}>Gold</span> Line
                    </button></li>
                    <li><button  onClick={() => navigate('./line/red')}>
                        <span style={{color: "red"}}>Red</span> Line
                    </button></li>
                    <li><button  onClick={() => navigate('./line/blue')}>
                        <span style={{color: "blue"}}>Blue</span> Line
                    </button></li>
                    <li><button  onClick={() => navigate('./line/green')}>
                        <span style={{color: "green"}}>Green</span> Line
                    </button></li>
                </ul>
            </div>
            <img src = {marta} className="marta" alt="marta image"></img>
        </div>
    );
}

import React, {useState, useEffect} from 'react';
import marta from "../marta.jpg";
import { useNavigate } from 'react-router-dom';
import './About.css';

export default function About() {

    const navigate = useNavigate();

    return (
        <div className="outerDiv">
            <div className="topDiv">
                <h1>
                    ABOUT MARTA
                </h1>
                <button className = 'about' onClick={() => navigate("/")}>
                    Homepage
                </button>
            </div>
            <div className="bottomDiv"></div>
                <div className="leftDiv">
                    <p className="martaText">
                        MARTA, short for Metropolitan Atlanta Rapid Transit Authority, 
                        stands as a vital component of Atlanta's transportation infrastructure, 
                        serving as a lifeline for commuters and residents alike. 
                        Since its inception in 1971, MARTA has continuously evolved, 
                        expanding its network of buses and trains to cover a vast expanse 
                        of the metropolitan area. Its sleek trains whisk passengers across the city, 
                        offering a convenient and efficient alternative to navigating Atlanta's notorious traffic congestion.
                    </p>
                </div>
            <img src = {marta} className="marta" alt="marta image"></img>
        </div>
    );
}
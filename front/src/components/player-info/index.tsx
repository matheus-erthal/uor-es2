import React from 'react'

import './style.scss';

export default function PlayerInfo(props: any) {
    const { playerColor, playerName, currentRoundName, teamTotal } = props;

    return (
        <>
        <div className="player-info-container">
            <p style={{color: playerColor}} className="player-name">{playerName}</p>
            <div style={{borderColor: playerColor}} className="current-player-box">
                <div className="player-box-container">
                    <div className="player-box-stages">
                        <span>|</span>
                        <i className="fas fa-angle-double-right"></i>
                        <span>|</span>
                        <i className="fas fa-angle-double-right"></i>
                        <span>|</span>
                        <i className="fas fa-angle-double-right"></i>
                        <span>|</span>
                    </div>
                    <p className="current-round">{currentRoundName}</p>
                </div>
                <div style={{borderColor: playerColor}} className="absolute-circle circle-left">
                    <i style={{color: playerColor, fontSize: '30px'}} className="fas fa-user"></i>
                </div>
                <div style={{borderColor: playerColor}} className="absolute-circle circle-right">
                    <h1>x{teamTotal}</h1>
                </div>
            </div>
        </div>
        <div style={{background: playerColor}} className="player-info-container-after"/>
        </>
    )
}

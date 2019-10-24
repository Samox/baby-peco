import React from 'react';
import { Result } from './App';

export const ScoreTemplate: React.FunctionComponent<{ resultat: Result }> = (props) => {

    const result = props.resultat;
    return (<div className="contener-table">
        <div className="avatar"></div>
        <div className="username">{result.player.name}</div>
        <img src="up.svg" alt="" className="evol" />
        <div className="score">{result.score}</div>
        <div className="dash"></div>
    </div>
        // <img src="down.svg" alt="" className="evol" />
        // <img src="up.svg" alt="" className="evol" />
        // <img src="standby.svg" alt="" className="evol" />

    );
}
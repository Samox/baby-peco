import React from 'react';
import Trend from 'react-trend';

export const AddScore: React.FunctionComponent<{ isVisible: boolean }> = (props) => {

    return (
        <div className={props.isVisible ? "contener-splashscreen" : "contener-splashscreen contener-splashscreen-undisplayed"}>
            <div className="splashscreen-wrapper">
                <form action="post">
                    <div className="title-add">Ajouter un score</div>
                    <div>
                        <div className="contener-add-score">
                            <div>Gagnants</div>
                            <input placeholder="Nom du gagnant 1" type="text" />
                            <input placeholder="Nom du gagnant 2" type="text" />
                            <input placeholder="Score" value="10" type="number" />
                        </div>
                        <div className="contener-add-score">
                            <div>Perdants</div>
                            <input placeholder="Nom du perdant 1" type="text" />
                            <input placeholder="Nom du perdant 2" type="text" />
                            <input placeholder="Score" type="number" />
                        </div>
                    </div>
                    <div className="contener-button">
                        <button>Ajouter</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
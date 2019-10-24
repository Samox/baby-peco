import React from 'react';
import './App.css';
import useAxios from 'axios-hooks';
import { Splashscreen } from './splashscreen';
import { ScoreTemplate } from './scoreTemplate';
import { AddScore } from './addScore';

interface Player {
  name: string
}

export interface Result {
  player: Player; score: number
}

interface T {
  resultDays: Array<{ date: string; results: Array<Result> }>
}

const App: React.FC = () => {

  const [isVisible, setIsVisible] = React.useState(false);
  const [{ data, loading, error }] = useAxios<T>(
    'https://baby-peco.herokuapp.com'
  )
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>


  const displayModal = () => { setIsVisible(true) }
  const closeModal = () => { setIsVisible(false) }

  return (

    <div className="App">
      <div className="header-peco"><img className="logo" alt="" src="logo.png"></img><img onClick={displayModal} className="add" src="plus.svg" alt="" /></div>
      <header className="App-header">
        {/* <Splashscreen></Splashscreen> */}
        {data.resultDays[0].results.map((result) => {
          return <ScoreTemplate key={result.player.name} resultat={result} />
        })}


        <AddScore isVisible={isVisible} closeModal={closeModal} />
      </header>
    </div>
  );
}

export default App;

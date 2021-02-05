/**
 * This file is the main component of the website.
 * All the other components of the website are its children.
*/

/* Packages */
import React, { useState } from 'react';
import BackgroundComponent from './components/background';
import ChangeBackgroundButton from './components/changeBackgroundButton';
import HumanComponent from './components/human';
import MixAssetsButton from './components/mixAssetsButton';
import Title from './components/title';
import backgrounds from './data/backgrounds';
import bodies from './data/bodies';
import bottoms from './data/bottoms';
import heads from './data/heads';
import { Background, RandomSelection } from './interfaces';

function App() {

  const [{headIndex, bodyIndex, bottomIndex}, setSelection] = useState<RandomSelection>({headIndex: Math.round(Math.random()*(heads.length-1)), bodyIndex: Math.round(Math.random()*(bodies.length-1)), bottomIndex: Math.round(Math.random()*(bottoms.length-1))});
  const [backgroundIndex, setBackground] = useState(0);

  function newRandomSelection(){
    setSelection({headIndex: Math.round(Math.random()*(heads.length-1)), bodyIndex: Math.round(Math.random()*(bodies.length-1)), bottomIndex: Math.round(Math.random()*(bottoms.length-1))})
  }

  return (
    <div className="App">
      <Title />
      <img className="backgroundForm" src={process.env.PUBLIC_URL + '/assets/background-form.svg' } alt="background form"/>
      <BackgroundComponent name={backgrounds[backgroundIndex].name} src={backgrounds[backgroundIndex].src} index={backgrounds[backgroundIndex].index}/>
      <HumanComponent head={heads[headIndex]} body={bodies[bodyIndex]} bottom={bottoms[bottomIndex]} />
      <div className="menuBackground">
        {
          backgrounds.map((background: Background) => {
            return <ChangeBackgroundButton key={"buttonBackgroundKey" + background.index} background={backgrounds[background.index - 1]} onPressed={(event) => setBackground(background.index-1)} active={background.index === backgroundIndex +1}/>
          })
        }
      </div>
      <MixAssetsButton text="Mix it up" onPressed={(event) => newRandomSelection()}/>
    </div>
  );
}

export default App;

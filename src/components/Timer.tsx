import input from './../img/inputtimer.png';
import settings from './../img/finalsettings.png';
import Settings from './Settings';
import { useContext } from 'react';
import { AppContext } from './AppContext';

interface TimerProps{
  seconds: number;
}

function Timer({ seconds }: any) {
  const { showSettings, setShowSettings, 
    maxPizza, currentPizza , 
    typeTimer, typeTheme } = useContext<any>(AppContext);
  const toggleShowSettings = () => {
    setShowSettings((toggle: boolean) => !toggle)
  }
  
  return (
    <div className='timerTwo'>
      <img className='timeinput' src={input} alt='input'></img>
      <div className='topBlock'>
        <span>{currentPizza}/{maxPizza}</span>
        <span>{typeTheme}</span>
      </div>
      <div className='times'>
        {`${seconds / 60 < 10 ? '0' : ''}${Math.floor(seconds / 60)} : 
           ${seconds % 60 < 10 ? '0' : ''}${seconds % 60}`}
      </div>
      <div className='settings'>
        <img className='settings__img' src={settings} onClick={toggleShowSettings}  />
      </div>
      {showSettings && <Settings toggle={toggleShowSettings}/>}
    </div>
  )
}

export default Timer;

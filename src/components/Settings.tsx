import { useContext } from 'react';
import { AppContext } from './AppContext';

interface SettingsProps {
  toggle: any;
}

function Settings({ toggle }: SettingsProps) {

  const {
    workTime, setWorkTime,
    breakTime, setBreakTime,
    pizzasCount, setPizzasCount,
    setTimer, setTotalTime,
    setTypeButton, timeInterval,
    setMaxPizza, setCurrentBreakTime, setTypeTheme, setTypeTimer,
  } = useContext<any>(AppContext);

  const changeValue = (func: any, event: any,) => {
    func(() => event.target.value)
  }

  const saveSettings = () => {
    toggle();
    setTimer(workTime * 60);
    setTotalTime(workTime * 60);
    setTypeButton(true);
    clearInterval(timeInterval);
    setMaxPizza(+pizzasCount);
    setCurrentBreakTime(breakTime * 60);
    setTypeTimer(true);
    setTypeTheme('in Waiting');
  }

  return (
    <>
      <div className='popUp'>
        <div className='settings-content'>
          <h1 className='headers'>Work Time</h1>
          <span className='label-input'>{workTime} minutes</span>
          <input
            type='range' min={1} max={90}
            value={workTime}
            onChange={(event) => changeValue(setWorkTime, event)}
          />
          <h1 className='headers'>Break Time</h1>
          <span className='label-input'>{breakTime} minutes</span>
          <input
            type='range' min={5} max={20}
            value={breakTime}
            onChange={(event) => changeValue(setBreakTime, event)}
          />
          <h1 className='headers'>Pizza's Count</h1>
          <span className='label-input'>{pizzasCount} pizza's</span>
          <input
            type='range' min={1} max={10}
            value={pizzasCount}
            onChange={(event) => changeValue(setPizzasCount, event)}
          />
          <button className='saveSettingsButton' onClick={saveSettings}><span>Save</span></button>
        </div>
      </div>
    </>
  )
}

export default Settings;

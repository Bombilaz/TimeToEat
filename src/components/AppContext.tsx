import { createContext, useState } from 'react'

export const AppContext = createContext<any>(
  { 
    timer: 1800, setTimer: () => { }, 
    workTime: 30, setWorkTime: () => { },
    breakTime: 5, setBreakTime: () => { },
    pizzasCount: 4, setPizzasCount: () => { },
  });
 
export const AppContextProvider: React.FC = ({ children }: any) => {
  const [timer, setTimer] = useState<number>(1800);
  const [timeInterval, setTimeInterval] = useState<Function>();
  const [typeButton, setTypeButton] = useState<boolean>(true);
  const [showSettings, setShowSettings] = useState<boolean>(false);
  const [totalTime, setTotalTime] = useState(timer);
  const [maxPizza, setMaxPizza] = useState<number>(4);
  const [workTime, setWorkTime] = useState<number>(30);
  const [breakTime, setBreakTime] = useState<number>(5);
  const [pizzasCount, setPizzasCount] = useState<number>(4);
  const [currentPizza, setCurrentPizza] = useState<number>(1);
  const [currentBreakTime, setCurrentBreakTime] = useState<number>(300);
  const [typeTimer, setTypeTimer] = useState<boolean>(true);

  return (
    <AppContext.Provider
      value={{
        timer, setTimer,
        typeButton, setTypeButton,
        timeInterval, setTimeInterval,
        showSettings, setShowSettings,
        totalTime, setTotalTime,
        maxPizza, setMaxPizza,
        workTime, setWorkTime,
        breakTime, setBreakTime,
        pizzasCount, setPizzasCount,
        currentPizza, setCurrentPizza,
        typeTimer, setTypeTimer,
        currentBreakTime, setCurrentBreakTime,
      }}>
      {children}
    </AppContext.Provider>
  )
}
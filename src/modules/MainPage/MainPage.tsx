import {FC, useContext, useEffect, useState} from 'react';
import eight from '../../img/8.png';
import seven from '../../img/7.png';
import six from '../../img/6.png';
import five from '../../img/5.png';
import four from '../../img/4.png';
import three from '../../img/3.png';
import two from '../../img/2.png';
import one from '../../img/1.png';
import zero from '../../img/0.png';
import * as S from './MainPage.styles';

import play from "../../img/play.png";
import pause from '../../img/pause.png';
import { AppContext } from '../../components/AppContext';
import Timer from '../../components/Timer';
import Header from '../../components/Header/Header';

const MainPage: FC = () => {
  const [isStartedTimer, setIsStartedTimer] = useState(false)
  // const { timer, setTimer } = useContext<any>(AppContext)
  // const { timeInterval, setTimeInterval } = useContext<any>(AppContext);
  // const { typeButton, setTypeButton } = useContext<any>(AppContext);
  // const { totalTime, } = useContext<any>(AppContext);
  // const { maxPizza } = useContext<any>(AppContext);
  // const { currentPizza, setCurrentPizza } = useContext<any>(AppContext);
  // const { typeTimer, setTypeTimer } = useContext<any>(AppContext);
  // const { currentBreakTime } = useContext<any>(AppContext);
  // const { typeTheme, setTypeTheme} = useContext<any>(AppContext);
  // let intervalHandle:any = null;
  //
  // useEffect(()=>{
  //   if(typeTimer && timeInterval && !typeButton){
  //     setTypeTheme('WorkTime');
  //   }
  // }, [typeTimer, typeButton]);
  //
  // function getMainTheme(){
  //   switch(typeTheme){
  //     case 'WorkTime':
  //       return 'mainWork';
  //     case 'BreakTime':
  //       return 'mainBreak';
  //     default:
  //       return 'mainDefault';
  //   }
  // }
  //
  // useEffect(() => {
  //
  //   if (timer <= 0 && typeTimer) {
  //     setTypeTimer((typeTime: any) => !typeTime);
  //     setTimer(currentBreakTime);
  //     setTypeTheme('BreakTime');
  //     toggle();
  //   }
  //   else if (timer <= 0 && !typeTimer) {
  //     setTypeTheme('in Waiting');
  //     clearInterval(timeInterval);
  //     setTypeTimer((typeTime: any) => !typeTime);
  //     setTypeButton((typeButton: boolean) => !typeButton);
  //     setTimer(totalTime);
  //     if (currentPizza != maxPizza) {
  //       setCurrentPizza((value: number) => value + 1);
  //     }
  //     else if(currentPizza === maxPizza){
  //       setCurrentPizza(1);
  //     }
  //   }
  // }, [timer]);
  //
  // function checkSrcBreak() {
  //   if (timer === currentBreakTime) {
  //     return zero;
  //   }
  //   else if (timer < currentBreakTime && timer > (currentBreakTime / 7) * 6) {
  //     return one;
  //   }
  //   else if (timer <= (currentBreakTime / 7) * 6 && timer > (currentBreakTime / 7) * 5) {
  //     return two;
  //   }
  //   else if (timer <= (currentBreakTime / 7) * 5 && timer > (currentBreakTime / 7) * 4) {
  //     return three;
  //   }
  //   else if (timer <= (currentBreakTime / 7) * 4 && timer > (currentBreakTime / 7) * 3) {
  //     return four;
  //   }
  //   else if (timer <= (currentBreakTime / 7) * 3 && timer > (currentBreakTime / 7) * 2) {
  //     return five;
  //   }
  //   else if (timer <= (currentBreakTime / 7) * 2 && timer > (currentBreakTime / 7)) {
  //     return six;
  //   }
  //   else if (timer <= (currentBreakTime / 7) && timer > 0) {
  //     return seven;
  //   }
  //   else if (timer === 0) {
  //     return eight;
  //   }
  // }
  //
  // function checkSrcWork() {
  //   if (timer === totalTime) {
  //     return eight;
  //   }
  //   else if (timer < totalTime && timer > (totalTime / 7) * 6) {
  //     return seven;
  //   }
  //   else if (timer <= (totalTime / 7) * 6 && timer > (totalTime / 7) * 5) {
  //     return six;
  //   }
  //   else if (timer <= (totalTime / 7) * 5 && timer > (totalTime / 7) * 4) {
  //     return five;
  //   }
  //   else if (timer <= (totalTime / 7) * 4 && timer > (totalTime / 7) * 3) {
  //     return four;
  //   }
  //   else if (timer <= (totalTime / 7) * 3 && timer > (totalTime / 7) * 2) {
  //     return three;
  //   }
  //   else if (timer <= (totalTime / 7) * 2 && timer > (totalTime / 7)) {
  //     return two;
  //   }
  //   else if (timer <= (totalTime / 7) && timer > 0) {
  //     return one;
  //   }
  // }
  //
  // const toggle = () => {
  //   if (timer <= 0) {
  //     return;
  //   }
  //   setTypeButton(!typeButton);
  //   if (!!typeButton) {
  //     intervalHandle = setInterval<any>(() => (setTimer((timer: number) => timer - 1)), 50)
  //     setTimeInterval(intervalHandle)
  //   } else {
  //     clearInterval(timeInterval);
  //   }
  // }

  
const x = 1


  return (
    <S.Container>

      {/*<Timer seconds={timer} />*/}
      {/*<img className='pizza' src={typeTimer ? checkSrcWork() : checkSrcBreak()} alt='какая-то' />*/}
      {/*<img src={eight.src}/>*/}
      <S.Pizza
        src={eight}
      />


      <S.StartButton
        src={isStartedTimer ? pause : play}
        onClick={()=>setIsStartedTimer((prevState) => !prevState)}
        alt={'хуета'}
      />
      {/*<div className='playblock'>*/}
      {/*  <img*/}
      {/*    className='play'*/}
      {/*    src={typeButton ? play : pause}*/}
      {/*    alt='какая-то'*/}
      {/*    onClick={toggle}*/}
      {/*  />*/}
      {/*</div>*/}
    </S.Container>
  )
}

export default MainPage;
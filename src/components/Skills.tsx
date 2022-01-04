// // import Skill from './Skill'
// import Timer from './Timer';
// import { AppContext } from './AppContext';
// import { useContext, useEffect } from 'react';
// import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
// import 'react-circular-progressbar/dist/styles.css';
import Cat from '../img/cat.png';

import './Skills.css'

let Skills = () => {
//   const { timer, timeInterval} = useContext(AppContext);

//   useEffect(()=>{
//     if(timer <= 0){
//       clearInterval(timeInterval);
//     } 
//   }, [timer]) 
  return (
    <div className="blankPage">
      <p>This webpage is not available.
         We are sorry for this inconvenience</p>
      <img src={Cat}></img>
    </div>
  )
}
    // <div className='SkillsElements'>
    //   <Timer seconds={timer} />
    //   <div className="links">
    //     <div style={{ width: 200, height: 200 }}>
    //       <CircularProgressbar 
    //       value={66} 
    //       text={`2`}
    //       styles={buildStyles({
    //         trailColor: '#d6d6d6',
    //         pathColor: `orange`,
    //       })}
    //       /><span>Программирование</span>
    //     </div>
    //     <div style={{ width: 200, height: 200 }}>
    //       <CircularProgressbar 
    //       value={66} 
    //       text={`3`}
    //       styles={buildStyles({
    //         trailColor: '#d6d6d6',
    //         pathColor: `red`,
    //       })}
    //       /><span>Английский</span>
    //     </div>
    //     <div style={{ width: 200, height: 200 }}>
    //       <CircularProgressbar 
    //       value={66} 
    //       text={`7`}
    //       styles={buildStyles({
    //         trailColor: '#d6d6d6',
    //         pathColor: `blue`,
    //       })}
    //       /><span>Хуепинание</span>
    //     </div>
    //     <div style={{ width: 200, height: 200 }}>
    //       <CircularProgressbar 
    //       value={66} 
    //       text={`1`}
    //       styles={buildStyles({
    //         trailColor: '#d6d6d6',
    //         pathColor: `rgb(5, 255, 5)`,
    //       })}
    //       /><span>Чистить Картошку</span>
    //     </div>
    //     <div className='skillBlock' style={{ width: 200, height: 200 }}>
    //       <CircularProgressbar 
    //       value={66} 
    //       text={`25`}
    //       styles={buildStyles({
    //         trailColor: '#d6d6d6',
    //         pathColor: `#3e98c7;`,
            
    //       })}
    //       /><span>Шарю в мемах</span>
    //     </div>
    //       <button className='buttonAdd'>
    //         +
    //       </button>
    //   </div> 
    // </div>


export default Skills;
import { NavLink } from 'react-router-dom';
import '../styles/Header.css';
import { AppContext } from './AppContext';
import { useContext, useEffect, useState } from 'react';

let Header: React.FC = () => {

  const { timer, typeTheme } = useContext(AppContext);
  useEffect(() => {
    document.title = `PizzaTimer ${timer / 60 < 10 ? '0' : ''}${Math.floor(timer / 60)}:${timer % 60 < 10 ? '0' : ''}${timer % 60}
    ${typeTheme}`;
  }, [timer]);

  const [showTutorial, setShowTutorial] = useState(false);

  // useEffect(()=>{
  //   setTimeout(()=>setShowTutorial(true), 2000);
  // },[])

  function getClass(){
    switch(typeTheme){
      case 'WorkTime':
        return 'headerWork';
      case 'BreakTime':
        return 'headerBreak';
      default:
        return 'headerDefault';
    }
  }

  return (
    <nav className={getClass()}>
      {showTutorial && <div className='tutorialWrapper'>
        <div className='tutorialBlock'>
          <h5 className='center'>Welcome</h5>
        </div>
      </div>}
      <span className='logo'><NavLink className='links' to='/TimeToEat/'>PizzaTimer</NavLink></span>
      <ul className='menu'>
        <li><NavLink className='links' to='/Skills'>Skills</NavLink></li>
        <li><NavLink className='links' to='/Achievements'>Achievements</NavLink></li>
        <li><NavLink className='links' to='/Chat'>Chat</NavLink></li>
        <li><NavLink className='links' to='/Donate'>Donate</NavLink></li>
      </ul>
    </nav>
  );
}

export default Header;

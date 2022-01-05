import { NavLink } from 'react-router-dom'
import classes from './Header.module.css'
import { AppContext } from './AppContext';
import { useContext, useEffect, useState} from 'react';

let Header: React.FC = () => {

  const {timer} = useContext(AppContext);
  useEffect(() => {
    document.title = `PizzaTimer ${timer / 60 < 10 ? '0' : ''}${Math.floor(timer / 60)}:${timer % 60 < 10 ? '0' : ''}${timer % 60}`;
  }, [timer]);

  const [showTutorial, setShowTutorial] = useState(false);

  // useEffect(()=>{
  //   setTimeout(()=>setShowTutorial(true), 2000);
  // },[])




  return (
    <nav className={classes.header}>
      {showTutorial && <div className={classes.tutorialWrapper}>
        <div className={classes.tutorialBlock}>
          <h5 className={classes.center}>Welcome</h5>
        </div>
      </div>}
      <span className={classes.logo}><NavLink className={classes.links} to='/Main'>PizzaTimer</NavLink></span>
      <ul className={classes.menu}>
        <li><NavLink className={classes.links} to='/Skills'>Skills</NavLink></li>
        <li><NavLink className={classes.links} to='/Achievements'>Achievements</NavLink></li>
        <li><NavLink className={classes.links} to='/Chat'>Chat</NavLink></li>
        <li><NavLink className={classes.links} to='/Donate'>Donate</NavLink></li>
      </ul>
    </nav>
  );
}

export default Header;

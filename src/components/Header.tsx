import {NavLink} from 'react-router-dom'
import classes from './Header.module.css'

let Header: React.FC = () => {
  return (
    <nav className={classes.header}>
      <span className={classes.logo}><NavLink className={classes.links} to='/'>PizzaTimer</NavLink></span>

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

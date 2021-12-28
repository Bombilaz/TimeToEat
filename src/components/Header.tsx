import {NavLink} from 'react-router-dom'
import classes from './Header.module.css'

let Header: React.FC = () => {
  return (
    <nav className={classes.header}>
      <span className={classes.logo}><NavLink className={classes.links} to='/'>PizzaTimer</NavLink></span>

      <ul className={classes.menu}>
        <li><NavLink className={classes.links} to='/Skills'>Skills</NavLink></li>
        <li><NavLink className={classes.links} to='/Test'>Achievements</NavLink></li>
        <li><NavLink className={classes.links} to='/d'>Chat</NavLink></li>
        <li><NavLink className={classes.links} to='/g'>Donate</NavLink></li>
      </ul>


    </nav>
  );
}

export default Header;

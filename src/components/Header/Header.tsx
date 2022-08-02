import { NavLink } from 'react-router-dom';

import * as S from './Header.styles';

import { AppContext } from '../AppContext';
import { FC, useContext, useEffect, useState } from 'react';

const Header: FC = () => {
  //git st

  // useEffect(()=>{
  //   setTimeout(()=>setShowTutorial(true), 2000);
  // },[])

  // function getClass(){
  //   switch(typeTheme){
  //     case 'WorkTime':
  //       return 'headerWork';
  //     case 'BreakTime':
  //       return 'headerBreak';
  //     default:
  //       return 'headerDefault';
  //   }
  // }

  return (
    <S.Container>
      gegge
      dwdwfwefwefedwdwd
      <S.PagesLinks>
        {/*  <li><NavLink className='links' to='/Skills'>Skills</NavLink></li>*/}
        {/*  <li><NavLink className='links' to='/Achievements'>Achievements</NavLink></li>*/}
        {/*  <li><NavLink className='links' to='/Chat'>Chat</NavLink></li>*/}
        {/*  <li><NavLink className='links' to='/Donate'>Donate</NavLink></li>*/}
      </S.PagesLinks>
    </S.Container>
  );
}

export default Header;

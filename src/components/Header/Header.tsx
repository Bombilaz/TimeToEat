import * as S from './Header.styles';

import { FC  } from 'react';
import PageLink from "../PageLink/PageLink";
import Link from "next/link";

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
      <S.PagesLinks>
        <PageLink url={'/skills'} textLink='Skills' />
        <PageLink url={'/achievements'} textLink='Achievements' />
        <PageLink url={'/chat'} textLink='Chat' />
        <PageLink url={'/donate'} textLink='Donate' />
      </S.PagesLinks>
    </S.Container>
  );
}

export default Header;

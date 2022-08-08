import Header from "../Header/Header";
import {FC} from "react";

interface LayoutProps {
  children: Element
}

const Layout: FC<LayoutProps> = ({children}) =>{
  return(
    <>
      <Header/>
      {children}
    </>
  )
}

export default Layout
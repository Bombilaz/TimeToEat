import {FC} from "react";
import {Provider} from "react-redux";
import Header from "../Header/Header";
import {store} from "../../store/store";
import {LayoutProps} from "./Layout.types";


const Layout: FC<LayoutProps> = ({children}) =>{
  return(
    <Provider store={store}>
      <Header/>
      {children}
    </Provider>
  )
}

export default Layout
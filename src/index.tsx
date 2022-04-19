import ReactDOM from 'react-dom';
import App from './App';
import './index.scss';
import './styles/Error.css';
import { AppContextProvider } from './components/AppContext';
import { Provider } from "react-redux";
import {setupStore} from "./store/store";

const store = setupStore()

ReactDOM.render(
    <AppContextProvider>
        <Provider store={store}>
            <App />
        </Provider>
    </AppContextProvider>,
    document.getElementById('root')
);


import ReactDOM from 'react-dom';
import App from './App';
import './index.scss';
import './styles/Error.css';
import { AppContextProvider } from './components/AppContext';


ReactDOM.render(
    <AppContextProvider>
        <App />
    </AppContextProvider>,
    document.getElementById('root')
);


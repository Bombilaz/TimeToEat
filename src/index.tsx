import ReactDOM from 'react-dom';
import App from './App';
import './index.scss';
import './styles/Error.css';
import { Provider } from 'react-redux';
import { AppContextProvider } from './components/AppContext';
import { createStore } from 'redux';

let defaultState = {
    timer: 1800,
    timeInterval: null,
    typeButton: true,
    showSettings: false,
    totalTime: 1800,
    maxPizza: 4,
    workTime: 30,
    breakTime: 5,
    pizzasCount: 4,
    currentPizza: 1,
    currentBreakTime: 300,
    typeTimer: true,
    typeTheme: 'in Waiting'
};

const reducer = (state: any = defaultState, action: any) => {
    switch (action.type) {
        

        default:
            return state;
    }
}

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <AppContextProvider>
            <App />
        </AppContextProvider>
    </Provider>,
    document.getElementById('root')
);


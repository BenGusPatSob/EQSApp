import React from 'react';
import { hot } from 'react-hot-loader';
import SideNav from './Components/SideNav';
import DwgPadWrapper from './Components/DwgPadWrapper';
import './Styles/App.css';
import { Provider } from 'react-redux';

const App = () => (
    <Provider>
        <div className="App">
            <SideNav valor={valordesdehijo} onChange={actualizaPadre}/>
            <DwgPadWrapper data={{valorparahijo, recogeDatoDesdeD3js}} ref={ref} />
        </div>
    </Provider>
);

export default hot(module)(App);
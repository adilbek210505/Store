import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {setUpStore} from "./Store";
import Layout from "./components/Layout";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={setUpStore()}>
        <BrowserRouter>
            <Layout>
                <App/>
            </Layout>
        </BrowserRouter>
    </Provider>
)
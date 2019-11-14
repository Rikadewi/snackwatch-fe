import React from 'react';
import { Provider } from "react-redux";
import store, { persistor } from "./src/store";
import { PersistGate } from 'redux-persist/integration/react';
import Route from './src/route'

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <Route />
                </PersistGate>
            </Provider>
        );
    }
}

import React from 'react';
import { render } from 'react-dom';
import uuid from 'uuid';
import { createStore } from "redux";

const defaultPhonesReducerState = [];

const store = createStore((state = defaultPhonesReducerState, action) => {
    switch (action.type) {
        case "ADD_PHONE":
            return [...state, action.phone];
        default:
            return state;
    }
});

const addPhone = ({ model = '', brand = '', price = 0 } = {}) => ({
    type: "ADD_PHONE",
    phone: {
        id: uuid(),
        model,
        brand,
        price
    }
});

const App = () => {
    return (
        <div>
            <h1>hello</h1>
        </div>
    )
};

store.dispatch(addPhone({model: 'I phone 11', price: 15000000, brand: "Apple"}));

console.log(store.getState());



render(
    <App/>,
    document.getElementById('root')
);
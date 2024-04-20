// CurrencyDropdown.js

import React, { useContext } from 'react';
import { AppContext, ActionTypes } from '../context/AppContext';

const CurrencyDropdown = () => {
    const { dispatch } = useContext(AppContext);

    const handleCurrencyChange = (event) => {
        const newCurrency = event.target.value;
        dispatch({
            type: ActionTypes.CHANGE_CURRENCY,
            payload: newCurrency,
        });
    };

    return (
        <select className="alert alert-primary" id="inputGroupSelect03" onChange={handleCurrencyChange}>
            <option defaultValue value="$" name="Dollar">$ Dollar</option>
            <option value="£" name="pound">£ Pound</option>
            <option value="€" name="euro">€ Euro</option>
            <option value="₹" name="rupees">₹ Rupees</option>
        </select>
    );
};

export default CurrencyDropdown;

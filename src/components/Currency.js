import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Currency = () => {
    const { currency, dispatch } = useContext(AppContext);
    let currency_name = "";
    switch(currency)
    {
        case "$":
            currency_name = "Dollar";
            break;
        case "£":
            currency_name = "Pound";
            break;
        case "€":
            currency_name = "Euro";
            break;
        default:
            currency_name = "Rupee";
    }
    const currencyChange = (event) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: event.target.value,
        });
    };
    return (
        <select class="form-select form-select-sm" aria-label="Small select example" onChange={currencyChange} style={{backgroundColor: '#90EE90', color: 'white', border: '2px solid rgba(0, 128, 0, 0)'}}>
            <option value="" disabled selected hidden>Currency ({currency} {currency_name})</option>
            <option value="$">$ Dollar</option>
            <option value="£">£ Pound</option>
            <option value="€">€ Euro</option>
            <option value="₹">₹ Rupee</option>
            </select>
    );
}
export default Currency;
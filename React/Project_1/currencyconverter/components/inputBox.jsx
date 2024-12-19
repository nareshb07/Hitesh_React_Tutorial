import React, {useId} from  "react";

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOption = [],
    selectedCurrency = false,
    amountDisable = false,
    currencyDisabled =  false,
    className = "", 
})
{
    const id = useId();
return(

    <div className={`flex bg-gray-600 ${className}`}> 
        <div className="w-1-2">
            <label htmlFor={id} className="inline-block text-black/40 mb-2">{label}</label>
            <input
                id ={id} 
                type="number"
                className="outline-none w-full bg-transparent py-1.5 "
                placeholder="amount"
                disabled = {amountDisable}
                value={amount}
                onChange={ (e) => onAmountChange
                    && onAmountChange(Number(e.target.value))}/>
        </div>
        <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p> Currency Type </p>
        <select 
                className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                value={selectedCurrency}
                onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                disabled={currencyDisabled}>

                {currencyOption.map((currency) => 
                    (<option key={currency} value={currency}>{currency}</option>))}    
                </select>
        </div>
    </div>
);
 }


export default InputBox;

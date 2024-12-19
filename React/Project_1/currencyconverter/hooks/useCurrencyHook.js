import { useCallback, useState, useEffect } from "react";

function useCurrencyHook(currency){
    const [data, setData] = useState({});
    // console.log(currency);
    
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            .then((response) => response.json())
            .then((data) => setData(data[currency]));
    }, [currency]);   

    // console.log(data);
    
    return data;
}

export default useCurrencyHook;
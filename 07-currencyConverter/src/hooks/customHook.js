import { useEffect, useState } from "react";

function useCurrency(currency){

    const [data, setData] = useState({})

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((resp) => resp.json())
        .then((resp) => setData(resp[currency]))
    }, [currency])
    console.log(`Currency fetched from API ${data}`)
    return data
}

export default useCurrency;
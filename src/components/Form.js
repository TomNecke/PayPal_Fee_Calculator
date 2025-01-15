import React, { useState } from 'react'


export default function () {

    const [inputNum, setInputNum] = useState(null);
    const [resultFee, setResultFee] = useState(null);
    const [resultTotal, setResultTotal] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault()
        
        let result = Number.parseInt(inputNum)
        console.log(result+(result/100*2.49)+0.35);
        
        console.log("resultFee: " + resultFee)
        console.log("resultTotal: " + resultTotal)
        console.log("inputNum: " + inputNum)
    }

    return (
        <div>
            <h1>PayPal Gebührenrechner</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="inputNum">Betrag:</label>
                <input id='inputNum' type='number' onChange={(e) => {
                    setInputNum(e.target.value);
                }} />
                <fieldset>
                    <legend>Type</legend>
                    <div>
                        <label htmlFor="feeRadio">Gebühren berechnen</label>
                        <input type='radio' id='feeRadio' value="feeRadio" name='selectCalc' />
                    </div>
                    <div>
                        <label htmlFor="totalRadio">Endsumme berechnen</label>
                        <input type='radio' id='totalRadio' value="totalRadio" name='selectCalc' />
                    </div>
                </fieldset>
                <input type='submit' value="berechnen" />
            </form>
            <div>
                <h2>Ergebnis</h2>
                <p>PayPal Gebühren: {resultFee}</p>
                <p>Betrag: {resultTotal}</p>
            </div>
        </div>
    )
}

import React, { useState } from 'react'


export default function () {

    const [inputNum, setInputNum] = useState(null);
    const [resultSend, setResultSend] = useState(null);
    const [resultReceive, setResultReceive] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault()
        
        let result = Number.parseInt(inputNum)
        console.log(result+(result/100*2.49)+0.35);
        
        console.log("resultSend: " + resultSend)
        console.log("resultReceive: " + resultReceive)
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
                        <label htmlFor="sendRadio">Geld senden</label>
                        <input type='radio' id='sendRadio' value="sendRadio" name='selectCalc' />
                    </div>
                    <div>
                        <label htmlFor="receiveRadio">Geld empfangen</label>
                        <input type='radio' id='receiveRadio' value="receiveRadio" name='selectCalc' />
                    </div>
                </fieldset>
                <label htmlFor='selectFeeRate'>Art der Zahlung</label>
                <select name='feeRate' id='selectFeeRate'>
                    <option value="1">Waren oder Dienstleistungen bezahlen</option>
                    <option value="2">Zahlung an Freunde und Familie</option>
                    <option value="3">Spenden sammeln</option>
                    <option value="4">Mikrozahlung</option>
                    <option value="5">Zahlung mit QR-Code</option>
                    <option value="6">{"Händlerkonditionen < 2.000 €"}</option>
                    <option value="7">{"Händlerkonditionen 2.000 - 5.000 €"}</option>
                    <option value="8">{"Händlerkonditionen 5.000 - 25.000 €"}</option>
                    <option value="9">{"Händlerkonditionen > 25.000 €"}</option>
                </select>
                <input type='submit' value="Berechnen" />
            </form>
            <div>
                <h2>Ergebnis</h2>
                <p>inputNum: {inputNum}</p>
                <p>Betrag senden: {resultSend}</p>
                <p>Betrag empfangen: {resultReceive}</p>
            </div>
        </div>
    )
}

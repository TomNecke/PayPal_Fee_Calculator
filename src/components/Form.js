import React, { useState } from 'react'


export default function () {

    const [inputNum, setInputNum] = useState(null);
    const [resultSend, setResultSend] = useState(null);
    const [resultReceive, setResultReceive] = useState(null);
    const [type, setType] = useState("sendRadio");
    const [feeRate, setFeeRate] = useState("1");
    const [rateOneResult, setRateOneResult] = useState(null);

    const fee = ["2.49% + 0.35 €", "0.00% + 0.00 €", "1.50% + 0.35 €", "10.00% + 0.10 €", "0.90% + 0.00 €", "2.49% + 0.35 €", "2.19% + 0.35 €", "1.99% + 0.35 €", "1.49% + 0.35 €"]

    const handleSubmit = (event) => {
        event.preventDefault()
        
        let result = Number.parseInt(inputNum)


    }

    return (
        <div>
            <h1>PayPal Gebührenrechner</h1>
            <form onSubmit={handleSubmit}>
                <fieldset onChange={(e) => {setType(e.target.value)}}>
                    <legend>Type</legend>
                    <div>
                        <label htmlFor="sendRadio">Geld senden</label>
                        <input type='radio' id='sendRadio' value="sendRadio" name='selectCalc' defaultChecked/>
                    </div>
                    <div>
                        <label htmlFor="receiveRadio">Geld empfangen</label>
                        <input type='radio' id='receiveRadio' value="receiveRadio" name='selectCalc' />
                    </div>
                </fieldset>
                <label htmlFor="inputNum">Betrag:</label>
                <input id='inputNum' type='number' onChange={(e) => {
                    setInputNum(e.target.value);
                }} />
                <label htmlFor='selectFeeRate'>Art der Zahlung</label>
                <select name='feeRate' id='selectFeeRate' onChange={(e) => {setFeeRate(e.target.value)}}>
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
                <p>Betrag senden: {resultSend}</p>
                <p>Betrag empfangen: {resultReceive}</p>
                <p>Gebührenrate: {fee[feeRate-1]}</p>
                <h3>devInfo</h3>
                <p>inputNum: {inputNum}</p>
                <p>type: {type}</p>
            </div>
        </div>
    )
}

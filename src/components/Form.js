import React, { useState } from 'react'


export default function () {

    const [inputNum, setInputNum] = useState(null);
    const [resultSend, setResultSend] = useState(null);
    const [resultReceive, setResultReceive] = useState(null);
    const [type, setType] = useState("sendRadio");
    const [feeRate, setFeeRate] = useState("0");

    const delay = ms => new Promise(res => setTimeout(res, ms));

    const fee = [{ Gebühr: 2.49, Festgebühr: 0.35 }, { Gebühr: 0.00, Festgebühr: 0.00 }, { Gebühr: 1.50, Festgebühr: 0.35 }, { Gebühr: 10.00, Festgebühr: 0.10 }, { Gebühr: 0.90, Festgebühr: 0.00 }, { Gebühr: 2.49, Festgebühr: 0.35 }, { Gebühr: 2.19, Festgebühr: 0.35 }, { Gebühr: 1.99, Festgebühr: 0.35 }, { Gebühr: 1.49, Festgebühr: 0.35 }]

    const handleSubmit = async (event) => {
        await delay(1000);
        let input = Number.parseInt(inputNum)

        let sendOutput = input - (input / 100 * fee[feeRate].Gebühr + fee[feeRate].Festgebühr)
        let receiveOutput = (input / (1 - (fee[feeRate].Gebühr / 100))) + 0.35

        setResultSend(sendOutput.toFixed(2))
        setResultReceive(receiveOutput.toFixed(2))

    }

    return (
        <div>
            <h1>PayPal Gebührenrechner</h1>
            <form onChange={handleSubmit}>
                <fieldset onChange={(e) => { setType(e.target.value) }} className='radioSendReceive'>
                    <div>
                        <label htmlFor="sendRadio">Geld senden</label>
                        <input type='radio' id='sendRadio' value="sendRadio" name='selectCalc' defaultChecked />
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
                <select name='feeRate' id='selectFeeRate' onChange={(e) => { setFeeRate(e.target.value) }}>
                    <option value="0">Waren oder Dienstleistungen bezahlen</option>
                    <option value="1">Zahlung an Freunde und Familie</option>
                    <option value="2">Spenden sammeln</option>
                    <option value="3">Mikrozahlung</option>
                    <option value="4">Zahlung mit QR-Code</option>
                    <option value="5">{"Händlerkonditionen < 2.000 €"}</option>
                    <option value="6">{"Händlerkonditionen 2.000 - 5.000 €"}</option>
                    <option value="7">{"Händlerkonditionen 5.000 - 25.000 €"}</option>
                    <option value="8">{"Händlerkonditionen > 25.000 €"}</option>
                </select>
            </form>
            <div>
                <h2>Ergebnis</h2>
                {type == "sendRadio" ? <p>Betrag senden: {resultSend}</p> : <p>Betrag empfangen: {resultReceive}</p>}
                <p>Gebührenrate: {fee[feeRate].Gebühr}</p>
                <p>Festgebühr: {fee[feeRate].Festgebühr}</p>
            </div>
        </div>
    )
}

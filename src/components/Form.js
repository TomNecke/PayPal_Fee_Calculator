import React, { useRef, useState } from 'react'


export default function () {

    const [resultSend, setResultSend] = useState(0);
    const [resultReceive, setResultReceive] = useState(0);
    const [type, setType] = useState("sendRadio");
    const [feeRate, setFeeRate] = useState("0");
    const [sendFee, setSendFee] = useState(0);
    const [receiveFee, setReceiveFee] = useState(0);
    const inputNumber = useRef(null);
    const inputFeeRate = useRef("0");
    

    const fee = [{ Gebühr: 2.49, Festgebühr: 0.35 }, { Gebühr: 0.00, Festgebühr: 0.00 }, { Gebühr: 1.50, Festgebühr: 0.35 }, { Gebühr: 10.00, Festgebühr: 0.10 }, { Gebühr: 0.90, Festgebühr: 0.00 }, { Gebühr: 2.49, Festgebühr: 0.35 }, { Gebühr: 2.19, Festgebühr: 0.35 }, { Gebühr: 1.99, Festgebühr: 0.35 }, { Gebühr: 1.49, Festgebühr: 0.35 }]

    const handleSubmit = async (event) => {
        let input = Number.parseInt(inputNumber.current.value)
        
        let sendFeeCalc = ((input / 100 * fee[inputFeeRate.current.value].Gebühr + fee[inputFeeRate.current.value].Festgebühr) * 100) / 100
        
        let receiveFeeCalc = 0

        let sendOutput = (input - sendFeeCalc).toFixed(2)
        
        let receiveOutput = (Math.ceil(((input / (1 - (fee[inputFeeRate.current.value].Gebühr / 100))) + fee[inputFeeRate.current.value].Festgebühr) * 100) / 100).toFixed(2)

        setSendFee(sendFeeCalc.toFixed(2))
        setReceiveFee(receiveFeeCalc.toFixed(2))
        setResultSend(sendOutput)
        setResultReceive(receiveOutput)

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
                <label htmlFor="inputNum">Betrag in €:</label>
                <input id='inputNum' type='number' ref={inputNumber} />
                <label htmlFor='selectFeeRate'>Art der Zahlung</label>
                <select name='feeRate' id='selectFeeRate' onChange={(e) => { setFeeRate(e.target.value) }} ref={inputFeeRate}>
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
                {inputNumber.current && inputNumber.current.value && <div>
                    {type == "sendRadio" ? <p>Betrag: {resultSend} €</p> : <p>Betrag: {resultReceive} €</p>}
                    {type == "sendRadio" ? <p>Gebühren: {sendFee} €</p> : <p>Gebühren: {receiveFee} €</p>}
                </div>}
                <p>Gebührenrate: {fee[feeRate].Gebühr} %</p>
                <p>Festgebühr: {fee[feeRate].Festgebühr} €</p>
                <h3>devInfo</h3>
            </div>
        </div>
    )
}

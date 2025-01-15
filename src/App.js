import './App.css';

let resultFee = 0;
let resultTotal = 0;


const handleSubmit = (event) => {
  alert("test")
  event.preventDefault()
  resultFee = 12
  console.log(resultFee)
}

function App() {
  return (
    <div className="App">
      <h1>PayPal Gebührenrechner</h1>
      <form onSubmit={handleSubmit}>
        <label for="inputNum">Betrag:</label>
        <input id='inputNum' type='number' />
        <fieldset>
          <legend>Type</legend>
          <div>
            <label for="feeRadio">Gebühren berechnen</label>
            <input type='radio' id='feeRadio' value="feeRadio" name='selectCalc' />
          </div>
          <div>
            <label for="totalRadio">Endsumme berechnen</label>
            <input type='radio' id='totalRadio' value="totalRadio" name='selectCalc'/>
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
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import "./components/InputField.jsx";
import InputField from "./components/InputField.jsx";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  // Current Date,Month,Year Config
  const currentDate = new Date()
  currentDate.setDate(currentDate.getDate()-1);
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth()+1;
  const date = currentDate.getDate();
  
  const finalDate = `${year}.${month}.${date}`;


  const currencyInfo = useCurrencyInfo(from, finalDate);
  const options = Object.keys(currencyInfo);

  // Swapping From & To
  const currencySwap = () => {
    setFrom(to);
    setTo(from);
    // Clearing Amount Value
    setAmount(0);
  };

  // Converting (e.g. USD to INR)
  const convert = () => {
    let finalAmount = amount * currencyInfo[to];
    setConvertedAmount(finalAmount.toFixed(2));
  };

  // From & To Change w/ onCurrencyChange
  const onFromChange = (value) => {
    setFrom(value);
  };
  const onToChange = (value) => {
    setTo(value);
  };
  return (
    <>
      <div>
        <h1 className="text-6xl font-bold text-center text-orange-300 mb-5">
          Currency Converter
        </h1>
        <div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div>
              <InputField
                label={"From"}
                amount={amount}
                currencyOptions={options}
                selectCurrency={from}
                onAmountChange={(newAmount) => setAmount(newAmount)}
                onCurrencyChange={onFromChange}
              />
            </div>
            <div>
              <button
                onClick={currencySwap}
                className="bg-blue-500 rounded-lg px-2 py-2"
              >
                Swap
              </button>
            </div>
            <div>
              <InputField
                label={"To"}
                amount={convertedAmount}
                currencyOptions={options}
                selectCurrency={to}
                onCurrencyChange={onToChange}
                amountDisable={true}
              />
            </div>
            <div>
              <button
                type="submit"
                onClick={convert}
                className=" bg-blue-600 rounded-lg px-2 py-2"
              >
                Convert
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;

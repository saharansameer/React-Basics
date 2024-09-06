import React from "react";

function InputField({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  selectCurrency = "usd",
  amountDisable = false,
  currencyOptions = [],
}) {
  return (
    <>
      <div className="flex bg-white rounded-xl p-4">
        <div className="w-1/2">
          <p className="mb-2 block">{label}</p>
          <input
            type="number"
            className="outline-none bg-transparent py-1"
            placeholder="amount"
            value={amount}
            onChange={(e) =>
              onAmountChange && onAmountChange(Number(e.target.value))
            }
            disabled={amountDisable}
          />
        </div>
        <div className="w-1/2 flex justify-end text-right flex-col">
          <p className="">Currency Type</p>
          <select
            className="px-2 py-2 outline-none rounded-lg cursor-pointer"
            value={selectCurrency}
            onChange={(e) =>
              onCurrencyChange && onCurrencyChange(e.target.value)
            }
          >
            {currencyOptions.map((currency) => {
              return (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    </>
  );
}

export default InputField;

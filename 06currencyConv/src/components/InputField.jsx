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
            type="text"
            className="w-full outline-none bg-transparent p-2 shadow-sm shadow-gray-400 rounded-md"
            placeholder="amount"
            value={amount}
            onChange={(e) =>
              onAmountChange && onAmountChange(e.target.value)
            }
            disabled={amountDisable}
          />
        </div>
        <div className="w-1/2 flex items-end flex-col">
          <p className="mb-2">Currency Type</p>
          <select
            className="w-1/2 px-2 py-2 outline-none rounded-lg cursor-pointer"
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

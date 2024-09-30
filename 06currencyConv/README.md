# Currency Converter

This project allows users to convert currencies. The conversion rates are fetched from a live <a href="https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/" target="_blank">`API`</a> that updates daily. The project includes a swap functionality to switch between the selected currencies, and two select menus to choose the currencies for conversion.

## Features

- **Real-Time Conversion**: Conversion rates are fetched from an API that updates daily, ensuring accurate and up-to-date rates.
- **Swap Functionality**: Easily swap between the two selected currencies to reverse the conversion.
- **Select Menus**: Choose the base currency and target currency from two dropdowns to see the conversion rate.

## Hooks Used

- **useState**: To manage the state of the selected currencies and conversion rates.
- **useCurrencyInfo**: A custom hook that fetches conversion rates for the selected currency from the API. The API data includes conversion rates to all other currencies.

---

**Deployed:** <a href="https://react-06currencyconv.vercel.app/" target="_blank">`Click me to visit`</a>

import { useState } from 'react'
import './App.css'
import useCurrency from './hooks/customHook'
import InputBox from './components/InputBox'

function App() {
  const[amount, setAmount] = useState(0)
  const[convertedAmount, setConvertedAmount] = useState(0)
  const[from, setFrom] = useState('usd')
  const[to, setTo] = useState('inr')

  const currencyRateData = useCurrency(from)

  const options = Object.keys(currencyRateData)

  const currencyConverter = () => {
    setConvertedAmount(amount * currencyRateData[to])
  }

  const handleSwap = () => {
    
  }

    return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://images.pexels.com/photos/730564/pexels-photo-730564.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
            }}
        >
          <div className="w-full">
              <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                  <form
                      onSubmit={(e) => {
                          e.preventDefault();
                          currencyConverter();
                      }}
                  >
                      <div className="w-full mb-1">
                          <InputBox
                              label="From"
                              amount={amount}
                              onAmountChange={setAmount}
                              currency={from}
                              onCurrencyChange={setFrom}
                              currencyOptions={options}
                          />
                      </div>
                      <div className="relative w-full h-0.5">
                          <button
                              type="button"
                              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                              
                          >
                              swap
                          </button>
                      </div>
                      <div className="w-full mt-1 mb-4">
                          <InputBox
                              label="To"
                              amount={convertedAmount}
                              onAmountChange={setConvertedAmount}
                              currency={to}
                              onCurrencyChange={setTo}
                              currencyOptions={options}
                              amountDisable={true}
                          />
                      </div>
                      <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                          Convert 
                      </button>
                  </form>
              </div>
          </div>
      </div>
  );
}

export default App

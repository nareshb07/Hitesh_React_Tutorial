import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import InputBox from '/components/InputBox'; 
import useCurrencyHook from '../hooks/useCurrencyHook';

function App() {
  const [amount, setAmount] = useState();
  const [from, setFrom] = useState('usd'); 
  const [to, setTo] = useState('inr');
  const [convertedAmount, setConvertedAmount] = useState(); 

  const currencyInfo = useCurrencyHook(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  }

  const convert = () => {
    
    if (currencyInfo[to]) {
      setConvertedAmount(amount * currencyInfo[to]);
    } else {
      console.error("Invalid currency data or selection.");
    }
  };
  

  return (
    <>
      <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat font-bold"
        style={{ backgroundImage: `url(https://www.pexels.com/video/a-close-up-shot-of-a-pile-of-money-5466776/)` }}
      >
        <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-300 rounded-lg p-4 backdrop-blur-sm bg-white/30">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                convert()
              }}
            >
              <div className="w-full mb-1">
                <InputBox
                  label="from"
                  amount={amount}
                  onAmountChange={(amount) => setAmount(amount)}
                  currencyOption={options}
                  onCurrencyChange={(currency) => setAmount(amount)}
                  selectedCurrency={from}
                />
              </div>

              <div className="relative w-full h-0.5">
                <button
                  className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 border-2 border-white rounded-lg bg-blue-200 text-white px-2 py-0.5"
                  onClick={swap}
                >
                  Swap
                </button>
              </div>

              <div className="w-full mb-1">
                <InputBox
                  label="to"
                  amount={convertedAmount}
                  amountDisabled={true}
                  // onAmountChange={(amount) => setConvertedAmount(convertedAmount)}
                  currencyOption={options}
                  onCurrencyChange={(currency) => setTo(currency)}
                  selectedCurrency={to}
                />
              </div>

              {/* Uncomment this button to enable conversion */}
              <button  type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                Convert</button>
            </form>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default App;

import React, { useState } from 'react';
import { DollarSign, ArrowRightLeft } from 'lucide-react';

const TradingForm: React.FC = () => {
  const [amount, setAmount] = useState('');
  const [position, setPosition] = useState('buy');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle trade execution here
    console.log('Trade executed:', { amount, position });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-800">Execute Trade</h2>
        <ArrowRightLeft className="text-blue-600 w-6 h-6" />
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Position Type
          </label>
          <div className="flex space-x-4">
            <button
              type="button"
              onClick={() => setPosition('buy')}
              className={`flex-1 py-2 px-4 rounded-lg ${
                position === 'buy'
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-100 text-gray-700'
              }`}
            >
              Buy
            </button>
            <button
              type="button"
              onClick={() => setPosition('sell')}
              className={`flex-1 py-2 px-4 rounded-lg ${
                position === 'sell'
                  ? 'bg-red-500 text-white'
                  : 'bg-gray-100 text-gray-700'
              }`}
            >
              Sell
            </button>
          </div>
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Amount (XUSD)
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <DollarSign className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter amount"
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Execute Trade
        </button>
      </form>
    </div>
  );
};

export default TradingForm;
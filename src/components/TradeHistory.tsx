import React from 'react';
import { Clock, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const TradeHistory: React.FC = () => {
  const trades = [
    { id: 1, type: 'buy', amount: 1000, price: 2030.25, time: '2 min ago' },
    { id: 2, type: 'sell', amount: 500, price: 2032.50, time: '5 min ago' },
    { id: 3, type: 'buy', amount: 750, price: 2028.75, time: '10 min ago' },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-800">Recent Trades</h2>
        <Clock className="text-gray-600 w-6 h-6" />
      </div>
      <div className="space-y-4">
        {trades.map((trade) => (
          <div
            key={trade.id}
            className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
          >
            <div className="flex items-center space-x-3">
              {trade.type === 'buy' ? (
                <ArrowUpRight className="w-5 h-5 text-green-500" />
              ) : (
                <ArrowDownRight className="w-5 h-5 text-red-500" />
              )}
              <div>
                <p className="font-semibold text-gray-800">
                  {trade.type.toUpperCase()} {trade.amount} XUSD
                </p>
                <p className="text-sm text-gray-500">${trade.price}</p>
              </div>
            </div>
            <span className="text-sm text-gray-500">{trade.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TradeHistory;
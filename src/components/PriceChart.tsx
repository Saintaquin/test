import React from 'react';
import { LineChart, TrendingUp } from 'lucide-react';

const PriceChart: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-800">Gold/XUSD Price Chart</h2>
        <LineChart className="text-yellow-600 w-6 h-6" />
      </div>
      <div className="flex items-center space-x-4 mb-4">
        <span className="text-3xl font-bold text-gray-900">$2,034.50</span>
        <span className="text-green-500 flex items-center">
          <TrendingUp className="w-4 h-4 mr-1" />
          +1.2%
        </span>
      </div>
      <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
        <p className="text-gray-500">Chart visualization would go here</p>
      </div>
    </div>
  );
};

export default PriceChart;
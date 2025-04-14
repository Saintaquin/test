import { useEffect, useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

interface PriceData {
  price: number;
  timestamp: string;
}

export const GoldPriceChart = () => {
  const [priceData, setPriceData] = useState<PriceData[]>([]);

  const fetchGoldPrice = async () => {
    try {
      const response = await fetch('http://localhost:8000/gold-price');
      const data = await response.json();
      setPriceData(prev => [...prev, data].slice(-50)); // Keep last 50 points
    } catch (error) {
      console.error('Error fetching gold price:', error);
    }
  };

  useEffect(() => {
    // Initial fetch
    fetchGoldPrice();

    // Set up interval for real-time updates
    const interval = setInterval(fetchGoldPrice, 5000); // Update every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString();
  };

  return (
    <div className="w-full h-[400px] p-4 bg-white rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Gold/USD Real-Time Price</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={priceData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="timestamp"
            tickFormatter={formatTimestamp}
            interval="preserveStartEnd"
          />
          <YAxis
            domain={['auto', 'auto']}
            tickFormatter={(value) => `$${value.toFixed(2)}`}
          />
          <Tooltip
            labelFormatter={formatTimestamp}
            formatter={(value: number) => [`$${value.toFixed(2)}`, 'Price']}
          />
          <Line
            type="monotone"
            dataKey="price"
            stroke="#FFD700"
            strokeWidth={2}
            dot={false}
            animationDuration={300}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

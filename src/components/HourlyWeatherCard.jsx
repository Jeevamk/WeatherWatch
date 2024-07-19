import React from 'react';

const HourlyWeatherCard = ({ hourlyData }) => {
  return (
    <div className="bg-yellow-600 bg-opacity-50  text-white rounded-xl p-6 m-4 shadow-md w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-2/4">
      <div className="flex justify-around">
        {hourlyData.map((hour, index) => (
          <div key={index} className="flex flex-col items-center">
            <p className="mb-2">{hour.time}</p>
            <p className="mb-2">{hour.temp}°</p>
            <img src={`/images/${hour.icon}.png`} alt="weather icon" className="w-8 h-8" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HourlyWeatherCard;

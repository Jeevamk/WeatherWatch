import React from 'react';

const WeatherCard = ({temperature , description ,timezone,date,feelsLike,icon ,sunset}) => {
  return (
    <div className="bg-yellow-900 bg-opacity-30 rounded-xl p-6 m-4 shadow-md flex flex-col items-center w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4">
      <div className="weather-icon mb-4">
        <img src={icon} alt="weather icon" className="w-12 h-12" />
      </div>
      <div className="weather-details text-center">
        <h2 className="text-6xl  font-bold mb-2">{temperature}</h2>
        <p className="text-2xl mb-2">{description}</p>
        <p className="text-md mb-2">{timezone}</p>
        <p className="text-md mb-2">{date}</p>
        <p className="text-sm">Feels Like {feelsLike} | Sunset {sunset}</p>
      </div>
    </div>
  );
};

export default WeatherCard;

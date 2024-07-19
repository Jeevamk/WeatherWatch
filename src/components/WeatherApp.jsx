

import React, { useEffect, useState } from 'react';
import Background from './Background';
import WeatherCard from './WeatherCard';
import HourlyWeatherCard from './HourlyWeatherCard';

const WeatherApp = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchWeatherData = async () => {
            try {
                const response = await fetch('http://localhost:5001/');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setWeatherData(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchWeatherData();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    const hourlyData = weatherData?.hourly.slice(0, 6) || [];    
    const weatherDetails = weatherData?.current || {};
    const weatherDatas = weatherData

    return (
        <>
            <Background />
            <div className="flex flex-col md:flex-row justify-center items-center w-full h-screen p-4">
                <div className="flex flex-col md:flex-row justify-center items-center w-full ">
                    <WeatherCard
                        temperature={weatherDetails.temp}
                        description={weatherDetails.weather[0].main}
                        icon={weatherDetails.weather[0].icon}
                        timezone={weatherDatas.timezone}
                        date={new Date().toLocaleDateString()}
                        feelsLike={weatherDetails.feels_like}
                        sunset={weatherDetails.sunset}
                    />
                    <HourlyWeatherCard hourlyData={hourlyData.map(hour => ({
                        time: new Date(hour.dt * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                        temp: hour.temp,
                        icon: hour.weather[0].icon
                    }))} />
                </div>
            </div>
        </>
    );
};

export default WeatherApp;

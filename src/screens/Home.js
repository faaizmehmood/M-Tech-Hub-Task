import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import axios from 'axios';

const API_KEY = 'MSAW2JF27KYJYZP29VZLCFZDL';

const Home = () => {
    const [weatherData, setWeatherData] = useState({
        pakistan: null,
        us: null,
    });
    const [isFahrenheit, setIsFahrenheit] = useState(true);
    const [order, setOrder] = useState(['pakistan', 'us']);

    const fetchWeatherData = async (city) => {
        try {
            const unit = isFahrenheit ? 'us' : 'metric';
            const response = await axios.get(
                `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=${unit}&key=${API_KEY}&contentType=json`
            );
            return response.data;
        } catch (error) {
            console.log('Error in weatherApi', error);
        }
    };

    const loadWeatherData = async () => {
        const pakistanWeather = await fetchWeatherData('Islamabad');
        const usWeather = await fetchWeatherData('Washington,DC');
        setWeatherData({
            pakistan: pakistanWeather,
            us: usWeather,
        });
    };

    useEffect(() => {
        loadWeatherData();
    }, [isFahrenheit]);

    const toggleOrder = () => {
        setOrder((prevOrder) => [prevOrder[1], prevOrder[0]]);
    };

    const toggleTemperatureUnit = () => {
        setIsFahrenheit((prev) => !prev);
    };

    const handleButtonClick = () => {
        toggleOrder();
        toggleTemperatureUnit();
    };

    const renderWeatherView = (location) => {
        const data = weatherData[location];
        if (!data) return <Text>Loading...</Text>;

        const temp = isFahrenheit ? data?.currentConditions?.temp : data.currentConditions?.temp;

        return (
            <View style={styles.weatherView}>
                <Text style={styles.cityName}>{data?.address}</Text>
                <Text style={styles.temperature}>
                    {temp}° {isFahrenheit ? 'F' : 'C'}
                </Text>
                <Text style={styles?.description}>{data?.currentConditions?.conditions}</Text>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            {renderWeatherView(order[0])}
            {renderWeatherView(order[1])}
            <Button title="Shuffle & Toggle Unit" onPress={handleButtonClick} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    weatherView: {
        marginBottom: 20,
        padding: 20,
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
        width: '80%',
        alignItems: 'center',
    },
    cityName: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    temperature: {
        fontSize: 18,
    },
    description: {
        fontSize: 16,
        fontStyle: 'italic',
    },
});

export default Home;

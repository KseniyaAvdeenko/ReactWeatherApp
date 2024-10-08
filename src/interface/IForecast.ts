export interface ILocation {
    name: string
    region: string
    country: string
    lat: number;
    lon: number;
    tz_id: string
    localtime: string
}

export interface IForecast {
    location: ILocation;
}

export interface ICondition {
    text: string;
    icon?: string;
    code: number;
}

export interface ICurrent {
    last_updated: string;
    temp_c: number;
    temp_f: number;
    condition: ICondition;
    feelslike_c: number;
    feelslike_f: number;
    dewpoint_c: number;
    dewpoint_f: number;
    humidity: number;
    wind_dir: string;
    wind_degree: number;
    cloud: number;
    uv: number;
    wind_mph: number;
    wind_kph: number;
    vis_km: number;
    vis_miles: number;
    pressure_in: number;
    pressure_mb: number;
    gust_kph: number;
    gust_mph: number;
    heatindex_c: number;
    heatindex_f: number;
    precip_in: number;
    precip_mm: number;
    windchill_c: number;
    windchill_f: number;
    is_day: Available.YES | Available.NO;
}


export interface ICurrentForecast extends IForecast {
    current: ICurrent
}

export enum Available {
    NO = 0, YES = 1
}

export interface IAstronomy {
    sunrise: string
    sunset: string
    moonrise: string
    moonset: string
    moon_phase: string;
    moon_illumination: number
}

export interface IDay {
    maxtemp_c: number;
    maxtemp_f: number;
    mintemp_c: number;
    mintemp_f: number;
    avgtemp_c: number;
    avgtemp_f: number;
    avghumidity: number;
    avgvis_km: number;
    avgvis_miles: number;
    daily_will_it_rain: Available.YES | Available.NO;
    daily_chance_of_rain: Available.YES | Available.NO;
    daily_will_it_snow: Available.YES | Available.NO;
    daily_chance_of_snow: Available.YES | Available.NO;
    condition: ICondition;
    uv: number
}


export interface IHour {
    time: string
    temp_c: number;
    temp_f: number;
    condition: ICondition;
    is_day: Available.YES | Available.NO;
    wind_dir: string;
    uv: number;
    humidity: number;
    feelslike_c: number;
    feelslike_f: number;
}

export interface IForecastDay {
    date: string;
    day: IDay;
    astro: IAstronomy;
    hour: IHour[]
}

export interface IForecastByDay extends ICurrentForecast {
    forecast: {
        forecastday: IForecastDay[]
    }
}

let f1day = {
    "location": {
        "name": "Jarmaki",
        "region": "Mahilyowskaya Voblasts'",
        "country": "Belarus",
        "lat": 54.12,
        "lon": 26.75,
        "tz_id": "Europe/Minsk",
        "localtime_epoch": 1721819330,
        "localtime": "2024-07-24 14:08"
    },
    "current": {
        "last_updated_epoch": 1721818800,
        "last_updated": "2024-07-24 14:00",
        "temp_c": 25.4,
        "temp_f": 77.8,
        "is_day": 1,
        "condition": {
            "text": "Partly Cloudy",
            "icon": "//cdn.weatherapi.com/weather/64x64/day/116.png",
            "code": 1003
        },
        "wind_mph": 5.4,
        "wind_kph": 8.6,
        "wind_degree": 152,
        "wind_dir": "SSE",
        "pressure_mb": 1012,
        "pressure_in": 29.89,
        "precip_mm": 0,
        "precip_in": 0,
        "humidity": 45,
        "cloud": 38,
        "feelslike_c": 25.9,
        "feelslike_f": 78.6,
        "windchill_c": 25.4,
        "windchill_f": 77.8,
        "heatindex_c": 25.9,
        "heatindex_f": 78.6,
        "dewpoint_c": 12.6,
        "dewpoint_f": 54.7,
        "vis_km": 10,
        "vis_miles": 6,
        "uv": 7,
        "gust_mph": 6.2,
        "gust_kph": 10
    },
    "forecast": {
        "forecastday": [
            {
                "date": "2024-07-24",
                "date_epoch": 1721779200,
                "day": {
                    "maxtemp_c": 25.4,
                    "maxtemp_f": 77.6,
                    "mintemp_c": 18.6,
                    "mintemp_f": 65.5,
                    "avgtemp_c": 21.1,
                    "avgtemp_f": 70,
                    "maxwind_mph": 6,
                    "maxwind_kph": 9.7,
                    "totalprecip_mm": 0,
                    "totalprecip_in": 0,
                    "totalsnow_cm": 0,
                    "avgvis_km": 10,
                    "avgvis_miles": 6,
                    "avghumidity": 65,
                    "daily_will_it_rain": 0,
                    "daily_chance_of_rain": 0,
                    "daily_will_it_snow": 0,
                    "daily_chance_of_snow": 0,
                    "condition": {
                        "text": "Sunny",
                        "icon": "//cdn.weatherapi.com/weather/64x64/day/113.png",
                        "code": 1000
                    },
                    "uv": 6
                },
                "astro": {
                    "sunrise": "05:12 AM",
                    "sunset": "09:26 PM",
                    "moonrise": "10:56 PM",
                    "moonset": "08:54 AM",
                    "moon_phase": "Waning Gibbous",
                    "moon_illumination": 91,
                    "is_moon_up": 1,
                    "is_sun_up": 0
                },
                "hour": [
                    {
                        "time_epoch": 1721768400,
                        "time": "2024-07-24 00:00",
                        "temp_c": 19.2,
                        "temp_f": 66.5,
                        "is_day": 0,
                        "condition": {
                            "text": "Clear ",
                            "icon": "//cdn.weatherapi.com/weather/64x64/night/113.png",
                            "code": 1000
                        },
                        "wind_mph": 4.7,
                        "wind_kph": 7.6,
                        "wind_degree": 149,
                        "wind_dir": "SSE",
                        "pressure_mb": 1014,
                        "pressure_in": 29.93,
                        "precip_mm": 0,
                        "precip_in": 0,
                        "snow_cm": 0,
                        "humidity": 70,
                        "cloud": 21,
                        "feelslike_c": 19.2,
                        "feelslike_f": 66.5,
                        "windchill_c": 19.2,
                        "windchill_f": 66.5,
                        "heatindex_c": 19.2,
                        "heatindex_f": 66.5,
                        "dewpoint_c": 13.5,
                        "dewpoint_f": 56.3,
                        "will_it_rain": 0,
                        "chance_of_rain": 0,
                        "will_it_snow": 0,
                        "chance_of_snow": 0,
                        "vis_km": 10,
                        "vis_miles": 6,
                        "gust_mph": 9.5,
                        "gust_kph": 15.3,
                        "uv": 0
                    },
                    {
                        "time_epoch": 1721772000,
                        "time": "2024-07-24 01:00",
                        "temp_c": 19.1,
                        "temp_f": 66.5,
                        "is_day": 0,
                        "condition": {
                            "text": "Clear ",
                            "icon": "//cdn.weatherapi.com/weather/64x64/night/113.png",
                            "code": 1000
                        },
                        "wind_mph": 4.7,
                        "wind_kph": 7.6,
                        "wind_degree": 152,
                        "wind_dir": "SSE",
                        "pressure_mb": 1014,
                        "pressure_in": 29.93,
                        "precip_mm": 0,
                        "precip_in": 0,
                        "snow_cm": 0,
                        "humidity": 70,
                        "cloud": 20,
                        "feelslike_c": 19.1,
                        "feelslike_f": 66.5,
                        "windchill_c": 19.1,
                        "windchill_f": 66.5,
                        "heatindex_c": 19.1,
                        "heatindex_f": 66.5,
                        "dewpoint_c": 13.5,
                        "dewpoint_f": 56.3,
                        "will_it_rain": 0,
                        "chance_of_rain": 0,
                        "will_it_snow": 0,
                        "chance_of_snow": 0,
                        "vis_km": 10,
                        "vis_miles": 6,
                        "gust_mph": 9.3,
                        "gust_kph": 15,
                        "uv": 0
                    },
                    {
                        "time_epoch": 1721775600,
                        "time": "2024-07-24 02:00",
                        "temp_c": 19.1,
                        "temp_f": 66.3,
                        "is_day": 0,
                        "condition": {
                            "text": "Clear ",
                            "icon": "//cdn.weatherapi.com/weather/64x64/night/113.png",
                            "code": 1000
                        },
                        "wind_mph": 4.5,
                        "wind_kph": 7.2,
                        "wind_degree": 167,
                        "wind_dir": "SSE",
                        "pressure_mb": 1014,
                        "pressure_in": 29.93,
                        "precip_mm": 0,
                        "precip_in": 0,
                        "snow_cm": 0,
                        "humidity": 69,
                        "cloud": 20,
                        "feelslike_c": 19.1,
                        "feelslike_f": 66.3,
                        "windchill_c": 19.1,
                        "windchill_f": 66.3,
                        "heatindex_c": 19.1,
                        "heatindex_f": 66.3,
                        "dewpoint_c": 13.4,
                        "dewpoint_f": 56,
                        "will_it_rain": 0,
                        "chance_of_rain": 0,
                        "will_it_snow": 0,
                        "chance_of_snow": 0,
                        "vis_km": 10,
                        "vis_miles": 6,
                        "gust_mph": 8.8,
                        "gust_kph": 14.1,
                        "uv": 0
                    },
                    {
                        "time_epoch": 1721779200,
                        "time": "2024-07-24 03:00",
                        "temp_c": 18.8,
                        "temp_f": 65.8,
                        "is_day": 0,
                        "condition": {
                            "text": "Clear ",
                            "icon": "//cdn.weatherapi.com/weather/64x64/night/113.png",
                            "code": 1000
                        },
                        "wind_mph": 3.8,
                        "wind_kph": 6.1,
                        "wind_degree": 179,
                        "wind_dir": "S",
                        "pressure_mb": 1013,
                        "pressure_in": 29.92,
                        "precip_mm": 0,
                        "precip_in": 0,
                        "snow_cm": 0,
                        "humidity": 70,
                        "cloud": 20,
                        "feelslike_c": 18.8,
                        "feelslike_f": 65.8,
                        "windchill_c": 18.8,
                        "windchill_f": 65.8,
                        "heatindex_c": 18.8,
                        "heatindex_f": 65.8,
                        "dewpoint_c": 13.1,
                        "dewpoint_f": 55.6,
                        "will_it_rain": 0,
                        "chance_of_rain": 0,
                        "will_it_snow": 0,
                        "chance_of_snow": 0,
                        "vis_km": 10,
                        "vis_miles": 6,
                        "gust_mph": 7.4,
                        "gust_kph": 12,
                        "uv": 0
                    },
                    {
                        "time_epoch": 1721782800,
                        "time": "2024-07-24 04:00",
                        "temp_c": 18.6,
                        "temp_f": 65.5,
                        "is_day": 0,
                        "condition": {
                            "text": "Clear ",
                            "icon": "//cdn.weatherapi.com/weather/64x64/night/113.png",
                            "code": 1000
                        },
                        "wind_mph": 3.4,
                        "wind_kph": 5.4,
                        "wind_degree": 163,
                        "wind_dir": "SSE",
                        "pressure_mb": 1013,
                        "pressure_in": 29.92,
                        "precip_mm": 0,
                        "precip_in": 0,
                        "snow_cm": 0,
                        "humidity": 70,
                        "cloud": 20,
                        "feelslike_c": 18.6,
                        "feelslike_f": 65.5,
                        "windchill_c": 18.6,
                        "windchill_f": 65.5,
                        "heatindex_c": 18.6,
                        "heatindex_f": 65.5,
                        "dewpoint_c": 12.9,
                        "dewpoint_f": 55.3,
                        "will_it_rain": 0,
                        "chance_of_rain": 0,
                        "will_it_snow": 0,
                        "chance_of_snow": 0,
                        "vis_km": 10,
                        "vis_miles": 6,
                        "gust_mph": 6.5,
                        "gust_kph": 10.5,
                        "uv": 0
                    },
                    {
                        "time_epoch": 1721786400,
                        "time": "2024-07-24 05:00",
                        "temp_c": 18.6,
                        "temp_f": 65.5,
                        "is_day": 0,
                        "condition": {
                            "text": "Clear ",
                            "icon": "//cdn.weatherapi.com/weather/64x64/night/113.png",
                            "code": 1000
                        },
                        "wind_mph": 4,
                        "wind_kph": 6.5,
                        "wind_degree": 137,
                        "wind_dir": "SE",
                        "pressure_mb": 1013,
                        "pressure_in": 29.92,
                        "precip_mm": 0,
                        "precip_in": 0,
                        "snow_cm": 0,
                        "humidity": 71,
                        "cloud": 20,
                        "feelslike_c": 18.6,
                        "feelslike_f": 65.5,
                        "windchill_c": 18.6,
                        "windchill_f": 65.5,
                        "heatindex_c": 18.6,
                        "heatindex_f": 65.5,
                        "dewpoint_c": 13.3,
                        "dewpoint_f": 56,
                        "will_it_rain": 0,
                        "chance_of_rain": 0,
                        "will_it_snow": 0,
                        "chance_of_snow": 0,
                        "vis_km": 10,
                        "vis_miles": 6,
                        "gust_mph": 7.7,
                        "gust_kph": 12.4,
                        "uv": 0
                    },
                    {
                        "time_epoch": 1721790000,
                        "time": "2024-07-24 06:00",
                        "temp_c": 18.7,
                        "temp_f": 65.7,
                        "is_day": 1,
                        "condition": {
                            "text": "Sunny",
                            "icon": "//cdn.weatherapi.com/weather/64x64/day/113.png",
                            "code": 1000
                        },
                        "wind_mph": 4.9,
                        "wind_kph": 7.9,
                        "wind_degree": 137,
                        "wind_dir": "SE",
                        "pressure_mb": 1013,
                        "pressure_in": 29.91,
                        "precip_mm": 0,
                        "precip_in": 0,
                        "snow_cm": 0,
                        "humidity": 74,
                        "cloud": 17,
                        "feelslike_c": 18.7,
                        "feelslike_f": 65.7,
                        "windchill_c": 18.7,
                        "windchill_f": 65.7,
                        "heatindex_c": 18.7,
                        "heatindex_f": 65.7,
                        "dewpoint_c": 13.9,
                        "dewpoint_f": 57.1,
                        "will_it_rain": 0,
                        "chance_of_rain": 0,
                        "will_it_snow": 0,
                        "chance_of_snow": 0,
                        "vis_km": 10,
                        "vis_miles": 6,
                        "gust_mph": 9.2,
                        "gust_kph": 14.8,
                        "uv": 5
                    },
                    {
                        "time_epoch": 1721793600,
                        "time": "2024-07-24 07:00",
                        "temp_c": 19.5,
                        "temp_f": 67.2,
                        "is_day": 1,
                        "condition": {
                            "text": "Sunny",
                            "icon": "//cdn.weatherapi.com/weather/64x64/day/113.png",
                            "code": 1000
                        },
                        "wind_mph": 4.9,
                        "wind_kph": 7.9,
                        "wind_degree": 150,
                        "wind_dir": "SSE",
                        "pressure_mb": 1013,
                        "pressure_in": 29.91,
                        "precip_mm": 0,
                        "precip_in": 0,
                        "snow_cm": 0,
                        "humidity": 73,
                        "cloud": 18,
                        "feelslike_c": 19.5,
                        "feelslike_f": 67.2,
                        "windchill_c": 19.5,
                        "windchill_f": 67.2,
                        "heatindex_c": 19.5,
                        "heatindex_f": 67.2,
                        "dewpoint_c": 14.7,
                        "dewpoint_f": 58.4,
                        "will_it_rain": 0,
                        "chance_of_rain": 0,
                        "will_it_snow": 0,
                        "chance_of_snow": 0,
                        "vis_km": 10,
                        "vis_miles": 6,
                        "gust_mph": 8.2,
                        "gust_kph": 13.2,
                        "uv": 5
                    },
                    {
                        "time_epoch": 1721797200,
                        "time": "2024-07-24 08:00",
                        "temp_c": 20.6,
                        "temp_f": 69,
                        "is_day": 1,
                        "condition": {
                            "text": "Sunny",
                            "icon": "//cdn.weatherapi.com/weather/64x64/day/113.png",
                            "code": 1000
                        },
                        "wind_mph": 5.1,
                        "wind_kph": 8.3,
                        "wind_degree": 169,
                        "wind_dir": "S",
                        "pressure_mb": 1013,
                        "pressure_in": 29.91,
                        "precip_mm": 0,
                        "precip_in": 0,
                        "snow_cm": 0,
                        "humidity": 70,
                        "cloud": 19,
                        "feelslike_c": 20.6,
                        "feelslike_f": 69,
                        "windchill_c": 20.6,
                        "windchill_f": 69,
                        "heatindex_c": 20.6,
                        "heatindex_f": 69,
                        "dewpoint_c": 14.8,
                        "dewpoint_f": 58.7,
                        "will_it_rain": 0,
                        "chance_of_rain": 0,
                        "will_it_snow": 0,
                        "chance_of_snow": 0,
                        "vis_km": 10,
                        "vis_miles": 6,
                        "gust_mph": 7.4,
                        "gust_kph": 11.9,
                        "uv": 6
                    },
                    {
                        "time_epoch": 1721800800,
                        "time": "2024-07-24 09:00",
                        "temp_c": 21.2,
                        "temp_f": 70.1,
                        "is_day": 1,
                        "condition": {
                            "text": "Sunny",
                            "icon": "//cdn.weatherapi.com/weather/64x64/day/113.png",
                            "code": 1000
                        },
                        "wind_mph": 5.4,
                        "wind_kph": 8.6,
                        "wind_degree": 180,
                        "wind_dir": "S",
                        "pressure_mb": 1013,
                        "pressure_in": 29.92,
                        "precip_mm": 0,
                        "precip_in": 0,
                        "snow_cm": 0,
                        "humidity": 66,
                        "cloud": 18,
                        "feelslike_c": 21.2,
                        "feelslike_f": 70.1,
                        "windchill_c": 21.2,
                        "windchill_f": 70.1,
                        "heatindex_c": 24.4,
                        "heatindex_f": 76,
                        "dewpoint_c": 14.6,
                        "dewpoint_f": 58.2,
                        "will_it_rain": 0,
                        "chance_of_rain": 0,
                        "will_it_snow": 0,
                        "chance_of_snow": 0,
                        "vis_km": 10,
                        "vis_miles": 6,
                        "gust_mph": 7.1,
                        "gust_kph": 11.4,
                        "uv": 6
                    },
                    {
                        "time_epoch": 1721804400,
                        "time": "2024-07-24 10:00",
                        "temp_c": 21.7,
                        "temp_f": 71,
                        "is_day": 1,
                        "condition": {
                            "text": "Sunny",
                            "icon": "//cdn.weatherapi.com/weather/64x64/day/113.png",
                            "code": 1000
                        },
                        "wind_mph": 5.4,
                        "wind_kph": 8.6,
                        "wind_degree": 178,
                        "wind_dir": "S",
                        "pressure_mb": 1013,
                        "pressure_in": 29.92,
                        "precip_mm": 0,
                        "precip_in": 0,
                        "snow_cm": 0,
                        "humidity": 63,
                        "cloud": 17,
                        "feelslike_c": 21.7,
                        "feelslike_f": 71,
                        "windchill_c": 21.7,
                        "windchill_f": 71,
                        "heatindex_c": 24.5,
                        "heatindex_f": 76.1,
                        "dewpoint_c": 14.3,
                        "dewpoint_f": 57.7,
                        "will_it_rain": 0,
                        "chance_of_rain": 0,
                        "will_it_snow": 0,
                        "chance_of_snow": 0,
                        "vis_km": 10,
                        "vis_miles": 6,
                        "gust_mph": 6.8,
                        "gust_kph": 11,
                        "uv": 6
                    },
                    {
                        "time_epoch": 1721808000,
                        "time": "2024-07-24 11:00",
                        "temp_c": 23.1,
                        "temp_f": 73.6,
                        "is_day": 1,
                        "condition": {
                            "text": "Sunny",
                            "icon": "//cdn.weatherapi.com/weather/64x64/day/113.png",
                            "code": 1000
                        },
                        "wind_mph": 5.6,
                        "wind_kph": 9,
                        "wind_degree": 165,
                        "wind_dir": "SSE",
                        "pressure_mb": 1013,
                        "pressure_in": 29.92,
                        "precip_mm": 0,
                        "precip_in": 0,
                        "snow_cm": 0,
                        "humidity": 57,
                        "cloud": 15,
                        "feelslike_c": 24.9,
                        "feelslike_f": 76.8,
                        "windchill_c": 23.1,
                        "windchill_f": 73.6,
                        "heatindex_c": 24.9,
                        "heatindex_f": 76.8,
                        "dewpoint_c": 14.1,
                        "dewpoint_f": 57.3,
                        "will_it_rain": 0,
                        "chance_of_rain": 0,
                        "will_it_snow": 0,
                        "chance_of_snow": 0,
                        "vis_km": 10,
                        "vis_miles": 6,
                        "gust_mph": 6.5,
                        "gust_kph": 10.4,
                        "uv": 6
                    },
                    {
                        "time_epoch": 1721811600,
                        "time": "2024-07-24 12:00",
                        "temp_c": 24.4,
                        "temp_f": 75.9,
                        "is_day": 1,
                        "condition": {
                            "text": "Sunny",
                            "icon": "//cdn.weatherapi.com/weather/64x64/day/113.png",
                            "code": 1000
                        },
                        "wind_mph": 5.8,
                        "wind_kph": 9.4,
                        "wind_degree": 155,
                        "wind_dir": "SSE",
                        "pressure_mb": 1013,
                        "pressure_in": 29.91,
                        "precip_mm": 0,
                        "precip_in": 0,
                        "snow_cm": 0,
                        "humidity": 52,
                        "cloud": 14,
                        "feelslike_c": 25.5,
                        "feelslike_f": 77.8,
                        "windchill_c": 24.4,
                        "windchill_f": 75.8,
                        "heatindex_c": 25.5,
                        "heatindex_f": 77.8,
                        "dewpoint_c": 13.8,
                        "dewpoint_f": 56.8,
                        "will_it_rain": 0,
                        "chance_of_rain": 0,
                        "will_it_snow": 0,
                        "chance_of_snow": 0,
                        "vis_km": 10,
                        "vis_miles": 6,
                        "gust_mph": 6.7,
                        "gust_kph": 10.8,
                        "uv": 6
                    },
                    {
                        "time_epoch": 1721815200,
                        "time": "2024-07-24 13:00",
                        "temp_c": 25.1,
                        "temp_f": 77.2,
                        "is_day": 1,
                        "condition": {
                            "text": "Partly Cloudy ",
                            "icon": "//cdn.weatherapi.com/weather/64x64/day/116.png",
                            "code": 1003
                        },
                        "wind_mph": 5.8,
                        "wind_kph": 9.4,
                        "wind_degree": 152,
                        "wind_dir": "SSE",
                        "pressure_mb": 1012,
                        "pressure_in": 29.9,
                        "precip_mm": 0,
                        "precip_in": 0,
                        "snow_cm": 0,
                        "humidity": 47,
                        "cloud": 31,
                        "feelslike_c": 25.8,
                        "feelslike_f": 78.4,
                        "windchill_c": 25.1,
                        "windchill_f": 77.2,
                        "heatindex_c": 25.8,
                        "heatindex_f": 78.4,
                        "dewpoint_c": 13,
                        "dewpoint_f": 55.5,
                        "will_it_rain": 0,
                        "chance_of_rain": 0,
                        "will_it_snow": 0,
                        "chance_of_snow": 0,
                        "vis_km": 10,
                        "vis_miles": 6,
                        "gust_mph": 6.7,
                        "gust_kph": 10.8,
                        "uv": 7
                    },
                    {
                        "time_epoch": 1721818800,
                        "time": "2024-07-24 14:00",
                        "temp_c": 25.4,
                        "temp_f": 77.8,
                        "is_day": 1,
                        "condition": {
                            "text": "Partly Cloudy ",
                            "icon": "//cdn.weatherapi.com/weather/64x64/day/116.png",
                            "code": 1003
                        },
                        "wind_mph": 5.4,
                        "wind_kph": 8.6,
                        "wind_degree": 152,
                        "wind_dir": "SSE",
                        "pressure_mb": 1012,
                        "pressure_in": 29.89,
                        "precip_mm": 0,
                        "precip_in": 0,
                        "snow_cm": 0,
                        "humidity": 45,
                        "cloud": 38,
                        "feelslike_c": 25.9,
                        "feelslike_f": 78.6,
                        "windchill_c": 25.4,
                        "windchill_f": 77.8,
                        "heatindex_c": 25.9,
                        "heatindex_f": 78.6,
                        "dewpoint_c": 12.6,
                        "dewpoint_f": 54.7,
                        "will_it_rain": 0,
                        "chance_of_rain": 0,
                        "will_it_snow": 0,
                        "chance_of_snow": 0,
                        "vis_km": 10,
                        "vis_miles": 6,
                        "gust_mph": 6.2,
                        "gust_kph": 10,
                        "uv": 7
                    },
                    {
                        "time_epoch": 1721822400,
                        "time": "2024-07-24 15:00",
                        "temp_c": 25.1,
                        "temp_f": 77.2,
                        "is_day": 1,
                        "condition": {
                            "text": "Partly Cloudy ",
                            "icon": "//cdn.weatherapi.com/weather/64x64/day/116.png",
                            "code": 1003
                        },
                        "wind_mph": 5.4,
                        "wind_kph": 8.6,
                        "wind_degree": 138,
                        "wind_dir": "SE",
                        "pressure_mb": 1012,
                        "pressure_in": 29.88,
                        "precip_mm": 0,
                        "precip_in": 0,
                        "snow_cm": 0,
                        "humidity": 47,
                        "cloud": 31,
                        "feelslike_c": 25.8,
                        "feelslike_f": 78.4,
                        "windchill_c": 25.1,
                        "windchill_f": 77.2,
                        "heatindex_c": 25.8,
                        "heatindex_f": 78.4,
                        "dewpoint_c": 12.9,
                        "dewpoint_f": 55.3,
                        "will_it_rain": 0,
                        "chance_of_rain": 0,
                        "will_it_snow": 0,
                        "chance_of_snow": 0,
                        "vis_km": 10,
                        "vis_miles": 6,
                        "gust_mph": 6.8,
                        "gust_kph": 11,
                        "uv": 7
                    },
                    {
                        "time_epoch": 1721826000,
                        "time": "2024-07-24 16:00",
                        "temp_c": 24.3,
                        "temp_f": 75.8,
                        "is_day": 1,
                        "condition": {
                            "text": "Partly Cloudy ",
                            "icon": "//cdn.weatherapi.com/weather/64x64/day/116.png",
                            "code": 1003
                        },
                        "wind_mph": 4.7,
                        "wind_kph": 7.6,
                        "wind_degree": 111,
                        "wind_dir": "ESE",
                        "pressure_mb": 1012,
                        "pressure_in": 29.87,
                        "precip_mm": 0,
                        "precip_in": 0,
                        "snow_cm": 0,
                        "humidity": 52,
                        "cloud": 30,
                        "feelslike_c": 25.5,
                        "feelslike_f": 77.8,
                        "windchill_c": 24.3,
                        "windchill_f": 75.8,
                        "heatindex_c": 25.5,
                        "heatindex_f": 77.8,
                        "dewpoint_c": 13.8,
                        "dewpoint_f": 56.8,
                        "will_it_rain": 0,
                        "chance_of_rain": 0,
                        "will_it_snow": 0,
                        "chance_of_snow": 0,
                        "vis_km": 10,
                        "vis_miles": 6,
                        "gust_mph": 6.8,
                        "gust_kph": 10.9,
                        "uv": 6
                    },
                    {
                        "time_epoch": 1721829600,
                        "time": "2024-07-24 17:00",
                        "temp_c": 23.7,
                        "temp_f": 74.7,
                        "is_day": 1,
                        "condition": {
                            "text": "Partly Cloudy ",
                            "icon": "//cdn.weatherapi.com/weather/64x64/day/116.png",
                            "code": 1003
                        },
                        "wind_mph": 4,
                        "wind_kph": 6.5,
                        "wind_degree": 82,
                        "wind_dir": "E",
                        "pressure_mb": 1011,
                        "pressure_in": 29.87,
                        "precip_mm": 0,
                        "precip_in": 0,
                        "snow_cm": 0,
                        "humidity": 56,
                        "cloud": 27,
                        "feelslike_c": 25.2,
                        "feelslike_f": 77.4,
                        "windchill_c": 23.8,
                        "windchill_f": 74.8,
                        "heatindex_c": 25.2,
                        "heatindex_f": 77.4,
                        "dewpoint_c": 14.4,
                        "dewpoint_f": 57.9,
                        "will_it_rain": 0,
                        "chance_of_rain": 0,
                        "will_it_snow": 0,
                        "chance_of_snow": 0,
                        "vis_km": 10,
                        "vis_miles": 6,
                        "gust_mph": 6.2,
                        "gust_kph": 9.9,
                        "uv": 6
                    },
                    {
                        "time_epoch": 1721833200,
                        "time": "2024-07-24 18:00",
                        "temp_c": 22.6,
                        "temp_f": 72.8,
                        "is_day": 1,
                        "condition": {
                            "text": "Sunny",
                            "icon": "//cdn.weatherapi.com/weather/64x64/day/113.png",
                            "code": 1000
                        },
                        "wind_mph": 4.7,
                        "wind_kph": 7.6,
                        "wind_degree": 87,
                        "wind_dir": "E",
                        "pressure_mb": 1011,
                        "pressure_in": 29.86,
                        "precip_mm": 0,
                        "precip_in": 0,
                        "snow_cm": 0,
                        "humidity": 64,
                        "cloud": 25,
                        "feelslike_c": 24.8,
                        "feelslike_f": 76.6,
                        "windchill_c": 22.7,
                        "windchill_f": 72.8,
                        "heatindex_c": 24.8,
                        "heatindex_f": 76.6,
                        "dewpoint_c": 15.5,
                        "dewpoint_f": 59.9,
                        "will_it_rain": 0,
                        "chance_of_rain": 0,
                        "will_it_snow": 0,
                        "chance_of_snow": 0,
                        "vis_km": 10,
                        "vis_miles": 6,
                        "gust_mph": 8,
                        "gust_kph": 12.8,
                        "uv": 6
                    },
                    {
                        "time_epoch": 1721836800,
                        "time": "2024-07-24 19:00",
                        "temp_c": 20.8,
                        "temp_f": 69.4,
                        "is_day": 1,
                        "condition": {
                            "text": "Sunny",
                            "icon": "//cdn.weatherapi.com/weather/64x64/day/113.png",
                            "code": 1000
                        },
                        "wind_mph": 4.9,
                        "wind_kph": 7.9,
                        "wind_degree": 124,
                        "wind_dir": "SE",
                        "pressure_mb": 1011,
                        "pressure_in": 29.86,
                        "precip_mm": 0,
                        "precip_in": 0,
                        "snow_cm": 0,
                        "humidity": 70,
                        "cloud": 22,
                        "feelslike_c": 20.8,
                        "feelslike_f": 69.4,
                        "windchill_c": 20.8,
                        "windchill_f": 69.4,
                        "heatindex_c": 20.8,
                        "heatindex_f": 69.4,
                        "dewpoint_c": 15.1,
                        "dewpoint_f": 59.2,
                        "will_it_rain": 0,
                        "chance_of_rain": 0,
                        "will_it_snow": 0,
                        "chance_of_snow": 0,
                        "vis_km": 10,
                        "vis_miles": 6,
                        "gust_mph": 9.5,
                        "gust_kph": 15.3,
                        "uv": 6
                    },
                    {
                        "time_epoch": 1721840400,
                        "time": "2024-07-24 20:00",
                        "temp_c": 19.7,
                        "temp_f": 67.4,
                        "is_day": 1,
                        "condition": {
                            "text": "Sunny",
                            "icon": "//cdn.weatherapi.com/weather/64x64/day/113.png",
                            "code": 1000
                        },
                        "wind_mph": 4.5,
                        "wind_kph": 7.2,
                        "wind_degree": 121,
                        "wind_dir": "ESE",
                        "pressure_mb": 1011,
                        "pressure_in": 29.86,
                        "precip_mm": 0,
                        "precip_in": 0,
                        "snow_cm": 0,
                        "humidity": 70,
                        "cloud": 16,
                        "feelslike_c": 19.7,
                        "feelslike_f": 67.4,
                        "windchill_c": 19.7,
                        "windchill_f": 67.4,
                        "heatindex_c": 19.7,
                        "heatindex_f": 67.4,
                        "dewpoint_c": 14,
                        "dewpoint_f": 57.2,
                        "will_it_rain": 0,
                        "chance_of_rain": 0,
                        "will_it_snow": 0,
                        "chance_of_snow": 0,
                        "vis_km": 10,
                        "vis_miles": 6,
                        "gust_mph": 9.4,
                        "gust_kph": 15.1,
                        "uv": 5
                    },
                    {
                        "time_epoch": 1721844000,
                        "time": "2024-07-24 21:00",
                        "temp_c": 18.5,
                        "temp_f": 65.2,
                        "is_day": 1,
                        "condition": {
                            "text": "Sunny",
                            "icon": "//cdn.weatherapi.com/weather/64x64/day/113.png",
                            "code": 1000
                        },
                        "wind_mph": 2.9,
                        "wind_kph": 4.7,
                        "wind_degree": 95,
                        "wind_dir": "E",
                        "pressure_mb": 1011,
                        "pressure_in": 29.87,
                        "precip_mm": 0,
                        "precip_in": 0,
                        "snow_cm": 0,
                        "humidity": 71,
                        "cloud": 12,
                        "feelslike_c": 18.5,
                        "feelslike_f": 65.2,
                        "windchill_c": 18.5,
                        "windchill_f": 65.2,
                        "heatindex_c": 18.5,
                        "heatindex_f": 65.2,
                        "dewpoint_c": 13.2,
                        "dewpoint_f": 55.8,
                        "will_it_rain": 0,
                        "chance_of_rain": 0,
                        "will_it_snow": 0,
                        "chance_of_snow": 0,
                        "vis_km": 10,
                        "vis_miles": 6,
                        "gust_mph": 6.1,
                        "gust_kph": 9.8,
                        "uv": 5
                    },
                    {
                        "time_epoch": 1721847600,
                        "time": "2024-07-24 22:00",
                        "temp_c": 18,
                        "temp_f": 64.4,
                        "is_day": 0,
                        "condition": {
                            "text": "Clear ",
                            "icon": "//cdn.weatherapi.com/weather/64x64/night/113.png",
                            "code": 1000
                        },
                        "wind_mph": 3.1,
                        "wind_kph": 5,
                        "wind_degree": 97,
                        "wind_dir": "E",
                        "pressure_mb": 1012,
                        "pressure_in": 29.87,
                        "precip_mm": 0,
                        "precip_in": 0,
                        "snow_cm": 0,
                        "humidity": 72,
                        "cloud": 12,
                        "feelslike_c": 18,
                        "feelslike_f": 64.4,
                        "windchill_c": 18,
                        "windchill_f": 64.4,
                        "heatindex_c": 18,
                        "heatindex_f": 64.4,
                        "dewpoint_c": 12.8,
                        "dewpoint_f": 55.1,
                        "will_it_rain": 0,
                        "chance_of_rain": 0,
                        "will_it_snow": 0,
                        "chance_of_snow": 0,
                        "vis_km": 10,
                        "vis_miles": 6,
                        "gust_mph": 6.6,
                        "gust_kph": 10.6,
                        "uv": 0
                    },
                    {
                        "time_epoch": 1721851200,
                        "time": "2024-07-24 23:00",
                        "temp_c": 18,
                        "temp_f": 64.3,
                        "is_day": 0,
                        "condition": {
                            "text": "Clear ",
                            "icon": "//cdn.weatherapi.com/weather/64x64/night/113.png",
                            "code": 1000
                        },
                        "wind_mph": 3.8,
                        "wind_kph": 6.1,
                        "wind_degree": 119,
                        "wind_dir": "ESE",
                        "pressure_mb": 1012,
                        "pressure_in": 29.87,
                        "precip_mm": 0,
                        "precip_in": 0,
                        "snow_cm": 0,
                        "humidity": 70,
                        "cloud": 12,
                        "feelslike_c": 18,
                        "feelslike_f": 64.3,
                        "windchill_c": 18,
                        "windchill_f": 64.3,
                        "heatindex_c": 18,
                        "heatindex_f": 64.3,
                        "dewpoint_c": 12.5,
                        "dewpoint_f": 54.5,
                        "will_it_rain": 0,
                        "chance_of_rain": 0,
                        "will_it_snow": 0,
                        "chance_of_snow": 0,
                        "vis_km": 10,
                        "vis_miles": 6,
                        "gust_mph": 8,
                        "gust_kph": 12.9,
                        "uv": 0
                    }
                ]
            }
        ]
    }
}
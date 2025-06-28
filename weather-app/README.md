# 🌦️ React Weather App

A simple weather forecast app built with **React** and the **OpenWeatherMap API**.
Type a city name and press `Enter` to get real-time weather data,
including temperature and conditions.

## 🌐 Live Demo

👉 [Live App](https://your-deployment-link.vercel.app)

---

## 📸 Preview

## ![App Screenshot](screenshot.png)

---

## 🚀 Features

- 🔍 Search weather by city name
- 🌡️ Displays current temperature and weather condition
- 📅 Shows current date and location
- 🔥 Dynamic background based on temperature
- ⚛️ Built with functional components and React Hooks

---

## 🛠 Tech Stack

- [React](https://reactjs.org/)
- [OpenWeatherMap API](https://openweathermap.org/)
- CSS (for styling)

---

## 🔧 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/react-weather-app.git
cd react-weather-app



```

### 2. Install Dependencies

npm install

# or

yarn install

# or

yarn install

### 3. Add Your API Key

Replace the API key in App.js with your own from OpenWeatherMap:
const api = {
key: 'YOUR_API_KEY',
base: 'https://api.openweathermap.org/data/2.5/',
};

### 4. Run the App

npm start

# or

yarn start

## 🧠 How It Works

Users type a city name into the input field.

On pressing Enter, a request is sent to the OpenWeatherMap API.

The app receives the weather data and displays it on the screen.

Background color changes based on temperature:

Warm colors for temps > 16°C

Cool colors for temps ≤ 16°C

## 🙌 Credits

OpenWeatherMap for free weather data API

Inspired by frontend mini-project tutorials

---

Let me know if you'd like help styling your app, deploying it (e.g. to Vercel), or adding things like weather icons or geolocation.

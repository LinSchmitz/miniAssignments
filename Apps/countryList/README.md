Here's a `README.md` for your project:

---

# 🌍 Country Search App

A simple JavaScript web app that fetches data from the [REST Countries API](https://restcountries.com/) and displays a list of countries with their flag, name, and capital. It includes a search bar with debounce functionality and uses `localStorage` for caching API results.

---

## 🚀 Features

- Fetches country data from REST Countries API
- Caches data in `localStorage` to reduce API calls
- Displays:

  - Country flag
  - Country name
  - Capital

- Real-time filtering with debounce on input
- Responsive country cards

---

## 📁 Folder Structure

```
/project-root
│
├── index.html
├── style.css
└── src
    └── js
        └── main.js
```

---

## 🔧 How It Works

### 1. **Fetch and Cache**

- On page load, it checks if the data exists in `localStorage`.
- If not, it fetches data from the REST Countries API and stores it.

### 2. **Render**

- Each country's data is rendered into a `.item` div with its flag, name, and capital.

### 3. **Search**

- User can search for countries by name.
- Debounce with a 500ms delay improves performance.

---

## 🛠 Technologies Used

- **Vanilla JavaScript**
- **HTML**
- **CSS**
- [REST Countries API](https://restcountries.com/)

---

## 🧪 How to Use

1. Clone or download this repository.
2. Open `index.html` in your browser.
3. Start typing in the search bar to filter countries by name.

---

## 📸 Example

```text

[ Brazil 🇧🇷 ] — Capital: Brasília
[ Germany 🇩🇪 ] — Capital: Berlin
```

---

## ⚠️ Notes

- Make sure you're connected to the internet on first load to fetch API data.
- The app uses `altSpellings[1]` as the country name (some countries may not have this index).

---

Let me know if you'd like a version in Persian or need images/preview badges added.

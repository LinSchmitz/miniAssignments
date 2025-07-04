Sure! Here's a clean and complete **README.md** for your color switcher project:

---

# 🎨 Color Switcher

A simple and interactive JavaScript project that allows users to dynamically change the background color of the page by clicking on color buttons. When the page loads, a random color is selected and applied. The currently selected color is also displayed on the page.

## 🚀 Features

- Dynamically generates color buttons from a predefined array
- Random background color applied on page load
- Highlights the selected color button
- Displays the current background color name

## 🛠️ Built With

- HTML
- CSS
- Vanilla JavaScript

## 📁 Project Structure

```
project/
├── index.html
├── style.css
└── script.js
```

## 📜 How It Works

1. On page load, a random color is chosen and applied as the background.
2. Buttons are dynamically created for each color in the `colors` array.
3. Clicking on any button changes the background to that color and updates the displayed color name.
4. The currently selected button is visually highlighted using the `.active` class.

## 🧪 How to Use

1. Clone or download this repository.
2. Make sure the following structure is in place:

```html
<!-- index.html -->
<div class="colors"></div>
<p>Current Color: <span id="current-color"></span></p>
<script src="script.js"></script>
```

3. Open `index.html` in your browser.

## 💡 Example

```js
const colors = ['red', 'blue', 'yellow', 'pink', ...];

colors.forEach(color => {
  const button = document.createElement('button');
  button.style.backgroundColor = color;
  ...
});
```

## 📸 Screenshot

![screenshot](https://via.placeholder.com/600x300?text=Color+Switcher+UI)

Let me know if you want it in `.md` format or if you’d like to add features like persistence (saving the color in localStorage).

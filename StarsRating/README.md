# ⭐ React Star Rating Component

A simple, interactive, and reusable Star Rating component built with React. Hover to preview the rating and click to select. Perfect for reviews, feedback forms, and user rating interfaces.

## ✨ Features

✅ Dynamic rendering of stars (default: 5)  
✅ Hover effect to preview rating  
✅ Click to select rating  
✅ Optional custom messages per star  
✅ Fully customizable (color, size, maxRating)  
✅ Lightweight and beginner-friendly  
✅ Supports lifting state up via `onSetRating` prop  
✅ Defaults like `defaultRating` built-in

## 🛠 Tech Stack

-⚛️ React (useState, props)

🎨 Inline CSS styles

🧩 SVG Icons

## ✏️ Customization

Prop Type Default Description
maxRating Number 5 Number of stars to display

You can also modify the styles, star icons, or logic to suit your UI preferences.

## 💡 How It Works

useState tracks both selected (rating) and hovered (tempRating) values.

Stars fill based on hover or click.

Star is a reusable child component that handles SVG rendering and events.

Fully customizable by props.

## 🧪 Future Improvements

✅ Accept custom star icons or SVGs

✅ Allow passing custom CSS class

⬜ Keyboard accessibility

⬜ Support for half-star ratings

⬜ Add animations and transitions

⬜ Accessibility labels for screen readers

### ✏️ Props

| Prop            | Type     | Default   | Description                                  |
| --------------- | -------- | --------- | -------------------------------------------- |
| `maxRating`     | Number   | `5`       | Number of stars to display                   |
| `color`         | String   | `#fcc419` | Color of filled stars                        |
| `size`          | Number   | `48`      | Size of each star in pixels                  |
| `message`       | Array    | `[]`      | Custom label under the stars for each rating |
| `defaultRating` | Number   | `0`       | Initial selected rating                      |
| `onSetRating`   | Function | `null`    | Callback function to get the selected rating |
| `className`     | String   | `""`      | Optional CSS class to style the container    |

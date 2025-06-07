# 📝 React TextExpander Component

A clean, flexible, and reusable Text Expander component built with React. Perfect for showing
previews of long texts with a toggle to expand or collapse the content.

### ✨ Features

👁️ Show only a preview of long text (default: first 10 words)

🔘 Expand or collapse text with a toggle button

🎨 Customizable button color and text

🧩 Can be controlled or uncontrolled (default or always-expanded)

🧱 Easy to style via className prop

🛠 Tech Stack
⚛️ React (Functional Components + Hooks)

💅 Inline CSS for styling buttons

### ✏️ Customization

Prop Type Default Description
collapsedNumWords Number 10 Number of words to show when collapsed
expandButtonText String "Show more" Text for the expand button
collapseButtonText String "Show less" Text for the collapse button
buttonColor String "blue" Color of the expand/collapse button
expanded Boolean false Show text expanded by default
className String - Optional class for styling container

### 🧠 How It Works

useState tracks whether the text is expanded or collapsed.

If collapsed, the component splits the text and shows the first n words followed by ....

Clicking the button toggles between full text and preview.

### 🧪 Future Improvements

Add transition/animation when expanding or collapsing

Improve accessibility (e.g., aria-expanded)

Support for truncating by characters or lines, not just words

Optional ellipsis style (e.g., fadeout)

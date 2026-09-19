# Animated Search Button

A sleek, animated expanding search bar built with HTML, CSS and vanilla JavaScript. Clicking the search icon smoothly expands a rounded pill input into a full-width search box, while a cancel button collapses it back — all driven by a bouncy `cubic-bezier` transition.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Font Awesome](https://img.shields.io/badge/Font%20Awesome-528DD7?style=for-the-badge&logo=fontawesome&logoColor=white)

## ✨ Features

- 🔍 Expanding search box (50px → 350px) with a spring-like `cubic-bezier(0.68, -0.55, 0.265, 1.55)` easing
- ❌ Cancel button that appears only while the box is active
- ⌨️ Dynamic placeholder ("Type to search...") injected on activation, fading out on focus
- 🎨 Soft drop shadow and fully rounded pill design on a vivid blue background
- 🪶 Pure vanilla JS — no libraries or frameworks

## 🛠️ Tech Stack

- **HTML5** — markup
- **CSS3** — transitions, transforms & styling
- **JavaScript (ES6)** — class toggling & event handling
- **Font Awesome 6** — search & close icons (locally hosted)

## 📂 Project Structure

```
├── index.html        # Search bar markup
├── modern.js         # Toggle/expand logic
├── css/
│   ├── style.css     # Animations & layout
│   ├── all.min.css   # Font Awesome
│   └── fontawesome.css
└── webfonts/         # Font Awesome fonts
```

## 🚀 Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/shena9y/animation-button.git
   ```
2. Open `index.html` in your browser and click the search icon to see the animation.

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.

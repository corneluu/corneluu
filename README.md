# Miron Cornel-Iosif - Portfolio

A modern, responsive portfolio website built with React and Vite, featuring a dark navy theme with teal accents.

![Portfolio Preview](https://via.placeholder.com/800x400/0a192f/64ffda?text=Portfolio+Preview)

## 🚀 Features

- **Modern Design**: Dark theme with smooth animations and micro-interactions
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Smooth Scrolling**: Navigation with smooth scroll to sections
- **Interactive Components**: Hover effects, animated cards, and transitions
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## 🛠️ Built With

- **React** - UI library
- **Vite** - Build tool and dev server
- **Vanilla CSS** - Styling with CSS variables
- **Google Fonts (Inter)** - Typography

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🏗️ Build for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` folder, ready to be deployed.

## 🚀 Deployment

### GitHub Pages

1. Install the `gh-pages` package:
```bash
npm install --save-dev gh-pages
```

2. Add these scripts to `package.json`:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Add `base` to `vite.config.js`:
```javascript
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/'
})
```

4. Deploy:
```bash
npm run deploy
```

### Vercel / Netlify

Simply connect your GitHub repository to Vercel or Netlify, and they will automatically build and deploy your site.

## 📁 Project Structure

```
portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Navbar.css
│   │   ├── Hero.jsx
│   │   ├── Hero.css
│   │   ├── About.jsx
│   │   ├── About.css
│   │   ├── Experience.jsx
│   │   ├── Experience.css
│   │   ├── Projects.jsx
│   │   ├── Projects.css
│   │   ├── Contact.jsx
│   │   ├── Contact.css
│   │   ├── Footer.jsx
│   │   └── Footer.css
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## 🎨 Color Palette

- **Background Primary**: `#0a192f` (Dark Navy)
- **Background Secondary**: `#112240`
- **Text Primary**: `#ccd6f6` (Light Slate)
- **Text Secondary**: `#8892b0` (Slate)
- **Accent**: `#64ffda` (Teal)

## 📝 Customization

### Update Personal Information

Edit the following files to customize with your information:

1. **Hero Section** (`src/components/Hero.jsx`):
   - Name, tagline, description
   - Social media links
   - Location

2. **About Section** (`src/components/About.jsx`):
   - Bio text
   - Technologies
   - Stats

3. **Experience Section** (`src/components/Experience.jsx`):
   - Education/work history
   - Dates and descriptions

4. **Projects Section** (`src/components/Projects.jsx`):
   - Project titles, descriptions
   - Technologies used
   - Links to GitHub/live demos

5. **Contact Section** (`src/components/Contact.jsx`):
   - Email address
   - Location
   - Social links

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Miron Cornel-Iosif**

- Location: Timișoara, Romania
- University: Tibiscus University, FCIA (2nd Year)
- Previous: Liceul de Arte Ion Vidu

---

⭐ If you like this project, please give it a star on GitHub!

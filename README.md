# 🔔 Simple React Alerts

A lightweight, customizable, and reusable **Alert Component** built with **React**, **TypeScript**, and **Vite**. Perfect for displaying notifications, success messages, errors, and warnings in your React applications.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-brightgreen)](https://abdelrahman-samy-dev.github.io/simple-react-alerts/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)

## ✨ Features

- 🎯 **Simple & Lightweight** - Minimal dependencies, maximum performance
- 🔧 **Fully Customizable** - Easy to modify colors, styles, and behavior
- 📱 **Responsive Design** - Works seamlessly on all screen sizes
- 🔒 **Type-Safe** - Built with TypeScript for better developer experience
- 🎨 **Modern Icons** - Powered by Lucide React for crisp, scalable icons
- ⚡ **Lightning Fast** - Built with Vite for optimal development experience
- 🔄 **Reusable Component** - Drop-in solution for any React project

## 🚀 Live Demo

Check out the live demo: [**Simple React Alerts**](https://abdelrahman-samy-dev.github.io/simple-react-alerts/)

## 📸 Preview

```jsx
// Example usage
<Alert 
  type="success" 
  message="Your data has been saved successfully!" 
  isVisible={showAlert}
  onClose={() => setShowAlert(false)}
/>
```

## 🛠️ Tech Stack

| Purpose | Technology |
|---------|------------|
| **Frontend Library** | React 18.3.1 |
| **Language** | TypeScript |
| **Build Tool** | Vite |
| **Styling** | SCSS (Sass) |
| **Icons** | Lucide React |
| **Code Quality** | ESLint + Prettier |
| **Deployment** | GitHub Pages |

## 📦 Installation

### Clone the Repository
```bash
git clone https://github.com/abdelrahman-samy-dev/simple-react-alerts.git
cd simple-react-alerts
```

### Install Dependencies
```bash
npm install
```

### Start Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Deploy to GitHub Pages
```bash
npm run deploy
```

## 🏗️ Project Structure

```
simple-react-alerts/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   └── Alert.tsx          # Main Alert Component
│   ├── styles/
│   │   └── Alert.scss         # Component Styles
│   ├── App.tsx                # Demo Application
│   ├── main.tsx               # Entry Point
│   └── vite-env.d.ts
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🎯 Usage

### Basic Implementation

```tsx
import React, { useState } from 'react';
import Alert from './components/Alert';

function App() {
  const [showAlert, setShowAlert] = useState(false);

  return (
    <div>
      <button onClick={() => setShowAlert(true)}>
        Show Alert
      </button>
      
      <Alert
        type="success"
        message="Operation completed successfully!"
        isVisible={showAlert}
        onClose={() => setShowAlert(false)}
      />
    </div>
  );
}
```

### Alert Types

The component supports multiple alert types:

- `success` - Green alert for positive actions
- `error` - Red alert for errors and failures  
- `warning` - Yellow alert for warnings
- `info` - Blue alert for informational messages

### Component Props

```tsx
interface AlertProps {
  type: 'success' | 'error' | 'warning' | 'info';
  message: string;
  isVisible: boolean;
  onClose: () => void;
  autoClose?: boolean;
  duration?: number;
}
```

## 🎨 Customization

### Styling

The component uses SCSS for styling. You can easily customize colors, animations, and layout by modifying the `Alert.scss` file:

```scss
// Custom color scheme
.alert {
  &--success {
    background-color: #your-color;
    border-color: #your-border-color;
  }
}
```

### Icons

Icons are provided by [Lucide React](https://lucide.dev/). You can easily swap icons by importing different ones from the library.

## 📱 Responsive Design

The alert component is fully responsive and adapts to different screen sizes:

- **Desktop**: Full-width with comfortable padding
- **Tablet**: Adjusted spacing and font sizes
- **Mobile**: Optimized for touch interactions

## 🚀 Performance

- **Bundle Size**: Minimal footprint with tree-shaking
- **Rendering**: Optimized with React hooks
- **Animations**: Smooth CSS transitions
- **Loading**: Fast initial load with Vite optimization

## 🔧 Development Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run deploy` | Deploy to GitHub Pages |

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

### Development Setup

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Abdelrahman Samy**
- GitHub: [@abdelrahman-samy-dev](https://github.com/abdelrahman-samy-dev)
- LinkedIn: [Connect with me](https://www.linkedin.com/in/abdelrahman-samy-ali/)

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - The web framework used
- [TypeScript](https://www.typescriptlang.org/) - For type safety
- [Vite](https://vitejs.dev/) - For blazing fast development
- [Lucide React](https://lucide.dev/) - For beautiful icons
- [GitHub Pages](https://pages.github.com/) - For free hosting

---

⭐ **If you found this project helpful, please give it a star!** ⭐
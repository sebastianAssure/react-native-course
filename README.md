<p align="center">
  <img src="images/assuresoft.png" alt="Assure Logos" title="Assure Logo" width="500" />
</p>

---

# React Native Course App (Movie App)

A React Native application for learn in the module mobile development.

---

## Table of Contents

1. [About the Project](#about-the-project)
2. [Built With](#built-with)
3. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
4. [Usage](#usage)
   - [Env](#env)
   - [Running the App](#running-the-app)
5. [Folder Structure](#folder-structure)
6. [Scripts & Commands](#scripts--commands)
7. [ScreenShots app](#screenshots-app)
   - [Figma MockUp](#figma-mockup)
   - [ScreenShots](#screenshots)

---

## About the Project

A practical React Native iOS application covering:
- Core components (`View`, `Text`, `FlatList`, `Reanimated-Carousel`, etc.)
- Component styling with `StyleSheet`
- Navigation using React Navigation
- Hooks and functional components
- Interactive UI (`Pressable`, images, carousel)

---

## Built With

- [React Native](https://reactnative.dev/)
- [React Navigation](https://reactnavigation.org/) (Tab, NavigationContainer)
- TypeScript

---

## Getting Started

### Prerequisites

Ensure you have:
- **Node.js** ≥ 18.x (or LTS)
- **npm** or **yarn**
- **CocoaPods** (`sudo gem install cocoapods`)

---

## Installation

Clone the project:
```bash
git clone https://github.com/sebastianAssure/react-native-course.git
```

Go to the project directory:
```bash
cd react-native-course
```

Install JS dependencies:
```bash
npm install  # or yarn install
```

Install iOS native:
```bash
cd ios && pod install && cd ..
```

---

## Usage

### Env

Create a new file `.env` in the root of your app:

```bash
TMDB_ACCESS_TOKEN=
TMDB_API_KEY=
TMDB_BASE_URL=
IMAGE_BASE_URL=
```

### Running the App

```bash
npx react-native run-ios
```

---

## Folder Structure

```bash
react-native-course/
├── ios/                   # iOS native project
├── android/               # Android native project
├── src/                   # App source code
│   ├── components/        # Reusable UI components
│   ├── constants/         # Global constants (colors, imageSizes)
│   ├── interfaces/        # Interfaces and types (TypeScript or Props)
│   ├── navigation/        # Navigation configuration
│   ├── screens/           # App screens/views
│   ├── hooks/             # Custom React hooks
│   ├── utils/             # Utility/helper functions
│   └── App.js             # App entry point
├── .eslintrc.js           # ESLint configuration
├── .prettierrc            # Prettier configuration
├── package.json
└── README.md
```

---

## Scripts & Commands


| Command              | Description                                                   |
|----------------------|---------------------------------------------------------------|
| `npm start`          | Starts the React Native bundler (Metro)                       |
| `npm run ios`        | Runs the app in an iOS simulator                              |
| `npm run android`    | Runs the app on an Android emulator or device                 |
| `npm run clean`      | Resets the bundler cache and restarts it                      |
| `npm run lint`       | Runs ESLint to analyze code quality                           |
| `npm test`           | Runs tests using Jest                                       |

---

## ScreenShots App

### Figma MockUp

```bash
https://www.figma.com/community/file/1126286295256197533
```

### ScreenShots

<p align="center">
  <img src="images/movieApp.png" alt="Mobile Apps" title="Mobile Apps" width="700" />
</p>
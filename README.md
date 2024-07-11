# react-native-before-after-slider

A lightweight and customizable React Native component for creating before and after image sliders using `react-native-reanimated` and `react-native-gesture-handler`.

## Features

- Smooth and performant animations using Reanimated 2
- Highly customizable with styled-components
- Easy to integrate into any React Native project

## Installation

## Using npm

# First, install the necessary dependencies:

```bash
npm install react-native-reanimated react-native-gesture-handler styled-components
```

# Then, install the react-native-before-after-slider package:

```bash
npm install react-native-before-after-slider
```

## Using yarn

```bash
yarn add react-native-reanimated react-native-gesture-handler styled-components
```

# Then, install the react-native-before-after-slider package:

```bash
yarn add react-native-before-after-slider
```

Make sure to follow the setup instructions for `react-native-reanimated and react-native-gesture-handler ` if you haven't already.

## Reanimated Setup

1. Add Reanimated's Babel plugin to your `babel.config.js:`

```js
module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: ["react-native-reanimated/plugin"],
};
```

2. Wrap your app with Reanimated's GestureHandlerRootView:

```jsx
import "react-native-gesture-handler";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { enableScreens } from "react-native-screens";
import MainScreen from "./screens/MainScreen";

enableScreens();

const Stack = createStackNavigator();

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Main" component={MainScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
```

## Usage

Here is a basic example of how to use the `BeforeAfterSlider` component:

```jsx
import React from "react";
import { View } from "react-native";
import { BeforeAfterSlider } from "react-native-before-after-slider";

const beforeImage = require("./path-to-before-image.jpg");
const afterImage = require("./path-to-after-image.jpg");
const delimiterIcon = require("./path-to-icon.png");

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <BeforeAfterSlider
        beforeImage={beforeImage}
        afterImage={afterImage}
        handleWidth={30}
        handleColor="blue"
        delimiterIcon={delimiterIcon}
        delimiterIconStyles={{ width: 30, height: 30, tintColor: "red" }} // Customize the styles here
      />
    </View>
  );
};

export default App;
```

## Props

### BeforeAfterSlider Props

| Prop                  | Type                  | Default  | Description                                          |
| --------------------- | --------------------- | -------- | ---------------------------------------------------- |
| `beforeImage`         | `ImageSourcePropType` | Required | The source for the before image.                     |
| `afterImage`          | `ImageSourcePropType` | Required | The source for the after image.                      |
| `handleWidth`         | `number`              | 20       | The width of the slider handle.                      |
| `handleColor`         | `string`              | 'white'  | The color of the slider handle.                      |
| `delimiterIcon`       | `ImageSourcePropType` | Optional | The source for the delimiter icon inside the handle. |
| `delimiterIconStyles` | `object`              | {}       | Styles for the delimiter icon.                       |

## Contributing

Contributions are welcome! Please open an issue or submit a pull request to discuss any changes.

## License

This project is licensed under the MIT License.

// src/BeforeAfterSlider.js
import React from "react";
import { Dimensions, Image } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedGestureHandler,
} from "react-native-reanimated";
import styled from "styled-components/native";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const ImageContainer = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
`;

const AfterImageContainer = styled(Animated.View)`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const Slider = styled(Animated.View)`
  position: absolute;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const SliderHandle = styled.View`
  width: ${(props) => props.handleWidth || 20}px;
  height: 100%;
  background-color: ${(props) => props.handleColor || "white"};
  justify-content: center;
  align-items: center;
`;

const BeforeAfterSlider = ({
  beforeImage,
  afterImage,
  handleWidth,
  handleColor,
  delimiterIcon,
  delimiterIconStyles,
}) => {
  const translateX = useSharedValue(SCREEN_WIDTH / 2);

  const gestureHandler = useAnimatedGestureHandler({
    onActive: (event) => {
      translateX.value = event.translationX + SCREEN_WIDTH / 2;
    },
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value - SCREEN_WIDTH / 2 }],
    };
  });

  return (
    <Container>
      <ImageContainer source={beforeImage} />
      <AfterImageContainer style={animatedStyle}>
        <ImageContainer source={afterImage} />
      </AfterImageContainer>
      <PanGestureHandler onGestureEvent={gestureHandler}>
        <Slider style={animatedStyle}>
          <SliderHandle handleWidth={handleWidth} handleColor={handleColor}>
            {delimiterIcon && (
              <Image source={delimiterIcon} style={delimiterIconStyles} />
            )}
          </SliderHandle>
        </Slider>
      </PanGestureHandler>
    </Container>
  );
};

export default BeforeAfterSlider;

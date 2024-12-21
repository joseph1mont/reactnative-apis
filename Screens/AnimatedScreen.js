import React, { useRef, useEffect } from "react";
import { Animated, Text, View, StyleSheet, Button } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

import RNElements from "../components/RNElements";

const AnimatedScreen = () => {
  // Create animated values for button movement and fade in/out effect
  const buttonPosition = useRef(new Animated.Value(0)).current; // Initial position at the top
  const fadeAnim = useRef(new Animated.Value(0)).current; // Fade value for overlay text

  // Start the animations on component mount
  useEffect(() => {
    // Animate buttons to center position
    Animated.spring(buttonPosition, {
      toValue: 1, // 1 means to move the buttons to the center
      useNativeDriver: true,
    }).start();
  }, [buttonPosition]);

  // Fade in the overlay text
  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1, // Fully visible
      duration: 1000, // 1 second duration
      useNativeDriver: true,
    }).start();
  };

  // Fade out the overlay text
  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0, // Fully invisible
      duration: 1000, // 1 second duration
      useNativeDriver: true,
    }).start();
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        {/* Overlay Text with Fade Effect */}
        <Animated.View
          style={[
            styles.animatedOverlay, // Positioned on top of buttons
            {
              opacity: fadeAnim, // Bind opacity to fadeAnim
            },
          ]}
        >
          <Text style={styles.overlayText}>Click Fade Out Text Button</Text>
          <RNElements />
        </Animated.View>

        {/* Buttons */}
        <Animated.View
          style={[
            {
              // Bind position using animated value for movement
              transform: [
                {
                  translateY: buttonPosition.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 200], // Move from top (0) to center (200)
                  }),
                },
              ],
            },
          ]}
        >
          <View style={styles.buttonRow}>
            <Button title="Fade In Text" onPress={fadeIn} />
            <Button title="Fade Out Text" onPress={fadeOut} />
          </View>
        </Animated.View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "relative", // Position relative to place overlay
  },
  animatedOverlay: {
    position: "absolute", // Absolute positioning to place on top
    top: 50, // Adjust the position as needed
    // zIndex: 2, // Ensures the overlay is above the buttons
    padding: 20,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background for overlay
  },
  overlayText: {
    color: "white",
    fontSize: 24,
  },
  buttonRow: {
    flexBasis: 100,
    justifyContent: "space-evenly",
    marginVertical: 16,
  },

  fonts: {
    marginBottom: 8,
  },
  user: {
    flexDirection: "row",
    marginBottom: 6,
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    marginTop: 5,
  },
});

export default AnimatedScreen;

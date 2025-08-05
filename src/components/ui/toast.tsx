// src/components/ui/toast.tsx
import { View, Text, Animated, StyleSheet } from "react-native";
import { useEffect, useRef } from "react";

type ToastProps = {
  message: string;
  type: "success" | "error" | "info";
  duration?: number;
  onHide?: () => void;
};

export const Toast = ({ message, type, duration = 3000, onHide }: ToastProps) => {
  const opacity = useRef(new Animated.Value(0)).current;

  const backgroundColor = {
    success: "#4BB543",
    error: "#FF3333",
    info: "#0099FF",
  }[type];

  useEffect(() => {
    Animated.sequence([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.delay(duration),
      Animated.timing(opacity, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start(() => {
      onHide?.();
    });
  }, []);

  return (
    <Animated.View
      style={[
        styles.toast,
        {
          opacity,
          backgroundColor,
          transform: [
            {
              translateY: opacity.interpolate({
                inputRange: [0, 1],
                outputRange: [-20, 0],
              }),
            },
          ],
        },
      ]}
    >
      <Text style={styles.toastText}>{message}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  toast: {
    position: "absolute",
    top: 50,
    left: 20,
    right: 20,
    padding: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    zIndex: 999,
  },
  toastText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    fontFamily: "gilroyMedium",
  },
});
import { useState, useRef } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Video } from "expo-av";
import { Ionicons } from "@expo/vector-icons";
import React from "react";

const RecipeVideo = () => {
  const videoRef = useRef(null);
  const [status, setStatus] = useState({});
  const [showControls, setShowControls] = useState(true);

  const togglePlayPause = () => {
    if (status.isPlaying) {
      videoRef.current.pauseAsync();
    } else {
      videoRef.current.playAsync();
    }
  };

  // Format time for the timestamp
  const formatTime = (timeMillis) => {
    const totalSeconds = Math.floor(timeMillis / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => setShowControls(!showControls)}
      style={styles.container}
    >
      <Video
        ref={videoRef}
        source={require("@/assets/shakshuka.webm")}
        resizeMode="cover"
        style={styles.video}
        shouldPlay={false}
        isMuted={false}
        onPlaybackStatusUpdate={(status) => setStatus(status)}
      />

      {/* Custom Controls */}
      {showControls && (
        <View style={styles.controls}>
          <Text style={styles.timestamp}>
            {formatTime(status.positionMillis || 0)}
          </Text>
          <View style={styles.progressBar}>
            <View
              style={{
                width: `${(status.positionMillis / status.durationMillis) * 100 || 0}%`,
                height: "100%",
                backgroundColor: "#fff",
              }}
            />
          </View>
          <TouchableOpacity onPress={togglePlayPause}>
            <Ionicons
              name={status.isPlaying ? "pause" : "play"}
              size={16}
              color="#fff"
            />
          </TouchableOpacity>
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 250,
    position: "relative",
  },
  video: {
    width: "100%",
    height: "100%",
  },
  controls: {
    position: "absolute",
    bottom: 10,
    left: 10,
    right: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  timestamp: {
    color: "#fff",
    fontSize: 12,
    marginRight: 10,
  },
  progressBar: {
    flex: 1,
    height: 4,
    backgroundColor: "rgba(255,255,255,0.5)",
    borderRadius: 2,
    overflow: "hidden",
  },
});

export default RecipeVideo;

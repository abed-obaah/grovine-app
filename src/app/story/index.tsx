import React, { useEffect, useRef, useState } from "react";
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet, Dimensions, StatusBar } from "react-native";
import { Video } from "expo-av"; // Correct import from expo-av
import { AntDesign, Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

const stories = [
  {
    id: "1",
    title: "Egg Shakshuka",
    description: "A hearty and flavorful Middle Eastern dish...",
    video: require("@/assets/shakshuka.webm"),
    chef: {
      name: "Chef Richard Nduh",
      rating: "4.5",
      profileImage: require("@/assets/images/chefimage.png"),
    },
    likes: "1,764",
  },
  {
    id: "2",
    title: "Eggs Benedict",
    description: "A classic breakfast dish with poached eggs...",
    video: require("@/assets/shakshuka.webm"),
    chef: {
      name: "Chef Marie Bella",
      rating: "4.7",
      profileImage: require("@/assets/images/chefimage.png"),
    },
    likes: "2,310",
  },
];

const StoryListScreen = () => {
  const navigation = useNavigation();
  const flatListRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // Hide the status bar
    StatusBar.setHidden(true, "fade");

    navigation.setOptions({
      headerShown: false,
      gestureEnabled: false,
    });

    return () => {
      StatusBar.setHidden(false, "fade"); // Restore status bar when leaving
    };
  }, []);

  const onViewableItemsChanged = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setActiveIndex(viewableItems[0].index);
    }
  }).current;

  return (
    <View style={styles.container}>
         <View style={styles.dotsContainer}>
            {stories.map((_, index) => (
              <View key={index} style={[styles.dot, activeIndex === index && styles.activeDot]} />
            ))}
          </View>
    {/* Fixed Top Icons */}
    <View style={styles.topIcons}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <AntDesign name="arrowleft" size={28} color="white" />
      </TouchableOpacity>
      <TouchableOpacity>
        <Feather name="bookmark" size={28} color="white" />
      </TouchableOpacity>
    </View>

    <FlatList
      ref={flatListRef}
      data={stories}
      keyExtractor={(item) => item.id}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      onViewableItemsChanged={onViewableItemsChanged}
      viewabilityConfig={{ viewAreaCoveragePercentThreshold: 50 }}
      renderItem={({ item }) => (
        <View style={styles.storyContainer}>
          {/* Full-Screen Video */}
          <Video
            source={item.video}
            style={styles.video}
            resizeMode="cover"
            shouldPlay
            isLooping
            isMuted
          />

          {/* Dots Indicator */}
         

          {/* Bottom Overlay */}
          <View style={styles.overlay}>
            <Text style={styles.category}>Story List | Egg Delight</Text>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>

            {/* Chef & Likes */}
            <View style={styles.bottomRow}>
              {/* Chef Info */}
              <View style={styles.chefContainer}>
                <Image source={item.chef.profileImage} style={styles.chefImage} />
                <View>
                  <Text style={styles.chefName}>{item.chef.name}</Text>
                  <Text style={styles.rating}>{item.chef.rating} ★ Rating</Text>
                </View>
              </View>

              {/* Likes */}
              <View style={styles.likesContainer}>
                <AntDesign name="heart" size={20} color="white" />
                <Text style={styles.likes}>{item.likes} Likes</Text>
              </View>
            </View>
          </View>
        </View>
      )}
    />
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensures full-screen coverage
  },
  storyContainer: {
    width,
    height:"99%",
    position: "relative",
  },
  video: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  dotsContainer: {
    position: "absolute",
    top: 40,
    alignSelf: "center",
    flexDirection: "row",
    zIndex: 10,
  },
  dot: {
    width: 20,
    height: 3,
    borderRadius: 4,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: "white",
    width: 20,
    height: 3,
  },
  topIcons: {
    position: "absolute",
    top: 40,
    left: 20,
    right: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: 10,
  },
  overlay: {
    position: "absolute",
    bottom: 40,
    left: 20,
    right: 20,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Slightly darker for better text contrast
    padding: 20,
    borderRadius: 10,
  },
  category: {
    color: "white",
    fontSize: 12,
    textTransform: "uppercase",
    marginBottom: 5,
  },
  title: {
    color: "white",
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 5,
  },
  description: {
    color: "white",
    fontSize: 14,
    marginBottom: 15,
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  chefContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  chefImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  chefName: {
    color: "white",
    fontSize: 14,
  },
  rating: {
    color: "yellow",
    fontSize: 12,
  },
  likesContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  likes: {
    color: "white",
    fontSize: 14,
  },
});

export default StoryListScreen;

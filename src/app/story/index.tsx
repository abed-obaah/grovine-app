import React, { useEffect, useRef, useState } from "react";
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet, Dimensions, StatusBar, Animated, Pressable } from "react-native";
import { Video } from "expo-av";
import { AntDesign, Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { router } from "expo-router";

const { width, height } = Dimensions.get("window");

const stories = [
    {
      id: "1",
      title: "Egg Shakshuka",
      description: "Egg Shakshuka is a hearty and flavorful Middle Eastern dish featuring poached eggs simmered in a rich, spiced tomato and bell pepper sauce",
      video: require("@/assets/shakshuka.webm"),
      image: null, // No image for this story, only video
      duration: 5000,
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
      description: "Egg Shakshuka is a hearty and flavorful Middle Eastern dish featuring poached eggs simmered in a rich, spiced tomato and bell pepper sauce",
      video: null, // No video for this one, only image
      image: require("@/assets/images/eggs_benedict.png"),
      duration: 5000,
      chef: {
        name: "Chef Richard Nduh",
        rating: "4.7",
        profileImage: require("@/assets/images/chefimage.png"),
      },
      likes: "2,310",
    },
    {
      id: "3",
      title: "Eggs Benedict",
      description: "Egg Shakshuka is a hearty and flavorful Middle Eastern dish featuring poached eggs simmered in a rich, spiced tomato and bell pepper sauce",
      video: require("@/assets/fast.mp4"), // No video for this one, only image
      image: null,
      duration: 5000,
      chef: {
        name: "Chef Richard Nduh",
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
    const progressAnim = useRef(stories.map(() => new Animated.Value(0))).current;
    const videoRef = useRef(null);
    const [isPaused, setIsPaused] = useState(false);
  
    useEffect(() => {
      StatusBar.setHidden(true, "fade");
      navigation.setOptions({ headerShown: false, gestureEnabled: false });
  
      startProgressAnimation(activeIndex);
  
      return () => {
        StatusBar.setHidden(false, "fade");
      };
    }, [activeIndex]);
  
    const startProgressAnimation = (index) => {
      progressAnim[index].setValue(0);
      Animated.timing(progressAnim[index], {
        toValue: 1,
        duration: stories[index].duration,
        useNativeDriver: false,
      }).start(({ finished }) => {
        if (finished) {
          goToNextStory();
        }
      });
    };
  
    const pauseProgress = () => {
      setIsPaused(true);
      Animated.timing(progressAnim[activeIndex]).stop();
      if (videoRef.current) {
        videoRef.current.pauseAsync();
      }
    };
  
    const resumeProgress = () => {
      setIsPaused(false);
      startProgressAnimation(activeIndex);
      if (videoRef.current) {
        videoRef.current.playAsync();
      }
    };
  
    const goToNextStory = () => {
        if (activeIndex < stories.length - 1) {
            setActiveIndex(activeIndex + 1);
            flatListRef.current.scrollToIndex({ index: activeIndex + 1, animated: true });
        } 
        // Remove navigation.goBack() to avoid closing the screen unexpectedly
    };
    
  
    return (
      <View style={styles.container}>
        {/* Top Icons */}
        <View style={styles.topIcons}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
                                                source={require("@/assets/icons/back-button.png")}
                                                className="w-10 h-10"
                                                resizeMode="contain"
                                            />
          </TouchableOpacity>
          <TouchableOpacity>
          <Image
                                                source={require("@/assets/icons/bookmark.png")}
                                                className="w-10 h-10"
                                                resizeMode="contain"
                                            />
          </TouchableOpacity>
        </View>
  
        {/* Progress Bars */}
        <View style={styles.dotsContainer}>
          {stories.map((_, index) => (
            <View key={index} style={styles.dotWrapper}>
              <Animated.View
                style={[
                  styles.progressBar,
                  {
                    width: progressAnim[index].interpolate({
                      inputRange: [0, 1],
                      outputRange: ["0%", "100%"],
                    }),
                  },
                ]}
              />
            </View>
          ))}
        </View>
  
        <FlatList
          ref={flatListRef}
          data={stories}
          keyExtractor={(item) => item.id}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={(event) => {
            const newIndex = Math.round(event.nativeEvent.contentOffset.x / width);
            setActiveIndex(newIndex);
          }}
          renderItem={({ item }) => (
            <Pressable
              style={styles.storyContainer}
              onPressIn={pauseProgress}
              onPressOut={resumeProgress}
            >
              {item.video ? (
                <Video
                  ref={videoRef}
                  source={item.video}
                  style={styles.video}
                  resizeMode="cover"
                  shouldPlay={!isPaused}
                  isLooping={false}
                  isMuted
                  onPlaybackStatusUpdate={(status) => {
                    if (status.didJustFinish) {
                      goToNextStory();
                    }
                  }}
                />
              ) : (
                <Image source={item.image} style={styles.image} resizeMode="cover" />
              )}
  
              {/* Bottom Overlay */}
              <View style={styles.overlay}>
                            <View className="flex-row items-center gap-2">
                                <Text className="text-white font-gilroyRegular">Story List</Text>
                                <Image
                                                source={require("@/assets/icons/playButton.png")}
                                                className="w-5 h-3"
                                                resizeMode="contain"
                                            />
                                <Text className="text-white font-gilroyRegular">Egg Delight</Text>
                            </View>
                           
                            <Text style={styles.title}>{item.title}</Text>
                            <Text style={styles.description}>{item.description}</Text>

                            {/* Chef and Likes Section */}
                            <View style={styles.bottomRow}>
                                <View style={styles.chefContainer}>
                                <Image source={item.chef.profileImage} style={styles.chefImage} />
                                <View>
                                    <Text style={styles.chefName}>{item.chef.name}</Text>
                                    <Text style={styles.rating}>{item.chef.rating}Rating</Text>
                                </View>
                                </View>

                                <View style={styles.likesContainer}>
                                        <Image
                                            source={require("@/assets/icons/heart.png")}
                                            style={styles.recipeButtonIcon}
                                            resizeMode="contain"
                                        />
                                    <Text style={styles.likes}>{item.likes} Likes</Text>
                                    </View>
                                <View style={styles.bottomRow}>
                                        <View style={styles.likesContainer}>
                                        <Image
                                            source={require("@/assets/icons/share.png")}
                                            style={styles.recipeButtonIcon}
                                            resizeMode="contain"
                                        />
                                        </View>
                                  </View>
                            {/* Chef and Likes Section */}
                            
                 </View>

  {/* View Recipe Button */}
            <TouchableOpacity style={styles.recipeButton}
                          onPress={() => {
                              // setShowSuccessModal(false);
                              router.push("/saved-recipe/RecipeDetailScreen");
                            }}
            >
                <Text style={styles.recipeButtonText}>View Recipe</Text>
                <Image
                source={require("@/assets/icons/side-filter.png")}
                style={styles.recipeButtonIcon}
                resizeMode="contain"
                />
            </TouchableOpacity>
            </View>

            </Pressable>
          )}
        />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    storyContainer: {
      width,
      height: "100%",
      position: "relative",
    },
    video: {
      width: "100%",
      height: "100%",
      position: "absolute",
    },
    image: {
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
    dotWrapper: {
      width: 40,
      height: 4,
      backgroundColor: "rgba(255, 255, 255, 0.5)",
      borderRadius: 4,
      marginHorizontal: 5,
      overflow: "hidden",
    },
    progressBar: {
      height: "100%",
      backgroundColor: "white",
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
      bottom: 50,
      left: 3,
      right: 20,
    //   backgroundColor: "rgba(0, 0, 0, 0.5)",
      padding: 20,
      borderRadius: 10,
    },
    bottomRow: {
        flexDirection: "row",
        // justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10,
      },
      recipeButton: {
        backgroundColor: "#4CAF50",
        marginTop: 15,
        paddingVertical: 16,
        borderRadius: 5,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width:300
      },
      recipeButtonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "600",
        marginRight: 8,
      },
      recipeButtonIcon: {
        width: 18,
        height: 18,
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
    //   justifyContent: "space-between",
      alignItems: "center",
    },
    chefContainer: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor:'#F6F5F3',
      color:'#4A4A4A',
      padding:5,
      borderRadius:4
    },
    chefImage: {
      width: 30,
      height: 30,
      borderRadius: 20,
      marginRight: 10,
    },
    chefName: {
    //   color: "white",
      fontSize: 14,
    },
    rating: {
      color: "#4A4A4A",
      fontSize: 12,
    },
    likesContainer: {
      flexDirection: "row",
      alignItems: "center",
      gap: 5,
      backgroundColor:'#F6F5F32B',
      padding:10,
      borderRadius:4,
      marginLeft:5
    },
    likes: {
      color: "white",
      fontSize: 14,
    },
  });

export default StoryListScreen;

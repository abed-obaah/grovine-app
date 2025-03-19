import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { Video } from "expo-av";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import VideoRecipe from '@/components/RecipeVideo'

const VideoScreen = () => {
  return (
    <View className="flex-1 bg-white">
      {/* HEADER */}
      <View className="flex-row items-center px-4 py-2 bg-white shadow-md">
        <TouchableOpacity className="p-2">
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <Text className="text-lg font-bold text-gray-900 flex-1 text-center">
          Recipe Detail
        </Text>
      </View>

      <ScrollView className="flex-1">
        <View className="w-full bg-black">
        <VideoRecipe/>
        </View>

        <View className="p-4">
          <Text className="text-xl font-semibold text-gray-900">
            Egusi Soup With Chicken
          </Text>
          <Text className="text-gray-600 mt-2">
            Egg Shakshuka is a hearty and flavorful Middle Eastern dish featuring poached eggs simmered in a rich, spiced tomato and bell pepper sauce.{" "}
            <Text className="text-green-500 font-medium">view more...</Text>
          </Text>

        
        </View>

        {/* RELATED RECIPES */}
        <View className="p-4">
          <View className="flex-row justify-between items-center">
            <Text className="text-lg font-semibold text-gray-900">Related Recipes</Text>
            <Text className="text-green-500 font-medium">View all</Text>
          </View>

        
        </View>
      </ScrollView>

      {/* BOTTOM BUTTON */}
      <TouchableOpacity className="bg-green-500 py-4 flex-row items-center justify-center rounded-md mx-4 mb-4">
        <Text className="text-white text-lg font-semibold">View Recipe</Text>
        <MaterialIcons name="shopping-cart" size={20} color="white" className="ml-2" />
      </TouchableOpacity>
    </View>
  );
};

export default VideoScreen;

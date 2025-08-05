import { TouchableOpacity,} from "react-native";
import { Video } from "expo-av";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import VideoRecipe from '@/components/RecipeVideo'
import { Header } from "@/components/header";
import { ScreenLayout } from "@/components/screen-layout";
import {
	Button,
	FocusAwareStatusBar,
	Image,
	ScrollView,
	Text,
	View,
} from "src/ui";
import RelatedRecipe from '@/app/saved-recipe/related-recipe'

const VideoScreen = () => {
  return (
   <ScreenLayout useStaticView backgroundColor="#FDFDFD">
      {/* HEADER */}
       <View className="pt-[20px]">
                   <Header title="Recipe Detail" />
        </View>
        <View className="w-full bg-black">
            <VideoRecipe/>
        </View>
      <ScrollView className="flex-1"
       contentContainerStyle={{ flexGrow: 1, paddingBottom: 40 }}>
        <View className="p-4">
          <Text className="text-xl font-semibold text-gray-900">
            Egusi Soup With Chicken
          </Text>
          <Text className="text-gray-600 mt-2">
            Egg Shakshuka is a hearty and flavorful Middle Eastern dish featuring poached eggs simmered in a rich, spiced tomato and bell pepper sauce.{" "}
            <Text className="text-[#4CAF50] font-medium">view more...</Text>
          </Text>

        
        </View>

        {/* RELATED RECIPES */}
        <View className="p-4">
          <View className="flex-row justify-between items-center mb-2">
            <Text className="text-lg font-semibold text-gray-900">Related Recipes</Text>
            <Text className="text-[#4CAF50] font-medium">View all</Text>
          </View>
            <RelatedRecipe/>
        </View>
        <TouchableOpacity className="bg-[#4CAF50] py-4 flex-row items-center justify-center rounded-md mx-4 mb-4">
        <Text className="text-white text-lg font-semibold">View Recipe</Text>
        <MaterialIcons name="shopping-cart" size={20} color="white" className="ml-2" />
      </TouchableOpacity>
      </ScrollView>

      {/* BOTTOM BUTTON */}
     
    </ScreenLayout>
  );
};

export default VideoScreen;

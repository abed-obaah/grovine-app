import React, { useState } from "react";
import { View, Text, TextInput, Image, FlatList, TouchableOpacity, ScrollView, Pressable } from "react-native";
import { MaterialIcons, Feather } from "@expo/vector-icons";
import { ScreenLayout } from "@/components/screen-layout";
import { router } from "expo-router";

const recipes = [
  { id: 1, name: "Egg Delights", image: require("@/assets/egg_delights.png") },
  { id: 2, name: "Protein Power", image: require("@/assets/protein_power.png") },
  { id: 3, name: "Sweet Treats", image: require("@/assets/sweet_treats.png") },
  { id: 4, name: "10mins Meals", image: require("@/assets/sweet_treats.png") },
  { id: 5, name: "Snack Attack", image: require("@/assets/sweet_treats.png") },
];

const recommendedRecipes = [
  {
    id: 1,
    title: "Egusi Soup With Chicken",
    price: "₦20,000",
    rating: 4.5,
    chef: "Chef Richard Nduh",
    image: require("@/assets/egusi_soup.png"),
     timeLeft: "15:09", 
  },
  {
    id: 2,
    title: "Jollof Rice & Grilled Chicken",
    price: "₦18,500",
    rating: 4.7,
    chef: "Chef Amaka Uche",
    image: require("@/assets/egusi_soup.png"),
    timeLeft: "15:09", // Unique number of baskets left
  },
  {
    id: 3,
    title: "Banga Soup & Starch",
    price: "₦22,000",
    rating: 4.6,
    chef: "Chef Tunde Bayo",
    image: require("@/assets/egusi_soup.png"),
    timeLeft: "15:09", // Unique number of baskets left
  },
  {
    id: 4,
    title: "Efo Riro & Poundo Yam",
    price: "₦19,000",
    rating: 4.8,
    chef: "Chef Aisha Bello",
    image: require("@/assets/egusi_soup.png"),
    timeLeft: "15:09", // No baskets left, so label will be hidden
  },
];


const HomeScreen = () => {
  const [outlinedMarkers, setOutlinedMarkers] = useState({});

  // Function to toggle marker for a specific item
  const toggleMarker = (id) => {
    setOutlinedMarkers((prevState) => ({
      ...prevState,
      [id]: !prevState[id], // Toggle the specific item's state
    }));
  };
  return (
    <ScreenLayout 
    useStaticView
    >

      <View className="px-4">
            <View className="flex-row justify-between items-center mb-4 pt-5">
                  <Text className="text-2xl font-gilroySemibold text-[#4A4A4A]">Find The Right Recipe {"\n"}For Your Favorites</Text>
                  <Pressable onPress={() => router.push("/saved-recipe")}>
                   <MaterialIcons name="bookmark-border" size={24} color="black" />
                  </Pressable>
                 
                </View>
                <View className="flex-row items-center  rounded-lg px-1.5 py-1.2 mb-4 border border-[#93939340]">
                  <TextInput placeholder="Search for recipes, chefs" className="flex-1 text-lg" />
                  <Image
                            source={require("../../../assets/images/mage_filter.png")}
                            className="w-4 h-5 mr-2"
                            style={{ resizeMode: "cover" }}
                          />
                </View>
      </View>
         
        <ScrollView className="flex-1  px-5">

      

      {/* Quick Recipes */}
      <Text className="text-lg font-gilroyMedium mb-2 text-subTextColor">Quick Recipes</Text>
            <FlatList
            data={recipes}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity 
                onPress={() => router.push({ pathname: "/story", params: { id: item.id, name: item.name } })}
              >
                <View className="items-center mr-4">
                  <Image source={item.image} className="w-20 h-20 rounded-full" />
                  <Text className="text-sm mt-2">{item.name}</Text>
                </View>
              </TouchableOpacity>
            )}
          />

      {/* Recommended Recipes */}
      <Text className="text-lg font-semibold mt-20 mb-2">Recommended Recipes</Text>
            <FlatList
        data={recommendedRecipes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View className="rounded-lg flex-col p-3 mb-3 items-center border border-[#93939340]">
            
            {/* Image Wrapper for Positioning */}
            <View className="relative w-full">
              <Image source={item.image} className="w-full h-56 rounded-t-lg" />

              {/* Unique "Baskets Left" label for each item */}
              {item.timeLeft && (
                  <View className="absolute bottom-2 right-2 bg-[#4A4A4A] px-3 py-1 ">
                    <Text className="text-xs text-white">{item.timeLeft}</Text>
                  </View>
                )}
            </View>

            <View className="flex-1 w-full p-3">
              {/* Title and Price - Side by Side */}
              <View className="flex-row justify-between items-center">
                <Text className="text-lg font-gilroyMedium">{item.title}</Text>
                <Text className="text-[#4A4A4A] font-bold">{item.price}</Text>
              </View>

              {/* Chef Info and Marker - Side by Side */}
              <View className="flex-row items-center justify-between">
                <View className="flex-row items-center gap-1 mt-2">
                  {/* Chef Image */}
                  <View className="overflow-hidden">
                    <Image
                      source={require("../../../assets/images/chefimage.png")}
                      className="w-10 h-10"
                      style={{ resizeMode: "cover" }}
                    />
                  </View>

                  {/* Chef Name & Rating */}
                  <View>
                    <Text className="text-gray-500 text-sm">{item.chef}</Text>
                    <Text className="text-yellow-500 text-sm mt-1">
                      {item.rating} Rating
                    </Text>
                  </View>
                </View>

                {/* Toggle Marker Icon */}
                <Pressable onPress={() => toggleMarker(item.id)}>
                  <View className="overflow-hidden">
                    <Image
                      source={
                        outlinedMarkers[item.id]
                          ? require("../../../assets/images/marker-outline.png") // Outline marker
                          : require("../../../assets/images/marker.png") // Filled marker
                      }
                      className="w-5 h-6"
                      style={{ resizeMode: "cover" }}
                    />
                  </View>
                </Pressable>
              </View>
            </View>
          </View>
        )}
      />


    </ScrollView>
    </ScreenLayout>
  
  );
};

export default HomeScreen;

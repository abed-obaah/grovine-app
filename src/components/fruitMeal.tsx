import { View, Text, Image, TouchableOpacity } from "@/ui";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { FlatList } from "react-native";

const products = [
  {
    id: 1,
    name: "Grape",
    price: "₦4,800.79",
    image: require("@/assets/images/fruit-basket.png"), // Replace with actual image
  },
  {
    id: 2,
    name: "Apple",
    price: "₦4,800.79",
    image: require("@/assets/images/fruit-basket.png"),
  },
  {
    id: 3,
    name: "Pineapple",
    price: "₦4,800.79",
    image: require("@/assets/images/fruit-basket.png"),
  },
  {
    id: 4,
    name: "Kiwi",
    price: "₦4,800.79",
    image: require("@/assets/images/fruit-basket.png"),
  },
  {
    id: 5,
    name: "Kiwi",
    price: "₦4,800.79",
    image: require("@/assets/images/fruit-basket.png"),
  },
  {
    id: 6,
    name: "Kiwi",
    price: "₦4,800.79",
    image: require("@/assets/images/fruit-basket.png"),
  },
];

export default function ProductList() {
  return (
    <View className="px-2">
      {/* Header Section */}
      <View className="flex-row justify-between items-center mb-4">
        <View className="flex flex-row items-center">
               <Image
                                         source={require("@/assets/images/arrow-circle-right.png")}
                                         className="w-6 h-6 rounded-md mr-2"
                                        contentFit="contain"
                                         />
        <Text className="text-md font-gilroySemibold text-[#939393]">Explore Fruit Meal Recipes</Text>
        </View>
        
        <Text className="text-green-500 font-semibold">View all</Text>
      </View>

      {/* Product List */}
      <FlatList
  data={products}
  keyExtractor={(item) => item.id.toString()}
  horizontal={true}  // Enables horizontal scrolling
  showsHorizontalScrollIndicator={false}  // Hides the scrollbar for a cleaner look
  contentContainerStyle={{ paddingHorizontal: 10 }}  // Adds spacing on the sides
  renderItem={({ item }) => (
    <View className="rounded-lg px-2 py-2 mb-4 w-[250px] border border-[#93939340] mr-4">
      {/* Product Image with Floating Badge */}
      <View className="relative">
        <Image source={item.image} className="w-full h-40 rounded-lg" />
        {/* Floating Badge */}
        <View className="absolute top-2 left-2 bg-gray-200 px-2 py-1 rounded-md">
          <Text className="text-xs text-gray-600">2 Baskets Left</Text>
        </View>
      </View>

      {/* Product Name & Price */}
      <View className="flex-row justify-between items-center mt-2">
        <Text className="text-gray-700 font-bold">{item.name}</Text>
        <Text className="text-gray-500">{item.price}</Text>
      </View>

      {/* Add to Cart Button */}
      <TouchableOpacity className="bg-[#4CAF50] mt-2 py-2 rounded-md flex-row items-center justify-center">
        <Text className="text-white font-bold mr-2">Add to Cart</Text>
        <MaterialIcons name="shopping-cart" size={20} color="white" />
      </TouchableOpacity>
    </View>
  )}
/>



    </View>
  );
}

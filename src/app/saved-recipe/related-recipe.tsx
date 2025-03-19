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
];

export default function ProductList() {
  return (
    <View className="px-0">
      {/* Product List */}
      <FlatList
        data={products}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        renderItem={({ item }) => (
          <View className="rounded-lg px-2 py-2 mb-4 w-[49%] border border-[#93939340]">
            {/* Product Image with Floating Badge */}
            <View className="relative">
              <Image source={item.image} className="w-full h-32 rounded-t-lg" />
              {/* <View className="absolute top-2 left-2 bg-gray-200 px-2 py-1 rounded-md">
                <Text className="text-xs text-gray-600">2 Baskets Left</Text>
              </View> */}
            </View>
            <View className="flex-row justify-between items-center mt-2">
        <Text className="text-gray-700 font-bold">{item.name}</Text>
        <Text className="text-gray-500">{item.price}</Text>
      </View>
          </View>
        )}
      />
    </View>
  );
}

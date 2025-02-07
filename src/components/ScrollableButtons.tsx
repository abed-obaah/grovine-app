import { useState } from "react";
import { View, Text, TouchableOpacity } from "@/ui";
import { FlatList } from "react-native";
import React from "react";

const categories = ["Vegetables", "Fruits", "Baby & Kids", "Proteins", "Baked Foods"];

const ScrollableButtons = () => {
  const [selected, setSelected] = useState("Fruits"); // Default selected item

  return (
    <View className="py-2 px-6">
      <FlatList
        data={categories}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => setSelected(item)}
            className={`px-6 py-2 rounded-lg mr-3 border border-gray-300 ${
              selected === item ? "bg-[#4CAF50]" : "bg-transparent"
            }`}
          >
            <Text
              className={`font-bold ${
                selected === item ? "text-white" : "text-[#939393]"
              }`}
            >
              {item}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default ScrollableButtons;

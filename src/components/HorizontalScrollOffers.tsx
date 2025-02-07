import { View, Text, Image, TouchableOpacity, } from "@/ui";
import React from "react";
import { FlatList } from "react-native";

const offers = [
    {
      id: "1",
      title: "Fresh Fruit Basket Pack",
      price: "₦34,800.79",
      image: require("@/assets/images/fruit-basket.png"), // Replace with actual image path
      basketsLeft: 2,
    },
    {
      id: "2",
      title: "Fresh Fruit Basket",
      price: "₦28,500.00",
      image: require("@/assets/images/fruit-basket.png"),
      basketsLeft: 2,
    },
    {
      id: "3",
      title: "Fresh Fruit Basket",
      price: "₦28,500.00",
      image: require("@/assets/images/fruit-basket.png"),
      basketsLeft: 2,
    },
    {
      id: "4",
      title: "Fresh Fruit Basket",
      price: "₦28,500.00",
      image: require("@/assets/images/fruit-basket.png"),
      basketsLeft: 2,
    },
    // Add more items here...
  ];

const HorizontalScrollOffers = () => {
  return (
    <View className="py-4">
      <Text className="text-md font-gilroyMedium px-4 text-[#939393] mb-2">Rush Hour Offers</Text>

      <FlatList
        data={offers}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingHorizontal: 16 }}
        renderItem={({ item }) => (
          <View className=" rounded-lg w-[290px] mr-4">
            {/* Image Container with Floating Badge */}
            <View className="relative">
              <Image source={item.image} className="w-full h-40 rounded-t-lg" />
              
              {/* Floating Badge - Positioned at Bottom Left */}
              <View className=" flex absolute bottom-2 left-2 bg-white px-3 py-2 rounded-md shadow-md flex-row items-center">
              <Image
                             source={require("@/assets/images/shopping-basket.png")}
                             className="w-4 h-4 rounded-md mr-2"
                            contentFit="contain"
                             />
                <Text className="text-gray-700 text-xs font-semibold">
                  
                             {item.basketsLeft} Baskets Left
                </Text>
              </View>
            </View>

            {/* Product Info */}
            <View className="">
                <View className="flex flex-row items-center justify-between my-2"> 
                        <Text className="text-lg font-gilroyMedium text-[#4A4A4A]">{item.title}</Text>
                        <Text className="text-[#4A4A4A] font-semibold"> ~{item.price}</Text>
                </View>
             

              {/* Add to Cart Button */}
              {/* <TouchableOpacity className="bg-[#4CAF50] mt-2 py-2 rounded-lg flex-row items-center justify-center w-60">
                <Text className="text-white font-bold">Add to Cart</Text>
              </TouchableOpacity> */}
              <TouchableOpacity className="bg-[#4CAF50] mt-2 py-2 rounded-md flex-row items-center justify-center w-48">
                <Text className="text-white font-bold mr-2">Add to Cart</Text> 
                <Image
                                    source={require("@/assets/images/shopping-cart.png")}
                                    className="w-4 h-4 rounded-md mr-2"
                                    contentFit="contain"
                                    />
                </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default HorizontalScrollOffers;

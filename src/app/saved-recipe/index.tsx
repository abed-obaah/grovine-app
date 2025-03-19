import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "@/ui";
import { FlatList, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native'



type Order = {
  id: number;
  title: string;
  items: number;
  price: string;
  image: any;
};

type OrdersData = {
  "My Cart": Order[];
  Ongoing: Order[];
  Completed: Order[];
  Canceled: Order[];
};

const OrdersScreen = () => {
  const [selectedTab, setSelectedTab] = useState<keyof OrdersData>("My Cart");
  const navigation = useNavigation();
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

    const [outlinedMarkers, setOutlinedMarkers] = useState<Record<number, boolean>>({});
  
    // Function to toggle marker for a specific item
    const toggleMarker = (id: number) => {
      setOutlinedMarkers((prevState) => ({
        ...prevState,
        [id]: !prevState[id], // Toggle the specific item's state
      }));
    };

  return (
    <View className="flex-1 bg-white px-4">
          <View className="flex-row items-center justify-between px-2 py-3 border-b border-[#E0E5ED] mx-0 mb-5">
        {/* Back Button */}
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require("@/assets/images/Back.png")}
            className="w-8 h-8"
            contentFit="contain"
          />
        </TouchableOpacity>

        {/* Centered Title */}
        <Text className="text-lg font-semibold">Saved Recipes</Text>

        {/* Placeholder View to Maintain Center Alignment */}
        <View className="w-8 h-8" />
      </View>


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
                    source={require("@/assets/images/chefimage.png")}
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
                        ? require("@/assets/images/marker-outline.png") // Outline marker
                        : require("@/assets/images/marker.png") // Filled marker
                    }
                    className="w-5 h-6"
                    style={{ resizeMode: "cover" }}
                  />
                </View>
              </Pressable>
            </View>
          </View>


          <View className="w-full">
              <TouchableOpacity className="bg-[#4CAF50] mt-5 py-4 rounded-md flex-row items-center justify-center">
                        <Text className="text-white font-thin mr-2">Add Ingredients to Cart</Text>
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

export default OrdersScreen;

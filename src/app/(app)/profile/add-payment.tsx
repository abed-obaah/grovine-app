import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "@/ui";
import { FlatList } from "react-native";
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
  const ordersData: OrdersData = {
    "My Cart": [
      { id: 1, title: "Order 1", items: 4, price: "67,500", image: require("@/assets/images/groceries.png") },
      { id: 2, title: "Order 2", items: 4, price: "67,500", image: require("@/assets/images/groceries.png") },
      { id: 3, title: "Order 3", items: 4, price: "67,500", image: require("@/assets/images/groceries.png") },
      { id: 4, title: "Order 4", items: 4, price: "67,500", image: require("@/assets/images/groceries.png") },
      { id: 5, title: "Order 5", items: 4, price: "67,500", image: require("@/assets/images/groceries.png") },
    ],
    Ongoing: [
      { id: 3, title: "Order 3", items: 3, price: "50,000", image: require("@/assets/images/groceries.png") },
    ],
    Completed: [
      { id: 4, title: "Order 4", items: 5, price: "80,000", image: require("@/assets/images/groceries.png") },
    ],
    Canceled: [
      { id: 5, title: "Order 5", items: 2, price: "30,000", image: require("@/assets/images/groceries.png") },
    ],
  };

  // State to manage the visibility of buttons for each order
  const [expandedOrder, setExpandedOrder] = useState<number | null>(null);

  const toggleButtons = (orderId: number) => {
    setExpandedOrder(expandedOrder === orderId ? null : orderId); // Toggle visibility of buttons for this order
  };

  return (
    <View className="flex-1 bg-white px-4">
      <View className="flex-row items-center justify-between px-4 py-3 border-b border-gray-200">
        {/* Back Button */}
        <TouchableOpacity
         onPress={() => navigation.goBack()}
         >
          <Image
            source={require("@/assets/images/Back.png")}
            className="w-8 h-8"
            contentFit="contain"
          />
        </TouchableOpacity>

        {/* Centered Title */}
        <Text className="text-lg font-semibold">Orders</Text>

        {/* Notification Icon */}
        <TouchableOpacity>
          <Image
            source={require("@/assets/images/notif.png")}
            className="w-8 h-5"
            contentFit="contain"
          />
        </TouchableOpacity>
      </View>

      {/* Tabs */}
      <View className="flex-row justify-between mt-4">
        {["My Cart", "Ongoing", "Completed", "Canceled"].map((tab) => (
          <TouchableOpacity
            key={tab}
            onPress={() => setSelectedTab(tab)}
            className={`px-4 py-2 rounded-lg ${
              selectedTab === tab ? "bg-green-500 text-white" : "bg-gray-200"
            }`}
          >
            <Text className={selectedTab === tab ? "text-white" : "text-gray-600"}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Orders List */}
      <FlatList
        data={ordersData[selectedTab]}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View className="border border-gray-300 rounded-lg p-4 mt-4">
            <View className="flex-row items-center">
                    <Image source={item.image} className="w-12 h-12 rounded-lg" />
                    <View className="flex-1 ml-3">
                    <Text className="font-semibold">{item.title}</Text>
                    <Text className="text-gray-500">
                        {item.items} Items - NGN {item.price}
                    </Text>
                    </View>
                    <TouchableOpacity onPress={() => toggleButtons(item.id)} className="ml-3">
              <Ionicons
                name={expandedOrder === item.id ? "caret-up" : "caret-down"}
                size={24}
                color="gray"
              />
            </TouchableOpacity>
             </View>

            {/* Conditional rendering of buttons */}
            {expandedOrder === item.id && (
              <View className="flex-row gap-6 mt-4">
              <TouchableOpacity className="bg-green-500 px-4 py-4 rounded-md w-64">
                <Text className="text-white text-center">View Order</Text>
              </TouchableOpacity>
              <TouchableOpacity className="bg-green-200 px-8 py-4 rounded-md ml-2">
                <Text className="text-green-700">Clear</Text>
              </TouchableOpacity>
            </View>
            )}
          </View>
        )}
      />
    </View>
  );
};

export default OrdersScreen;

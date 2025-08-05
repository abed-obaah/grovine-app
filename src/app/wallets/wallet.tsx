// screens/WalletScreen.js
import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  StatusBar,
  ImageBackground,
  Modal,
  Pressable
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Svg, { Path } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';
import { ArrowDown, ArrowUp } from 'iconsax-react-nativejs'
// import { ArrowDown, ArrowUp } from 'iconsax-react-native';
// Mock data for the order summary list
const orderData = [
  {
    id: '1',
    name: 'Order 1',
    time: 'Dec 8th - 15:00pm',
    amount: '50,000',
    type: 'debit', 
  },
  {
    id: '2',
    name: 'Order 1',
    time: 'Dec 8th - 15:00pm',
    amount: '50,000',
    type: 'debit', 
  },
  {
    id: '3',
    name: 'Order 1',
    time: 'Dec 8th - 15:00pm',
    amount: '50,000',
    type: 'debit', 
  },
  {
    id: '4',
    name: 'Order 1',
    time: 'Dec 8th - 15:00pm',
    amount: '50,000',
    type: 'debit', 
  },
  {
    id: '5',
    name: 'Order 1',
    time: 'Dec 8th - 15:00pm',
    amount: '50,000',
    type: 'debit', 
  },
  {
    id: '6',
    name: 'Wallet Top Up',
    time: 'Dec 8th - 15:00pm',
    amount: '5,000',
    type: 'credit',
  },
];


// SVG component for the top-right decorative curve
const TopCurve = () => (
  <Svg width="80" height="40" viewBox="0 0 80 40" className="absolute top-0 right-0">
    <Path
      d="M 80 0 C 60 0, 80 20, 80 40 L 80 0 Z"
      fill="#6EE7B7"
      opacity="0.6"
    />
    <Path
      d="M 80 0 C 50 0, 80 30, 80 40 L 80 0 Z"
      fill="#34D399"
      opacity="0.6"
    />
  </Svg>
);

// SVG component for the bottom-left decorative curve
const BottomCurve = () => (
  <Svg width="80" height="40" viewBox="0 0 80 40" className="absolute bottom-0 left-0">
    <Path
      d="M 0 40 C 20 40, 0 20, 0 0 L 0 40 Z"
      fill="#6EE7B7"
      opacity="0.6"
    />
    <Path
      d="M 0 40 C 30 40, 0 10, 0 0 L 0 40 Z"
      fill="#34D399"
      opacity="0.6"
    />
  </Svg>
);

// Individual Order Item Component
const OrderItem = ({ item }) => {
  const isCredit = item.type === 'credit'; // check if the transaction is credit or debit
  return (
    <View className="flex-row justify-between items-center bg-white p-4 rounded-xl mx-4 my-2 shadow-sm shadow-slate-200">
      {/* Left: Name and Timestamp */}
      <View>
        <Text className="text-slate-800 font-bold text-base">{item.name}</Text>
        <Text className="text-slate-500 text-sm">{item.time}</Text>
      </View>

      {/* Right: Amount and Arrow */}
      <View className="flex-row items-center space-x-4">
        <Text className={`text-base font-bold pr-1 ${isCredit ? 'text-green-500' : 'text-gray-700'}`}>
          {isCredit ? `+${item.amount}` : `-${item.amount}`}
        </Text>
        <View
          className={`w-6 h-6 rounded-full justify-center items-center ${
            isCredit ? 'bg-green-400' : 'bg-red-500'
          }`}
        >
         <View
  className={`w-6 h-6 rounded-full justify-center items-center ${
    isCredit ? 'bg-green-400' : 'bg-red-500'
  }`}
>
  {isCredit ? (
    <ArrowDown size={16} color="#fff" />
  ) : (
    <ArrowUp size={16} color="#fff" />
  )}
</View>
        </View>
      </View>
    </View>
  );
};




// Main Screen Component
const WalletScreen = () => {
  const navigation = useNavigation();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

// State for PIN entry
const [pin, setPin] = useState("");

// Handler for keypad button presses
const handleKeyPress = (key) => {
  if (key === '←') {
    setPin((prev) => prev.slice(0, -1));
  } else if (pin.length < 4 && /^\d$/.test(key)) {
    const updatedPin = pin + key;
    setPin(updatedPin);
    if (updatedPin.length === 4) {
      // Automatically submit on 4-digit completion
      console.log("Entered PIN:", updatedPin);
      setTimeout(() => {
        toggleModal();
        setPin(""); // reset for next time
      }, 300);
    }
  }
};


  return (
    <SafeAreaView className="flex-1 bg-slate-50">
      <StatusBar barStyle="dark-content" />
      
      {/* Header */}
      <View className="flex-row items-center justify-between px-4 py-3 border-b border-gray-200">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require("@/assets/images/Back.png")}
            className="w-8 h-8"
            contentFit="contain"
          />
        </TouchableOpacity>
        <Text className="text-lg font-semibold text-[#4A4A4A]">Wallet</Text>
        <View className="w-8" />
      </View>

      <ScrollView className="flex-1" contentContainerStyle={{ paddingBottom: 100 }}>
        {/* Wallet Balance Card */}
        <ImageBackground
          source={require('@/assets/wallet_bg.png')}
          resizeMode="cover"
          imageStyle={{ borderRadius: 20 }}
          className="m-4 rounded-2xl overflow-hidden"
        >
          <View className="p-6 items-center">
            <Text className="text-white/80 text-xs pt-6">Wallet Balance</Text>
            <Text className="text-white text-4xl font-bold mt-2 mb-6">₦276,500</Text>
            <TouchableOpacity className="bg-white/95 self-center flex-row items-center px-6 py-2 rounded-lg">
              <Text className="text-[#4CAF50] text-sm mr-2">Add Money</Text>
              <Icon name="plus-square" size={18} color="#15803d" />
            </TouchableOpacity>
          </View>
        </ImageBackground>

        {/* Order Summary Title */}
        <View className="flex-row justify-between items-center px-8 mt-4 mb-2">
            <Text className="text-lg font-gilroyRegular text-[#939393]">Transactions</Text>
            <Text className="text-lg font-bold text-[#4CAF50]">View all</Text>
        </View>


        {/* Order Items */}
        {orderData.map(item => (
          <OrderItem key={item.id} item={item} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default WalletScreen;
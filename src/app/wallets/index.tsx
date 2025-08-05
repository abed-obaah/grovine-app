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
import { CloseCircle } from 'iconsax-react-nativejs'

// Mock data for the order summary list
const orderData = [
  {
    id: '1',
    name: 'Grape',
    items: 1,
    price: '5,500',
    image: require('@/assets/grape.png'),
  },
  {
    id: '2',
    name: 'Grape',
    items: 1,
    price: '5,500',
    image: require('@/assets/grape.png'),
  },
  {
    id: '3',
    name: 'Grape',
    items: 1,
    price: '5,500',
    image: require('@/assets/grape.png'),
  },
  {
    id: '4',
    name: 'Grape',
    items: 1,
    price: '5,500',
    image: require('@/assets/grape.png'),
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
const OrderItem = ({ item }) => (
  <View className="flex-row items-center bg-white p-3 rounded-xl mx-4 my-1.5 shadow-sm shadow-slate-200">
    <Image source={item.image} className="w-14 h-14 rounded-lg mr-4" />
    <View className="flex-1">
      <Text className="text-slate-800 font-bold text-base">{item.name}</Text>
      <Text className="text-slate-500 text-sm">{item.items} Items - NGN {item.price}</Text>
    </View>
    <View className="flex-row items-center space-x-3">
      <TouchableOpacity className="bg-green-100 p-2 rounded-full">
        <Icon name="upload" size={16} color="#10B981" />
      </TouchableOpacity>
      <TouchableOpacity className="bg-red-100 p-2 rounded-full">
        <Icon name="trash-2" size={16} color="#EF4444" />
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon name="chevron-down" size={20} color="#6B7280" />
      </TouchableOpacity>
    </View>
  </View>
);



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
        <Text className="text-lg font-bold text-slate-700 px-4 mt-4 mb-2">Order Summary</Text>

        {/* Order Items */}
        {orderData.map(item => (
          <OrderItem key={item.id} item={item} />
        ))}
      </ScrollView>

      {/* Pay Button */}
      <View className="absolute bottom-0 left-0 right-0 p-4 bg-slate-50">
        <TouchableOpacity 
          className="bg-[#4CAF50] w-full p-4 rounded-xl shadow-lg shadow-green-300"
          onPress={toggleModal}
        >
          <Text className="text-white text-center font-bold text-lg">Pay 19,500</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Sheet Modal */}
  <Modal
  animationType="slide"
  transparent={true}
  visible={isModalVisible}
  onRequestClose={toggleModal}
>
  <Pressable
    className="flex-1 justify-end bg-black/50"
    onPress={toggleModal}
  >
    <Pressable className="bg-white rounded-t-3xl px-6 pt-6 pb-8 h-[55%]">
      {/* Header */}
      <View className="relative items-center justify-center mb-9 h-6">
          <Text className="text-xl font-gilroyRegular text-[#4A4A4A] text-center">Enter Pin</Text>
          
          <TouchableOpacity
            onPress={toggleModal}
            className="absolute right-0 top-0"
          >
            <CloseCircle size="22" color="#6B7280" />
          </TouchableOpacity>
        </View>


      {/* PIN Boxes */}
      <View className="flex-row justify-between mx-8 mb-6">
        {Array(4).fill(0).map((_, index) => (
          <View
            key={index}
            className="w-14 h-14 rounded-xl border-2 border-gray-300 bg-gray-100 justify-center items-center"
          >
            {pin.length > index && (
              <Text className="text-3xl text-gray-800">•</Text>
            )}
          </View>
        ))}
      </View>

      {/* Custom Numeric Keypad */}
      <View className="gap-y-3">
        {[
          ['1', '2', '3'],
          ['4', '5', '6'],
          ['7', '8', '9'],
          ['*', '0', '←'],
        ].map((row, rowIndex) => (
          <View
            key={rowIndex}
            className="flex-row justify-around"
          >
            {row.map((key) => (
              <TouchableOpacity
                key={key}
                className="w-20 h-14 rounded-lg bg-gray-100 justify-center items-center"
                onPress={() => handleKeyPress(key)}
              >
                <Text className="text-xl font-semibold text-gray-800">
                  {key === '←' ? '⌫' : key}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
    </Pressable>
  </Pressable>
</Modal>


    </SafeAreaView>
  );
};

export default WalletScreen;
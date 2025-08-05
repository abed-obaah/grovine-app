// ReferralScreen.tsx
import { View, Text, SafeAreaView, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { Icon } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';

export default function ReferralScreen() {
    const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header */}
     <View className="flex-row items-center justify-between py-2 border-b border-gray-200">
               <TouchableOpacity onPress={() => navigation.goBack()}>
                 <Image
                   source={require('@/assets/images/Back.png')}
                   className="w-8 h-8"
                   resizeMode="contain"
                 />
               </TouchableOpacity>
               <Text className="text-lg font-semibold">Referrals</Text>
               <View className="w-8" />
             </View>

      {/* Gift Card */}
      {/* <View className="bg-green-500 mx-4 mt-4 rounded-xl p-6 items-center relative">
        <Image
          source={require('@/assets/gift.png')} // Replace with your image
          className="w-24 h-24"
          resizeMode="contain"
        />
        <View className="mt-4 bg-white rounded-full px-4 py-2 flex-row items-center">
          <Text className="text-green-500 font-bold mr-2">CD - DAVID23W</Text>
          <Feather name="copy" size={18} color="green" />
          <Feather name="share-2" size={18} color="green" className="ml-2" />
        </View>
      </View> */}
         <ImageBackground
                source={require('@/assets/wallet_bg.png')}
                resizeMode="cover"
                imageStyle={{ borderRadius: 20 }}
                className="m-4 rounded-2xl overflow-hidden"
              >
                <View className="p-6 items-center">
                
                   <Image
                            source={require('@/assets/gift.png')} // Replace with your image
                            className="w-24 h-24"
                            resizeMode="contain"
                            />
                  <TouchableOpacity className="bg-white/95 self-center flex-row items-center px-6 py-2 rounded-lg">
                    <Text className="text-[#4CAF50] text-sm mr-2">CD - DAVID23W</Text>
                   <View className="flex-row items-center space-x-2">
                            <Feather name="copy" size={12} color="green" />
                            <Text className="text-[#4CAF50] text-lg px-1.5 ">|</Text>
                            <Feather name="share-2" size={12} color="green" />
                            </View>

                  </TouchableOpacity>
                </View>
              </ImageBackground>

      {/* Referral Rewards */}
     <View className="px-6 mt-8">
  <Text className="text-base font-semibold mb-6">Invite a friend and get</Text>

  {/* First reward */}
  <View className="flex-row mb-4">
    {/* Left timeline block */}
    <View className="items-center mr-4">
      <View className="w-6 h-6 bg-green-300 rounded-md items-center justify-center">
        <View className="w-2.5 h-2.5 bg-green-600 rounded-full" />
      </View>
      <View className="w-0.5 h-5 bg-green-300" />
    </View>

    {/* Right text block */}
    <View>
      <Text className="text-black font-bold text-lg">NGN 500</Text>
      <Text className="text-gray-500 text-sm">On their first order</Text>
    </View>
  </View>

  {/* Second reward */}
  <View className="flex-row mb-8">
    <View className="items-center mr-4">
      <View className="w-6 h-6 bg-green-300 rounded-md items-center justify-center">
        <View className="w-2.5 h-2.5 bg-green-600 rounded-full" />
      </View>
    </View>

    <View>
      <Text className="text-black font-bold text-lg">NGN 500</Text>
      <Text className="text-gray-500 text-sm">On their second order</Text>
    </View>
  </View>

  {/* Friend gets */}
  <Text className="text-base font-semibold mb-4">Your friend gets</Text>

  <View className="flex-row">
    <View className="items-center mr-4">
      <View className="w-6 h-6 bg-green-300 rounded-md items-center justify-center">
        <View className="w-2.5 h-2.5 bg-green-600 rounded-full" />
      </View>
    </View>

    <View>
      <Text className="text-black font-bold text-lg">NGN 500 discount</Text>
      <Text className="text-gray-500 text-sm">On their first order</Text>
    </View>
  </View>
</View>

    </SafeAreaView>
  );
}

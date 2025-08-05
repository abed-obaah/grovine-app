// screens/ProfileScreen.js

import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  StatusBar,
  Modal,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { router } from 'expo-router';
import { Feather } from 'lucide-react-native';
import{ Heart, Share, Edit, AddSquare} from 'iconsax-react-nativejs'
import { useNavigation } from '@react-navigation/native';
import { ArrowLeft, Share2 } from 'lucide-react-native';

// --- Data for the menu items ---
const menuSections = [
  {
    title: 'Personal',
    items: [
      { icon: 'user', text: 'Profile Details' },
      { icon: 'map-pin', text: 'Address' },
    ],
  },
  {
    title: 'Services',
    items: [
      { icon: 'gift', text: 'Referrals' },
      { icon: 'credit-card', text: 'Gift Cards' },
    ],
  },
  {
    title: 'More',
    items: [
      { icon: 'info', text: "What's New" },
      { icon: 'help-circle', text: 'FAQs' },
      { icon: 'message-square', text: 'Support' },
      { icon: 'shield', text: 'Legal' },
    ],
  },
];

// --- Reusable Menu Item Component ---
const MenuItem = ({ item, isLast }) => (
  <>
    <TouchableOpacity className="flex-row items-center bg-white px-0 py-4 mx-4 rounded-xl my-1.5 shadow-sm shadow-slate-200">
      <Icon name={item.icon} size={20} color="#475569" />
      <Text className="flex-1 text-slate-700 font-semibold ml-4">{item.text}</Text>
      <Icon name="chevron-right" size={20} color="#94a3b8" />
    </TouchableOpacity>
    <View className="border-b border-gray-200 mx-6" />
  </>
);

// --- Header Component ---
const ProfileHeader = () => (
  <View className="bg-slate-50">
    <View className="h-44 rounded-b-3xl relative overflow-hidden">
      <Image
        source={require('@/assets/bg21.png')}
        className="absolute w-full h-full"
        resizeMode="cover"
      />
    </View>

    <View className="items-start -mt-14 px-4">
      <View className="relative">
        <Image
          source={require('@/assets/avater.png')}
          className="w-28 h-28 rounded-full border-4 border-white"
        />
        <View className="absolute bottom-2 right-3 rounded-full bg-white p-1 -mb-2 -mr-2">
          <TouchableOpacity className="bg-[#B7E8BA] rounded-full p-2">
            <Icon name="edit" size={10} color="#4CAF50" />
          </TouchableOpacity>
        </View>
      </View>
      <View className="flex-row items-center mt-2">
        <Text className="text-md font-bold text-slate-800">Craig Orisa</Text>
         <Text className="text-sm text-yellow-600 mt-1">⭐ 3.5 Ratings</Text>
        {/* <View className="flex-row items-center bg-[#8C5A2B] px-1 py-1 rounded-sm ml-2">
          <Image
            source={require('@/assets/u_award.png')}
            className="w-4 h-4 rounded-full"
          />
          <Text className="text-white font-bold text-xs ml-1">VIP User</Text>
        </View> */}
      </View>
       <View className="flex-row justify-center gap-2 mt-4 px-0">
          <TouchableOpacity className="bg-gray-100 px-3 py-2 rounded-md flex-row items-center">
           <Heart size="16" color="#4A4A4A"/>
            <Text className="ml-2 font-medium">1,764 Likes</Text>
          </TouchableOpacity>

          <TouchableOpacity className="bg-gray-100 px-3 py-2 rounded-md">
           {/* <Share size="16" color="#4CAF50"/> */}
            <Share2 size={16} color="#4CAF50" />
          </TouchableOpacity>

          <TouchableOpacity className="bg-green-600 px-3 py-2 rounded-md flex-row items-center">
            <Text className="text-white font-semibold mr-2">Edit Profile</Text>
            {/* <Feather name="edit" size={14} color="white" className="ml-2" /> */}
            <Edit
                size="16"
                color="white" 
                
                />
          </TouchableOpacity>
        </View>

      <TouchableOpacity
        className="absolute right-4 top-16 bg-[#4CAF50] px-4 py-2 rounded-sm flex-row items-center shadow-md shadow-green-900/20"
        onPress={() => router.push('/wallets/wallet')}
      >
        <Text className="text-white font-bold text-sm mr-2">View Wallet</Text>
        <Image
          source={require('@/assets/u_wallet.png')}
          className="w-4 h-4 rounded-full"
        />
      </TouchableOpacity>
    </View>
  </View>
);

// --- Main Screen Component ---
const ProfileScreen = () => {
      const navigation = useNavigation();
  const [showSwitchModal, setShowSwitchModal] = useState(false);
  const niches = ['Italian Cuisine', 'Keto-Friendly', 'Desserts', 'DIY Meal Kit'];
  const videos = [
  {
    id: '1',
    title: 'Egusi Soup With Chicken',
    duration: '15:09',
    price: '₦20,000',
    image: require('@/assets/egusi_soup.png'), // replace with actual asset
    chefName: 'Chef Richard Nduh',
    rating: '4.5',
  },
  {
    id: '2',
    title: 'Egusi Soup With Chicken',
    duration: '15:09',
    price: '₦20,000',
    image: require('@/assets/egusi_soup.png'), // replace with actual asset
    chefName: 'Chef Richard Nduh',
    rating: '4.5',
  },
  {
    id: '3',
    title: 'Egusi Soup With Chicken',
    duration: '15:09',
    price: '₦20,000',
    image: require('@/assets/egusi_soup.png'), // replace with actual asset
    chefName: 'Chef Richard Nduh',
    rating: '4.5',
  },
  {
    id: '4',
    title: 'Egusi Soup With Chicken',
    duration: '15:09',
    price: '₦20,000',
    image: require('@/assets/egusi_soup.png'), // replace with actual asset
    chefName: 'Chef Richard Nduh',
    rating: '4.5',
  },
  // Add more video objects as needed
];

  return (
    <View className="flex-1">
      <ScrollView showsVerticalScrollIndicator={false}>
        <ProfileHeader />
         {/* Create a Chef Account Button */}
        <TouchableOpacity 
          className="bg-[#B7E8BA] px-2 py-2 mt-6 rounded-sm flex-row items-center self-start ml-4"
          onPress={() => setShowSwitchModal(true)}
        >
          <Image
            source={require('@/assets/cap.png')} 
            className="w-8 h-8 rounded-full"
          />
          <Text className="text-[#4A4A4A] font-bold text-sm ml-3">Switch To User Account</Text>
        </TouchableOpacity>
 <View className="px-4 mt-6">
          <Text className="text-gray-500 font-semibold mb-2">Niche</Text>
          <View className="flex-row flex-wrap gap-2">
            {niches.map((tag, index) => (
              <View
                key={index}
                className={`px-8 py-2 rounded-lg ${
                  index === 0
                    ? 'bg-amber-800 text-white'
                    : index === 1
                    ? 'bg-lime-300'
                    : index === 2
                    ? 'bg-gray-700'
                    : 'bg-orange-300'
                }`}
              >
                <Text className="text-sm font-semibold text-white">{tag}</Text>
              </View>
            ))}
          </View>
        </View>
       
  {/* Uploaded Videos */}
        <View className="mt-8 px-4">
          <View className="flex-row justify-between mb-2">
            <Text className="font-semibold">3 Videos Uploaded</Text>
            <TouchableOpacity  onPress={() => router.push('/chef/ManageVideosScreen')}>
              <Text className="text-green-700 font-semibold">Manage Videos</Text>
            </TouchableOpacity>
          </View>

          <FlatList
            data={videos}
            keyExtractor={(item) => item.id}
            numColumns={2}
            columnWrapperStyle={{ justifyContent: 'space-between' }}
            renderItem={({ item }) => (
              <View className="w-[48%] bg-white mb-4 shadow-sm rounded-lg overflow-hidden">
                <View className="relative">
                  <Image source={item.image} className="h-32 w-full" resizeMode="cover" />
                  <View className="absolute bottom-1 right-1 bg-black/60 px-1 rounded">
                    <Text className="text-white text-xs">{item.duration}</Text>
                  </View>
                </View>
                <View className="p-2">
                  <Text className="text-sm font-semibold">{item.title}</Text>
                  <Text className="text-green-700 font-bold mt-1">{item.price}</Text>
                  <View className="flex-row items-center mt-2">
                    <Image
                      source={require('@/assets/avater.png')}
                      className="w-4 h-4 rounded-full"
                    />
                    <Text className="text-xs text-gray-600 ml-1">{item.chefName}</Text>
                    <Text className="text-yellow-500 text-xs ml-auto">⭐ {item.rating}</Text>
                  </View>
                </View>
              </View>
            )}
          />
        </View>

        {/* <Text className="text-center text-gray-400 text-xs my-8">v1.0.50(v957)</Text> */}
      </ScrollView>

      {/* Modal for Chef/User Switch */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={showSwitchModal}
        onRequestClose={() => setShowSwitchModal(false)}
      >
        <View className="flex-1 justify-end bg-black/40">
          <View className="bg-white rounded-t-3xl px-6 pt-6 pb-10 h-[45%]">
            <View className="flex-row justify-between items-center mb-6">
              <Text className="text-xl font-bold text-slate-800">Switch Mode</Text>
              <TouchableOpacity onPress={() => setShowSwitchModal(false)}>
                <Icon name="x" size={24} color="#6B7280" />
              </TouchableOpacity>
            </View>

            <Text className="text-slate-600 mb-6">Choose your account mode</Text>

            <TouchableOpacity 
              className="border border-green-500 rounded-lg p-4 mb-4 flex-row justify-between items-center"
             
               onPress={() => {
                setShowSwitchModal(false);
                alert("You're already in chef mode");
              }}
            >
              <Text className="text-slate-800 font-semibold">Chef Mode</Text>
             
              <Icon name="check" size={20} color="#10B981" />
            </TouchableOpacity>

            <TouchableOpacity 
              className="border border-gray-300 rounded-lg p-4 flex-row justify-between items-center"
              onPress={() => {
                setShowSwitchModal(false);
                router.push('/'); // Replace with actual route
              }}
            >
              <Text className="text-slate-800 font-semibold">User Mode</Text>
               <Icon name="arrow-right" size={20} color="#4CAF50" />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const ProfilePage = () => (
  <SafeAreaView className="flex-1 bg-white">
    <StatusBar barStyle="dark-content" />
    <View className="flex-1">
      <ProfileScreen />
        {/* Post Button */}
      <TouchableOpacity onPress={() => router.push('/chef/UploadVideoScreen')}
       className="absolute bottom-4 left-4 right-4 bg-green-600 py-4 rounded-md flex-row justify-center items-center">
        <Text className="text-white font-bold text-base mr-2">Post a Video</Text>
        {/* <Feather name="plus" size={16} color="white" /> */}
        <AddSquare
            size="16"
            color="white"
            />
      </TouchableOpacity>
    </View>
  </SafeAreaView>
);

export default ProfilePage;

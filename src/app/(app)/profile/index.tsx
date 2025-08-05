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
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/Feather';
import { router } from 'expo-router';

// --- Menu Sections Data ---
const menuSections = [
  {
    title: 'Personal',
    items: [
      { icon: 'user', text: 'Profile Details', href: '/chef/profile-details' },
      { icon: 'map-pin', text: 'Address', href: '/chef/address' },
    ],
  },
  {
    title: 'Services',
    items: [
      { icon: 'gift', text: 'Referrals', href: '/chef/referrals' },
      { icon: 'credit-card', text: 'Gift Cards', href: '/app/gift-cards' },
    ],
  },
  {
    title: 'More',
    items: [
      { icon: 'info', text: "What's New", href: '/app/whats-new' },
      { icon: 'help-circle', text: 'FAQs', href: '/chef/SupportScreen' },
      { icon: 'message-square', text: 'Support', href: '/app/support' },
      { icon: 'shield', text: 'Legal', href: '/app/legal' },
    ],
  },
];

// --- Menu Item Component ---
const MenuItem = ({ item, isLast }) => {
  const handlePress = () => {
    if (item.href) {
      router.push(item.href);
    }
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      className={`flex-row items-center justify-between px-4 py-4 ${
        !isLast ? 'border-b border-gray-100' : ''
      }`}
    >
      <View className="flex-row items-center space-x-3">
        <Feather name={item.icon} size={20} color="#6B7280" />
        <Text className="text-sm text-gray-700 ml-2">{item.text}</Text>
      </View>
      <Feather name="chevron-right" size={20} color="#9CA3AF" />
    </TouchableOpacity>
  );
};

// --- Header Section ---
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
        <View className="flex-row items-center bg-[#8C5A2B] px-1 py-1 rounded-sm ml-2">
          <Image
            source={require('@/assets/u_award.png')}
            className="w-4 h-4 rounded-full"
          />
          <Text className="text-white font-bold text-xs ml-1">VIP User</Text>
        </View>
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
  const [showSwitchModal, setShowSwitchModal] = useState(false);

  return (
    <View className="flex-1">
      <ScrollView showsVerticalScrollIndicator={false}>
        <ProfileHeader />

        {/* Create a Chef Account */}
        <TouchableOpacity
          className="bg-[#B7E8BA] px-2 py-2 mt-6 rounded-sm flex-row items-center self-start ml-4"
          onPress={() => setShowSwitchModal(true)}
        >
          <Image
            source={require('@/assets/cap.png')}
            className="w-8 h-8 rounded-full"
          />
          <Text className="text-[#4A4A4A] font-bold text-sm ml-3">
            Create A Chef Account
          </Text>
        </TouchableOpacity>

        {/* Menu Sections */}
        {menuSections.map((section, index) => (
          <View key={index}>
            <Text className="text-gray-500 font-semibold uppercase px-4 mt-6 mb-2 text-xs">
              {section.title}
            </Text>
            <View className="bg-white rounded-xl mx-0 shadow-sm shadow-slate-200">
              {section.items.map((item, itemIndex) => (
                <MenuItem
                  key={itemIndex}
                  item={item}
                  isLast={itemIndex === section.items.length - 1}
                />
              ))}
            </View>
          </View>
        ))}

        <Text className="text-center text-gray-400 text-xs my-8">
          v1.0.50(v957)
        </Text>
      </ScrollView>

      {/* Switch Mode Modal */}
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
                router.push('/chef/register');
              }}
            >
              <Text className="text-slate-800 font-semibold">Chef Mode</Text>
              <Icon name="arrow-right" size={20} color="#4CAF50" />
            </TouchableOpacity>

            <TouchableOpacity
              className="border border-gray-300 rounded-lg p-4 flex-row justify-between items-center"
              onPress={() => {
                setShowSwitchModal(false);
                alert("You're already in User mode");
              }}
            >
              <Text className="text-slate-800 font-semibold">User Mode</Text>
              <Icon name="check" size={20} color="#10B981" />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

// --- Export Page with Safe Area ---
const ProfilePage = () => (
  <SafeAreaView className="flex-1 bg-white">
    <StatusBar barStyle="dark-content" />
    <ProfileScreen />
  </SafeAreaView>
);

export default ProfilePage;

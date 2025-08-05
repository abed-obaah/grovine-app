import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
// import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native'

// Mock data for the notifications list
const notificationsData = [
  {
    id: '1',
    type: 'recipe',
    title: 'New Recipe:',
    description: 'Chef Ajunna just uploaded a new recipe on how to make scotched....',
    image: require('@/assets/chef1.png'),
    isHighlighted: true,
  },
  {
    id: '2',
    type: 'sales',
    title: 'Fast Sales:',
    description: 'View groceries on cheap and fast sales.....',
    image: require('@/assets/food.png'),
    isHighlighted: false,
  },
  {
    id: '3',
    type: 'sales',
    title: 'Fast Sales:',
    description: 'View groceries on cheap and fast sales.....',
    image: require('@/assets/food.png'),
    isHighlighted: false,
  },
  {
    id: '4',
    type: 'sales',
    title: 'Fast Sales:',
    description: 'View groceries on cheap and fast sales.....',
    image: require('@/assets/food.png'),
    isHighlighted: false,
  },
  {
    id: '5',
    type: 'sales',
    title: 'Fast Sales:',
    description: 'View groceries on cheap and fast sales.....',
    image: require('@/assets/food.png'),
    isHighlighted: false,
  },
];

// Individual Notification Item Component
const NotificationItem = ({ item }) => {
  if (!item) return null;

  const containerStyle = item.isHighlighted
    ? 'bg-[#4CAF501F]'
    : 'bg-white';

  return (
    <View className={`flex-row items-center p-3 rounded-xl mx-4 my-1.5 ${containerStyle} shadow-sm shadow-slate-200`}>
      <Image source={item.image} className="w-12 h-12 rounded-full mr-4" />
      <View className="flex-1">
        <Text className="text-slate-800 text-sm" numberOfLines={2}>
          <Text className="font-bold">{item.title} </Text>
          {item.description}
        </Text>
      </View>
      <TouchableOpacity className="bg-[#4CAF50] px-5 py-2 rounded-lg ml-2">
        <Text className="text-white font-semibold text-sm">View</Text>
      </TouchableOpacity>
    </View>
  );
};

// Main Screen Component
const NotificationsScreen = () => {
  const renderItem = ({ item }) => {
    if (!item || typeof item !== 'object') return null;
    return <NotificationItem item={item} />;
  };
  const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1 bg-slate-50">
      <StatusBar barStyle="dark-content" />

      {/* Header */}
      <View className="flex-row justify-between items-center p-4">
        <TouchableOpacity
                 onPress={() => navigation.goBack()}
                 >
                  <Image
                    source={require("@/assets/images/Back.png")}
                    className="w-8 h-8"
                    contentFit="contain"
                  />
                </TouchableOpacity>
        <Text className="text-xl font-bold text-slate-800">Notifications</Text>
        <View className="bg-orange-400 rounded-full w-6 h-6 justify-center items-center">
          <Text className="text-white font-bold text-xs">9</Text>
        </View>
      </View>

      {/* Notifications List */}
      <FlatList
        data={notificationsData}
        keyExtractor={(item) => item?.id}
        renderItem={renderItem}
        ListHeaderComponent={() => (
          <Text className="text-gray-500 font-semibold text-xs uppercase px-4 my-3">
            15 NOV 2024
          </Text>
        )}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </SafeAreaView>
  );
};

export default NotificationsScreen;

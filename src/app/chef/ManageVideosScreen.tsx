// ManageVideosScreen.tsx
import React from 'react';
import { View, Text, TextInput, FlatList, Image, TouchableOpacity } from 'react-native';
import { ArrowLeft, Share2 } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';

const videos = [
  {
    id: '1',
    title: 'Egusi Soup With Chicken',
    price: '₦20,000',
    thumbnail: require('@/assets/egusi_soup.png'), // Replace with your image
    duration: '15:09',
    chef: 'Chef Richard Ndub',
    rating: '4.5',
  },
  {
    id: '2',
    title: 'Egusi Soup With Chicken',
    price: '₦20,000',
    thumbnail: require('@/assets/egusi_soup.png'),
    duration: '15:09',
    chef: 'Chef Richard Ndub',
    rating: '4.5',
  },
  {
    id: '3',
    title: 'Egusi Soup With Chicken',
    price: '₦20,000',
    thumbnail: require('@/assets/egusi_soup.png'),
    duration: '15:09',
    chef: 'Chef Richard Ndub',
    rating: '4.5',
  },
];

export default function ManageVideosScreen() {
    const navigation = useNavigation();
  return (
    <View className="flex-1 bg-white px-4 pt-6">
      {/* Header */}
<View className="flex-row items-center justify-between px-4 py-3 border-b border-gray-200">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require("@/assets/images/Back.png")}
            className="w-8 h-8"
            contentFit="contain"
          />
        </TouchableOpacity>
         <Text className="text-xl font-semibold">Manage Videos</Text>
        <Text className="text-green-600 font-medium">Select</Text>
      </View>
      {/* Search Input */}
      <TextInput
        placeholder="Search for videos"
        className="border border-gray-200 rounded-xl px-2 py-4 mb-4 mt-2"
      />

      {/* Video List */}
      <FlatList
        data={videos}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        renderItem={({ item }) => (
          <View className="w-[48%] bg-white border border-gray-200 rounded-xl mb-4 overflow-hidden">
            <View className="relative">
              <Image source={item.thumbnail} className="h-28 w-full rounded-t-xl" resizeMode="cover" />
              <Text className="absolute bottom-1 right-1 bg-black text-white text-xs px-2 py-0.5 rounded">
                {item.duration}
              </Text>
            </View>
            <View className="p-4">
              <View className="flex-row justify-between items-center mb-1">
             <Text className="text-[13px] font-medium">
              Egusi Soup With {'\n'}Chicken
            </Text>


              <Text className="text-[13px] font-semibold">{item.price}</Text>
            </View>

            <View className="flex-row items-center justify-between">
                <View className="flex-row items-center self-start">  
                  <Image
                    source={require('@/assets/avater.png')}
                    className="h-8 w-8 rounded-full mr-1"
                  />
                  <View className="flex-col">
                    <Text className="text-xs text-gray-500">Chef Richard Nduh</Text>
                    <Text className="text-xs text-gray-500">⭐ {item.rating}</Text>
                  </View>
                </View>

                <TouchableOpacity>
                  <Share2 size={16} color="#10B981" />
                </TouchableOpacity>
              </View>

            </View>
          </View>
        )}
      />
    </View>
  );
}

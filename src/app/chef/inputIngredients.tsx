import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { ArrowLeft, Upload } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import * as DocumentPicker from 'expo-document-picker';
import * as ImagePicker from 'expo-image-picker';
import { router } from 'expo-router';

export default function UploadVideoScreen() {
  const navigation = useNavigation();

  return (
    <View className="flex-1 bg-white px-4 pt-6">
      {/* Header */}
      <View className="flex-row items-center justify-between py-3 border-b border-gray-200">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require("@/assets/images/Back.png")}
            className="w-8 h-8"
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Text className="text-lg font-semibold">Input Ingredients</Text>
        <View className="w-8" />
      </View>

    {/* Search Input */}
          <TextInput
            placeholder="Search for videos"
            className="border border-gray-200 rounded-xl px-2 py-4 mb-4 mt-2"
          />

      {/* Input Title */}
      <TextInput
        className="bg-gray-200 rounded-xl px-4 py-5 mb-4 text-sm"
        placeholder="Add Ingredients"
        placeholderTextColor="#9CA3AF"
      />

      {/* Next Button */}
      <TouchableOpacity onPress={() => router.push('/chef/DescriptionStepsScreen')} className="bg-green-600 rounded-xl py-4 items-center mt-auto mb-10">
        <Text className="text-white text-base font-semibold">Next</Text>
      </TouchableOpacity>
    </View>
  );
}

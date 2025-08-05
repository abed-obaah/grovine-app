import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { ArrowLeft, Upload } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import * as DocumentPicker from 'expo-document-picker';
import * as ImagePicker from 'expo-image-picker';
import { router } from 'expo-router';

export default function UploadVideoScreen() {
  const navigation = useNavigation();
  const [video, setVideo] = useState(null);
  const [coverPhoto, setCoverPhoto] = useState(null);

  const handleVideoUpload = async () => {
    const result = await DocumentPicker.getDocumentAsync({
      type: 'video/*',
    });

    if (!result.canceled) {
      setVideo(result.assets[0]);
    }
  };

  const handleCoverPhotoUpload = async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permission.granted) return;

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setCoverPhoto(result.assets[0]);
    }
  };

  return (
    <View className="flex-1 bg-white px-4 pt-6">
      {/* Header */}
      <View className="flex-row items-center justify-between px-4 py-3 border-b border-gray-200">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require("@/assets/images/Back.png")}
            className="w-8 h-8"
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Text className="text-lg font-semibold">Upload Video</Text>
        <View className="w-8" />
      </View>

      {/* Upload Video */}
      <TouchableOpacity
        className="bg-gray-200 rounded-xl p-4 mb-4 flex-row items-center justify-between mt-4"
        onPress={handleVideoUpload}
      >
        <Text className="text-gray-500">
          {video ? video.name : 'Upload Video'}
        </Text>
        <Upload size={20} color="#9CA3AF" />
      </TouchableOpacity>

      {/* Upload Cover Photo */}
      <TouchableOpacity
        className="bg-gray-200 rounded-xl py-10 items-center justify-center mb-4"
        onPress={handleCoverPhotoUpload}
      >
        {coverPhoto ? (
          <Image
            source={{ uri: coverPhoto.uri }}
            className="w-full h-40 rounded-xl"
            resizeMode="cover"
          />
        ) : (
          <>
            <Upload size={48} color="#9CA3AF" />
            <Text className="text-gray-500 mt-2">Upload Cover Photo</Text>
          </>
        )}
      </TouchableOpacity>

      {/* Input Title */}
      <TextInput
        className="bg-gray-200 rounded-xl px-4 py-5 mb-4 text-sm"
        placeholder="Input Title"
        placeholderTextColor="#9CA3AF"
      />

      {/* Input Description */}
      <TextInput
        className="bg-gray-200 rounded-xl px-4 py-4 mb-4 text-sm h-32"
        placeholder="Input Description"
        placeholderTextColor="#9CA3AF"
        multiline
        textAlignVertical="top"
      />

      {/* Next Button */}
      <TouchableOpacity onPress={() => router.push('/chef/inputIngredients')} className="bg-green-600 rounded-xl py-4 items-center mt-auto mb-10">
        <Text className="text-white text-base font-semibold">Next</Text>
      </TouchableOpacity>
    </View>
  );
}

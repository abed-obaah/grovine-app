import React, { useState } from 'react';
import { View, Text, TextInput,Image, TouchableOpacity, ScrollView } from 'react-native';
import { PlusCircle } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import { router } from 'expo-router';

export default function DescriptionStepsScreen() {
  const navigation = useNavigation();
  const [steps, setSteps] = useState(['']);

  const handleAddStep = () => {
    setSteps([...steps, '']);
  };

  const handleChangeStep = (text: string, index: number) => {
    const updatedSteps = [...steps];
    updatedSteps[index] = text;
    setSteps(updatedSteps);
  };

  return (
    <View className="flex-1 bg-white px-4 pt-6">
      {/* Header */}
      <View className="flex-row items-center justify-between mb-6 py-3 border-b border-gray-200">
       <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image
                  source={require("@/assets/images/Back.png")}
                  className="w-8 h-8"
                  resizeMode="contain"
                />
              </TouchableOpacity>
        <Text className="text-lg font-semibold">Description</Text>
        <View className="w-6" />
      </View>

      {/* Steps Input List */}
      <ScrollView className="mb-4">
        {steps.map((step, index) => (
          <TextInput
            key={index}
            value={step}
            onChangeText={(text) => handleChangeStep(text, index)}
            className="bg-gray-200 rounded-xl px-4 py-4 mb-3 text-sm"
            placeholder={`Input step ${index + 1}`}
            placeholderTextColor="#9CA3AF"
            multiline
            textAlignVertical="top"
          />
        ))}
      </ScrollView>

      {/* Add Another Step */}
      <TouchableOpacity
        onPress={handleAddStep}
        className="bg-green-600 px-4 py-2 rounded-md self-start mb-6 flex-row items-center"
      >
        <Text className="text-white text-sm font-medium mr-1">Add Another Step</Text>
        <PlusCircle size={16} color="white" />
      </TouchableOpacity>

      {/* View Preview Button */}
      <TouchableOpacity onPress={() => router.push('/chef/RecipePreviewScreen')}  className="bg-green-600 rounded-xl py-4 items-center mb-6">
        <Text className="text-white text-base font-semibold">View Preview</Text>
      </TouchableOpacity>
    </View>
  );
}

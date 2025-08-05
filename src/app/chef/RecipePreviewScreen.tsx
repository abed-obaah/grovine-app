// screens/RecipePreviewScreen.jsx

import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import {DirectboxSend } from 'iconsax-react-nativejs'

export default function RecipePreviewScreen() {
     const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1 bg-white">
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
              <Text className="text-xl font-semibold">Preview</Text>
             <Text className="text-green-600 font-medium">Edit</Text>
        </View>

      <ScrollView className="px-4">
        {/* Image */}
        <View className="my-4 rounded-xl overflow-hidden">
          <Image
            source={require('@/assets/egusi_soup.png')} // Replace with your local asset
            className="w-full h-52 object-contain"
          />
        </View>

        {/* Title */}
        <Text className="text-xl font-bold text-gray-900">Egg Shakshuka</Text>
        <Text className="text-sm text-gray-500 mt-1 mb-4">
          Egg Shakshuka is a hearty and flavorful Middle Eastern dish featuring poached eggs simmered in a rich, spiced tomato and bell pepper sauce
        </Text>

        {/* Ingredients */}
        <Text className="text-base font-semibold text-gray-800 mb-2">Ingredients</Text>
        {[
          "4 eggs",
          "2 tablespoons olive oil",
          "1 medium onion, finely chopped",
          "1 red bell pepper, diced",
          "2 garlic cloves, minced",
          "4 large tomatoes",
          "1 teaspoon paprika",
          "1 teaspoon cumin",
          "1/2 teaspoon chili powder",
          "Salt and pepper, to taste",
          "Fresh parsley or cilantro, chopped",
          "Bread or pita, for serving",
        ].map((item, index) => (
          <Text key={index} className="text-sm text-gray-600 mb-1">• {item}</Text>
        ))}

        {/* Instructions */}
        <Text className="text-base font-semibold text-gray-800 mt-6 mb-2">Instruction; How to cook</Text>

        {[
          {
            title: 'Prepare the Base:',
            desc: 'Heat olive oil in a large skillet over medium heat. Add the chopped onion and sauté until soft, about 5 minutes.'
          },
          {
            title: 'Add Vegetables and Spices:',
            desc: 'Stir in the diced red bell pepper and garlic, cooking for another 2-3 minutes. Add the tomatoes, paprika, cumin, chili powder, salt, and pepper. Simmer for 10–15 minutes, stirring occasionally, until the sauce thickens slightly.'
          },
          {
            title: 'Make Wells for the Eggs:',
            desc: 'Use a spoon to create small wells in the sauce. Crack an egg into each well.'
          },
          {
            title: 'Cook the Eggs:',
            desc: 'Cover the skillet and let the eggs cook on low heat for 5–7 minutes, or until the whites are set but the yolks remain runny (or to your preferred doneness).'
          },
          {
            title: 'Garnish and Serve:',
            desc: 'Remove from heat and sprinkle with fresh parsley or cilantro. Serve immediately with crusty bread or warm pita for dipping.'
          },
        ].map((step, index) => (
          <View key={index} className="mb-4">
            <Text className="text-sm font-semibold text-gray-700">{step.title}</Text>
            <Text className="text-sm text-gray-600 mt-1">{step.desc}</Text>
          </View>
        ))}

        {/* Upload Button */}
        <TouchableOpacity className="bg-green-500 py-4 rounded-xl mt-4 mb-10 items-center justify-center">
          <Text className="text-white font-semibold text-base">Upload <DirectboxSend size="32" color="#FFF"/></Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

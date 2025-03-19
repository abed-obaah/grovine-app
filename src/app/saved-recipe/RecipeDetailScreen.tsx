import React, { useState } from 'react';
import { TouchableOpacity, FlatList } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import {
	Button,
	FocusAwareStatusBar,
	Image,
	ScrollView,
	Text,
	View,
} from "src/ui";

const RecipeDetailScreen = ({ navigation }) => {
    const [ingredients, setIngredients] = useState([
        { id: '1', name: '4 eggs', selected: true },
        { id: '2', name: '2 tbsp olive oil', selected: true },
        { id: '3', name: '1 medium onion', selected: true },
        { id: '4', name: '1 red bell pepper', selected: false },
        { id: '5', name: '2 garlic cloves', selected: false },
        { id: '6', name: '4 large tomatoes', selected: false },
        { id: '7', name: '1 tsp paprika', selected: false },
      ]);


      const steps = [
        {
          title: "Prepare the Base:",
          description:
            "Heat olive oil over medium heat. Add the chopped onion and cook for 3 minutes.",
        },
        {
          title: "Add Vegetables and Spices:",
          description:
            "Stir in the diced red bell pepper and garlic, cooking for another 2-3 minutes. Add the tomatoes, paprika, cumin, chili powder, salt, and pepper. Simmer for 10-15 minutes, stirring occasionally, until the sauce thickens slightly.",
        },
        {
          title: "Make Wells for the Eggs:",
          description:
            "Use a spoon to create small wells in the sauce. Crack an egg into each well.",
        },
        {
          title: "Cook the Eggs:",
          description:
            "Cover the skillet and let the eggs cook on low heat for 5-7 minutes, or until the whites are set but the yolks remain runny (or to your preferred doneness).",
        },
        {
          title: "Garnish and Serve:",
          description:
            "Remove from heat and sprinkle with fresh parsley or cilantro. Serve immediately with crusty bread or warm pita for dipping.",
        },
      ];



      const toggleSelection = (id) => {
        setIngredients((prev) =>
          prev.map((item) =>
            item.id === id ? { ...item, selected: !item.selected } : item
          )
        );
      };
      
      // Select or deselect all ingredients
      const selectAllIngredients = () => {
        const allSelected = ingredients.every((item) => item.selected);
        setIngredients((prev) =>
          prev.map((item) => ({ ...item, selected: !allSelected }))
        );
      };

  return (
    <ScrollView className="flex-1 bg-white">
      {/* Header */}
      <View className="flex-row items-center p-4">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
      </View>


            <View className='px-4'>
                 <Image source={require("@/assets/images/eggs.png")} className="w-full h-48 rounded-[10px] " />
            </View>
      {/* Recipe Image */}
     
      {/* Recipe Title and Description */}
      <View className="p-4">
        <Text className="text-2xl font-bold">Egg Shakshuka</Text>
        <Text className="text-gray-600 text-sm mt-1">
         Egg Shakshuka is a hearty and flavorful Middle Eastern dish featuring poached eggs simmered in a rich, spiced tomato and bell pepper sauce
        </Text>

        <View className='flex-row justify-between my-5'>
                <Text className="ext-md  font-gilroyMeduim">Ingredients</Text>
                <TouchableOpacity onPress={selectAllIngredients}>
                    <Text className="text-sm font-gilroyMeduim text-[#4CAF50]">Select all</Text>
                </TouchableOpacity>
        </View>
        
        <FlatList
      data={ingredients}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity 
          className="flex-row items-center mb-2" 
          onPress={() => toggleSelection(item.id)}
        >
          <MaterialIcons 
            name={item.selected ? "check-box" : "check-box-outline-blank"} 
            size={20} 
            color={item.selected ? "green" : "gray"} 
          />
          <Text className="ml-2 text-base">{item.name}</Text>
        </TouchableOpacity>
      )}
    />

        {/* Instructions */}
        <Text className="text-lg font-semibold mt-5">Instruction: How to cook</Text>
       <FlatList
      data={steps}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <View className="mb-4">
          <Text className="text-black mt-2 text-base font-gilroyBold">
            {item.title}
          </Text>
          <Text className="text-gray-700 text-base">{item.description}</Text>
        </View>
      )}
    />
       
      </View>

      {/* Bottom Button */}
      <TouchableOpacity className="flex-row bg-green-600 p-4 items-center justify-center mx-4 my-5 rounded-lg">
        <Text className="text-white text-lg font-semibold mr-2">Add to Cart</Text>
        <Ionicons name="cart-outline" size={20} color="white" />
      </TouchableOpacity>
    </ScrollView>
  );
};

export default RecipeDetailScreen;

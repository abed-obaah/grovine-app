import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
} from 'react-native';
import {
  PencilIcon,
} from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';

export default function ProfileDetailsScreen() {
  const navigation = useNavigation();

  const [fields, setFields] = useState([
    { label: 'Set New Address', value: 'Guards Park, Lagos' },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [selectedFieldIndex, setSelectedFieldIndex] = useState(null);
  const [inputValue, setInputValue] = useState('');

  const openEditModal = (index) => {
    setSelectedFieldIndex(index);
    setInputValue(fields[index].value);
    setShowModal(true);
  };

  const handleSave = () => {
    const updatedFields = [...fields];
    updatedFields[selectedFieldIndex].value = inputValue;
    setFields(updatedFields);
    setShowModal(false);
  };

  return (
    <View className="flex-1 bg-white">
      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={{ paddingHorizontal: 16, paddingTop: 24, paddingBottom: 100 }}>
        {/* Header */}
        <View className="flex-row items-center justify-between py-2 border-b border-gray-200">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={require('@/assets/images/Back.png')}
              className="w-8 h-8"
              resizeMode="contain"
            />
          </TouchableOpacity>
          <Text className="text-lg font-semibold">Profile Details</Text>
          <View className="w-8" />
        </View>

        {/* Editable Fields */}
        {fields.map((item, index) => (
          <TouchableOpacity
            key={index}
            className="bg-gray-200 rounded-xl p-4 mb-4 flex-row justify-between items-center mt-5"
            onPress={() => openEditModal(index)}
          >
            <View>
              <Text className="text-sm text-gray-500">{item.label}</Text>
              <Text className="text-base text-gray-800">{item.value}</Text>
            </View>
            <PencilIcon size={18} color="#9CA3AF" />
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Sticky Done Button */}
      <View className="absolute bottom-0 left-0 right-0 px-4 pb-6 bg-white">
        <TouchableOpacity className="bg-green-500 rounded-xl py-4">
          <Text className="text-center text-white font-semibold text-base">Done</Text>
        </TouchableOpacity>
      </View>

      {/* Edit Field Modal */}
      <Modal
        visible={showModal}
        transparent
        animationType="slide"
        onRequestClose={() => setShowModal(false)}
      >
        <View className="flex-1 justify-end bg-black/30">
          <View className="bg-white rounded-t-3xl px-6 pt-6 pb-10 h-[40%]">
            <Text className="text-xl font-bold text-slate-800 mb-2">
              Edit {selectedFieldIndex !== null ? fields[selectedFieldIndex].label : ''}
            </Text>
            <TextInput
              value={inputValue}
              onChangeText={setInputValue}
              className="border border-gray-300 rounded-xl p-4 text-base mt-4"
              placeholder="Enter value"
            />

            <TouchableOpacity
              className="bg-green-500 rounded-xl py-4 mt-10"
              onPress={handleSave}
            >
              <Text className="text-center text-white font-semibold text-base">
                Done
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

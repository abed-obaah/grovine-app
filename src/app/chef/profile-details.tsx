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
  CalendarIcon,
  PencilIcon,
  TrashIcon,
  LogOutIcon,
  ChevronRightIcon,
} from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function ProfileDetailsScreen() {
  const navigation = useNavigation();

  const [fields, setFields] = useState([
    { label: 'Account name', value: 'David Okafor' },
    { label: 'Phone number', value: '08130111727' },
    { label: 'Email', value: 'davidokafor@gmail.com' },
  ]);

  const [dateOfBirth, setDateOfBirth] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
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
    <>
      <ScrollView className="flex-1 bg-white px-4 pt-6">
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

        {/* Date of Birth */}
        <TouchableOpacity
          className="bg-gray-200 rounded-xl p-4 mb-4 flex-row justify-between items-center"
          onPress={() => setShowDatePicker(true)}
        >
          <View>
            <Text className="text-sm text-gray-500">Date of birth</Text>
            <Text className="text-base text-gray-800">
              {dateOfBirth ? new Date(dateOfBirth).toDateString() : '-'}
            </Text>
          </View>
          <CalendarIcon size={20} color="#9CA3AF" />
        </TouchableOpacity>

        {showDatePicker && (
          <DateTimePicker
            mode="date"
            display="spinner"
            value={dateOfBirth || new Date()}
            maximumDate={new Date()}
            onChange={(event, selectedDate) => {
              if (event.type === 'set' && selectedDate) {
                setDateOfBirth(selectedDate);
              }
              setShowDatePicker(false); // Close after selection or cancel
            }}
          />
        )}

        {/* Sign out */}
        <TouchableOpacity className="flex-row items-center justify-between py-4 border-b border-gray-200">
          <View className="flex-row items-center space-x-2">
            <LogOutIcon size={18} color="#374151" />
            <Text className="text-base text-gray-700 ml-2">Sign out</Text>
          </View>
          <ChevronRightIcon size={18} color="#9CA3AF" />
        </TouchableOpacity>

        {/* Delete Account */}
        <TouchableOpacity className="flex-row items-center justify-between py-4">
          <View className="flex-row items-center space-x-2">
            <TrashIcon size={18} color="red" />
            <Text className="text-base text-red-600 ml-2">Delete account</Text>
          </View>
          <ChevronRightIcon size={18} color="#9CA3AF" />
        </TouchableOpacity>

        {/* Done Button */}
        <TouchableOpacity className="bg-green-500 rounded-xl py-4 mt-10 mb-6">
          <Text className="text-center text-white font-semibold text-base">Done</Text>
        </TouchableOpacity>
      </ScrollView>

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
    </>
  );
}

import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { CalendarIcon, PencilIcon, TrashIcon, ArrowLeftIcon, LogOutIcon } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';

export default function ProfileDetailsScreen() {
  const navigation = useNavigation();

  return (
    <ScrollView className="flex-1 bg-white px-4 pt-10">
      {/* Header */}
      <View className="flex-row items-center mb-6">
        <TouchableOpacity onPress={() => navigation.goBack()} className="mr-4">
          <ArrowLeftIcon size={24} color="#000" />
        </TouchableOpacity>
        <Text className="text-xl font-semibold">Profile Details</Text>
      </View>

      {/* Form Fields */}
      {[
        { label: 'Account name', value: 'David Okafor' },
        { label: 'Phone number', value: '08130111727' },
        { label: 'Email', value: 'davidokafor@gmail.com' },
      ].map((item, index) => (
        <View key={index} className="bg-gray-100 rounded-xl p-4 mb-4 flex-row justify-between items-center">
          <View>
            <Text className="text-sm text-gray-500">{item.label}</Text>
            <Text className="text-base text-gray-800">{item.value}</Text>
          </View>
          <PencilIcon size={18} color="#9CA3AF" />
        </View>
      ))}

      {/* Date of Birth */}
      <View className="bg-gray-100 rounded-xl p-4 mb-6 flex-row justify-between items-center">
        <View>
          <Text className="text-sm text-gray-500">Date of birth</Text>
          <Text className="text-base text-gray-400">-</Text>
        </View>
        <CalendarIcon size={20} color="#9CA3AF" />
      </View>

      {/* Sign out */}
      <TouchableOpacity className="flex-row items-center justify-between py-4 border-b border-gray-200">
        <View className="flex-row items-center space-x-2">
          <LogOutIcon size={18} color="#374151" />
          <Text className="text-base text-gray-700">Sign out</Text>
        </View>
      </TouchableOpacity>

      {/* Delete Account */}
      <TouchableOpacity className="flex-row items-center justify-between py-4">
        <View className="flex-row items-center space-x-2">
          <TrashIcon size={18} color="red" />
          <Text className="text-base text-red-600">Delete account</Text>
        </View>
      </TouchableOpacity>

      {/* Done Button */}
      <TouchableOpacity className="bg-green-500 rounded-xl py-4 mt-10 mb-6">
        <Text className="text-center text-white font-semibold text-base">Done</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { router } from 'expo-router';

const faqs = [
  {
    question: 'What is Surge Fee?',
    answer: 'A surge fee is a temporary increase in price when demand is high.',
  },
  {
    question: 'What is Service Fee?',
    answer: 'Service fee is a small charge added for maintenance and support.',
  },
  {
    question: 'Refund Policy',
    answer: 'You can request a refund within 7 days of your order.',
  },
  {
    question: 'How do I withdraw the funds in my wallet?',
    answer: 'Go to Wallet > Withdraw, and follow the on-screen instructions.',
  },
];

export default function SupportScreen() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(prev => (prev === index ? null : index));
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} className="px-4 pt-4 pb-28">
        {/* Header */}
        <View className="flex-row items-center mb-6">
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
          <Text className="text-lg font-semibold ml-4">Support</Text>
        </View>

        {/* Greeting */}
        <Text className="text-xl font-semibold mb-1">Hello Craig 👋</Text>
        <Text className="text-lg font-medium mb-6">Where do you need help?</Text>

        {/* FAQ Accordion */}
        <Text className="text-base font-semibold mb-3">Frequently Asked Questions</Text>

        {faqs.map((faq, index) => (
          <View key={index} className="mb-2 border-b border-gray-100">
            <TouchableOpacity
              onPress={() => toggleAccordion(index)}
              className="flex-row justify-between items-center py-3"
            >
              <Text className="text-gray-800 text-base font-medium">{faq.question}</Text>
              <Feather
                name={activeIndex === index ? 'chevron-up' : 'chevron-down'}
                size={20}
                color="#aaa"
              />
            </TouchableOpacity>

            {activeIndex === index && (
              <Text className="text-gray-500 text-sm pb-3">{faq.answer}</Text>
            )}
          </View>
        ))}

        {/* Contact Options */}
        <View className="mt-8">
          <View className="flex-row justify-between items-center mb-6">
            <View>
              <Text className="text-base font-semibold">Send us a message</Text>
              <Text className="text-gray-500 text-sm">We are online now</Text>
            </View>
            <Feather name="send" size={20} color="black" />
          </View>

          <View className="flex-row justify-between items-center mb-12">
            <View>
              <Text className="text-base font-semibold">Send us a mail now</Text>
              <Text className="text-gray-500 text-sm">
                Send us a mail and we will review it
              </Text>
            </View>
            <Feather name="mail" size={20} color="black" />
          </View>
        </View>
      </ScrollView>

      {/* Top Up Button */}
      <View className="absolute bottom-4 left-4 right-4">
        <TouchableOpacity className="bg-green-500 py-4 rounded-lg items-center">
          <Text className="text-white font-semibold text-base">Top Up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

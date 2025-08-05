import Feather from "@expo/vector-icons/Feather";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import type { SubmitHandler } from "react-hook-form";
import { useForm, Controller } from "react-hook-form";
import * as z from "zod";

import {
  Button,
  ControlledInput,
  Text,
  View,
} from "src/ui"; // Adjust if needed
import { Modal, FlatList, TouchableOpacity } from "react-native";
import React from "react";

// ✅ Schema with only fullname and niche
const schema = z.object({
  fullname: z.string({ required_error: "Fullname is required" }),
  niche: z.array(z.string()).min(1, "Please select at least one niche"),
});

export type FormType = z.infer<typeof schema>;

export type RegisterFormProps = {
  onSubmit?: SubmitHandler<FormType>;
};

// ✅ Multi-select Dropdown Component
const ControlledDropdown = ({ control, name, label }) => {
  const [showOptions, setShowOptions] = useState(false);

  const nicheOptions = [
    "Pastry Chef",
    "Grill Master",
    "Home Cooking",
    "Continental",
    "African Delicacies",
  ];

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value = [], onChange }, fieldState: { error } }) => {
        const toggleOption = (option) => {
          if (value.includes(option)) {
            onChange(value.filter((v) => v !== option));
          } else {
            onChange([...value, option]);
          }
        };

        return (
          <View className="mb-4">
            <Text className="text-gray-600 font-medium mb-2">{label}</Text>

            <TouchableOpacity
              className="border border-gray-300 rounded-lg px-4 py-3 flex-row justify-between items-center"
              onPress={() => setShowOptions(true)}
            >
              <Text
                className={`text-base ${
                  value.length > 0 ? "text-black" : "text-gray-400"
                }`}
              >
                {value.length > 0
                  ? value.join(", ")
                  : "Select one or more niches"}
              </Text>
              <Feather name="chevron-down" size={18} color="#6B7280" />
            </TouchableOpacity>

            {error && (
              <Text className="text-red-500 text-sm mt-1">{error.message}</Text>
            )}

            <Modal visible={showOptions} animationType="slide" transparent>
              <TouchableOpacity
                className="flex-1 justify-end bg-black/30"
                onPress={() => setShowOptions(false)}
              >
                <View className="bg-white rounded-t-2xl max-h-[60%] p-4">
                  <Text className="text-lg font-semibold text-slate-800 mb-4">
                    Select Niches
                  </Text>
                  <FlatList
                    data={nicheOptions}
                    keyExtractor={(item) => item}
                    renderItem={({ item }) => {
                      const isSelected = value.includes(item);
                      return (
                        <TouchableOpacity
                          onPress={() => toggleOption(item)}
                          className="flex-row justify-between items-center p-4 border-b border-gray-100"
                        >
                          <Text className="text-base text-slate-800">
                            {item}
                          </Text>
                          {isSelected && (
                            <Feather
                              name="check"
                              size={20}
                              color="#4CAF50"
                            />
                          )}
                        </TouchableOpacity>
                      );
                    }}
                  />
                  <Button
                    label="Done"
                    onPress={() => setShowOptions(false)}
                    className="mt-4"
                  />
                </View>
              </TouchableOpacity>
            </Modal>
          </View>
        );
      }}
    />
  );
};

// ✅ Main Form
export const RegisterForm = ({ onSubmit = () => {} }: RegisterFormProps) => {
  const { handleSubmit, control } = useForm<FormType>({
    resolver: zodResolver(schema),
  });

  return (
    <View className="flex-1 flex gap-[40px]">
      {/* Input Fields */}
      <View className="w-full flex gap-[10px]">
        <ControlledInput
          control={control}
          name="fullname"
          label="Enter chef name"
          placeholder="Enter your fullname"
        />

        <ControlledDropdown
          control={control}
          name="niche"
          label="Select Niches"
        />
      </View>

      {/* Button */}
      <View className="w-full flex gap-4">
        <Button
          testID="register-button"
          label="Create Account"
          onPress={handleSubmit(onSubmit)}
        />
      </View>
    </View>
  );
};

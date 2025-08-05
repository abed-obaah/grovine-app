import {
    RegisterForm,
    type RegisterFormProps,
} from "src/components/chef/register-form";
import { FocusAwareStatusBar, ScrollView, Text, TouchableOpacity, View } from "src/ui";
import { router } from "expo-router";
import React from "react";
import { useNavigation } from '@react-navigation/native';
import {
  SafeAreaView,
  Image,
  StatusBar,
  ImageBackground,
  Modal,
  Pressable
} from 'react-native';

export default function Register() {
     const navigation = useNavigation();
  const onSubmit: RegisterFormProps["onSubmit"] = (data) => {
    console.log("Form submitted with data:", data);
   router.navigate('/chef/');  // or whatever your absolute path is
};

    return (
        <View className="flex-1 bg-white px-4">
            <ScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                bounces={false}
                showsVerticalScrollIndicator={false}
                automaticallyAdjustKeyboardInsets
            >
                <FocusAwareStatusBar />
                 <View className="flex-row items-center justify-between px-4 py-3 border-b border-gray-200">
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                          <Image
                            source={require("@/assets/images/Back.png")}
                            className="w-8 h-8"
                            contentFit="contain"
                          />
                        </TouchableOpacity>
                        {/* <Text className="text-lg font-semibold text-[#4A4A4A]">Wallet</Text> */}
                        <View className="w-8" />
                      </View>
                <View className="flex-1 flex gap-[33px] py-[72px]">
                    <View className="w-full flex gap-[10px]">
                        <Text className="font-gilroyBold text-3xl text-textColor text-left">
                        Create Your Chef
                        </Text>
                        <Text className="font-gilroyBold text-3xl text-textColor text-left">
                        Account.
                        </Text>
                    </View>

                    <RegisterForm onSubmit={onSubmit} />
                </View>
            </ScrollView>
        </View>
    );
}

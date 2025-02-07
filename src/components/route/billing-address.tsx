import {
} from "src/components/route/trip-details";
import { ScreenLayout } from "src/components/screen-layout";
import {Button, Text, View,} from "src/ui";
// import { router } from "expo-router";
import {TextInput} from "react-native";
import { useState } from "react";
import { router } from "expo-router";

export default function Screen() {
    // const [isEnabled, setIsEnabled] = useState(true);
    const [FirstName,setName] = useState(false);
    const [LastName,setLastName] = useState(false);
    const [Address,setAddress] = useState(false);
    const [City,setCity] = useState(false);
    const [Country,setCountry] = useState(false);
    const [Code,setCityCode] = useState(false);
   
   

	return (
		<ScreenLayout useStaticView backgroundColor="#FAF9F6">
                   
                   <View className="border border-[#66708526] rounded-md p-4">
                                <View className="flex-row items-center justify-between">
                                        <Text className="text-textColor font-gilroySemibold text-lg">
                                        Billing address
                                        </Text>
                                      
                                    
                                </View>
                            <View className="mt-4 flex flex-row items-center justify-between w-full border border-gray-300 rounded-lg p-3">
                                            <TextInput
                                                className="flex-1 text-gray-500 font-gilroyRegular"
                                                placeholder="First name"
                                                value={FirstName}
                                                onChangeText={setName}
                                                placeholderTextColor="#667085" />
                            </View>
                            <View className="mt-4 flex flex-row items-center justify-between w-full border border-gray-300 rounded-lg p-3">
                                            <TextInput
                                                className="flex-1 text-gray-500 font-gilroyRegular"
                                                placeholder="Last name"
                                                value={LastName}
                                                onChangeText={setLastName}
                                                placeholderTextColor="#667085" />
                            </View>
                            <View className="mt-4 flex flex-row items-center justify-between w-full border border-gray-300 rounded-lg p-3">
                                            <TextInput
                                                className="flex-1 text-gray-500 font-gilroyRegular"
                                                placeholder="Address line"
                                                value={Address}
                                                onChangeText={setAddress}
                                                placeholderTextColor="#667085" />
                            </View>
                            <View className="mt-4 flex flex-row items-center justify-between w-full border border-gray-300 rounded-lg p-3">
                                            <TextInput
                                                className="flex-1 text-gray-500 font-gilroyRegular"
                                                placeholder="City"
                                                value={City}
                                                onChangeText={setCity}
                                                placeholderTextColor="#667085" />
                            </View>
                            <View className="mt-4 flex flex-row items-center justify-between w-full border border-gray-300 rounded-lg p-3">
                                            <TextInput
                                                className="flex-1 text-gray-500 font-gilroyRegular"
                                                placeholder="Nigeria"
                                                value={Country}
                                                onChangeText={setCountry}
                                                placeholderTextColor="#667085" />
                            </View>
                            <View className="mt-4 flex flex-row items-center justify-between w-full border border-gray-300 rounded-lg p-3">
                                            <TextInput
                                                className="flex-1 text-gray-500 font-gilroyRegular"
                                                placeholder="city code"
                                                value={Code}
                                                onChangeText={setCityCode}
                                                placeholderTextColor="#667085" />
                            </View>

                            <View className="w-40 px-4 py-[20px] flex gap-2 -ml-4">
                                <Button label="Confirm" onPress={() => router.navigate("route/booking-confirmation")} />
                            </View>
                        </View>

		</ScreenLayout>
	);
}

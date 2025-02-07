import { Text, View } from "src/ui";
import { SimpleLineIcons } from "@expo/vector-icons";
import { router } from "expo-router";
// import React from "react";
import { TouchableOpacity } from "react-native";

const RouteScreen: React.FC = () => {
	return (
		<View className="flex-1 bg-white pt-10">
			<View className="bg-white border-b border-gray-300">
				<View className="flex-row items-center justify-between px-5 py-4">
					<TouchableOpacity onPress={() => router.back()}>
						<SimpleLineIcons name="arrow-left" size={20} color="black" />
					</TouchableOpacity>
					<Text className="text-[16px] font-gilroySemibold">Live Tracking</Text>
					<View className="w-6" />
				</View>
			</View>
			<View className="mt-0 flex-1 bg-[#F1F1F1]" />
		</View>
	);
};

export default RouteScreen;

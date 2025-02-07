import { StyleSheet } from "react-native";

import { Header } from "@/components/header";
import { ScreenLayout } from "@/components/screen-layout";
import { RouteDisplay } from "@/components/trip/route-display";
import { VehicleDetailsDisplay } from "@/components/trip/vehicle-details-display";
import { VehicleFeaturesDisplay } from "@/components/trip/vehicle-features-display";
import { Button, HEIGHT, ScrollView, View,Image,Text } from "@/ui";
import { router } from "expo-router";
import React from "react";

export default function Screen() {
	return (
		<ScreenLayout useStaticView backgroundColor="#FDFDFD">
			{/* <View className="pt-[20px]">
				<Header title="Review summary" />
			</View> */}
			<View className="flex flex-row px-4 my-2 items-center justify-between">
						<View className="mt-4">
							<Text className="text-[#4A4A4A] text-lg font-gilroySemibold">Pick Everything You</Text>    
							<Text className="text-[#4A4A4A] text-lg font-gilroySemibold">Love & Need</Text>    
						</View>
			
						<View className="flex-row items-center gap-4 border border-[#E0E5ED] rounded-lg px-2">
								{/* Profile Image */}
								<Image
									source={require("@/assets/images/profile.png")}
									className="w-9 h-9 rounded-full"
								/>
			
								{/* Text Content */}
								<View>
									<Text className="text-sm font-semibold text-gray-800">Your</Text>
									<Text className="text-sm font-semibold text-gray-800">Shopping</Text>
									<Text className="text-sm font-semibold text-gray-800">Assistant</Text>
								</View>
				</View>
						
					</View>

			<ScrollView
				contentContainerStyle={{ flexGrow: 1 }}
				bounces={false}
				showsVerticalScrollIndicator={false}
				automaticallyAdjustKeyboardInsets
			>
				<View className="flex-1">
					<View className="flex-1 gap-6 px-4 py-6">
						<RouteDisplay />

						<VehicleFeaturesDisplay />

						<VehicleDetailsDisplay />
					</View>
				</View>
			</ScrollView>

			<View
				style={styles.shadowBox}
				className="w-full bg-[#F7F7F7] flex justify-center px-[28px] rounded-tl-[15px] rounded-tr-[15px]"
			>
				<Button
					onPress={() => router.navigate("/trip/live")}
					label="Create trip"
					fullWidth
				/>
			</View>
		</ScreenLayout>
	);
}

const styles = StyleSheet.create({
	shadowBox: {
		height: HEIGHT * 0.1162,
		// iOS shadow
		shadowColor: "#0C0C0D",
		shadowOffset: {
			width: 0, // X offset
			height: -2, // Y offset
		},
		shadowOpacity: 0.05, // 5% opacity
		shadowRadius: 4, // Same as Blur
		// Android shadow
		elevation: 4, // Elevation is typically equal to the shadow radius on iOS
	},
});

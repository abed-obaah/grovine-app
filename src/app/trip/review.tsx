import { StyleSheet, TextInput, TouchableOpacity } from "react-native";

import { Header } from "@/components/header";
import { ScreenLayout } from "@/components/screen-layout";
import { RouteDisplay } from "@/components/trip/route-display";
import { VehicleDetailsDisplay } from "@/components/trip/vehicle-details-display";
import { VehicleFeaturesDisplay } from "@/components/trip/vehicle-features-display";
import { Button, HEIGHT, ScrollView, View,Image,Text } from "@/ui";
import { router } from "expo-router";
import React from "react";
import RecommendedMeal from "@/components/rocommendedMeal";


const categories = ["Vegetables",
	"Fruits", 
	"Baby & Kids", 
	];


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
			
						<TouchableOpacity className="flex-row items-center gap-2 bg-[#4CAF50] border border-[#E0E5ED] rounded-lg px-2 py-2"
						onPress={() => router.navigate("/order/index")}>
								{/* Profile Image */}
								<View>
									<Text className="text-xs font-semibold text-[#fff]">View Shopping Cart</Text>
									
								</View>
								<Image
									source={require("@/assets/images/shopping-cart.png")}
									className="w-4 h-4 rounded-full"
								/>
			
								{/* Text Content */}
								
				</TouchableOpacity>
						
					</View>
 <View
							className="border border-[#93939340] bg-[#ffffff] flex flex-row items-center px-2 rounded-lg mx-2"
							style={{ height: 40 }}
							>
							<TextInput
								className="flex-1 font-gilroyRegular text-sm text-textColor"
								placeholder="Search for groceries, recipes etc"
								placeholderTextColor="#667085"
								style={{ height: 36, paddingVertical: 0 }}
							/>

							<Image
								source={require("@/assets/images/search.png")}
								style={{ width: 18, height: 18 }}
								resizeMode="contain"
							/>
					</View>
			<ScrollView
				contentContainerStyle={{ flexGrow: 1 }}
				bounces={false}
				showsVerticalScrollIndicator={false}
				automaticallyAdjustKeyboardInsets
			>
				  <View className="mt-4 flex-row flex-wrap px-2">
									{categories.map((category, index) => (
									<TouchableOpacity key={index} className="border-[#4CAF50] bg-[#4CAF50] border px-6 py-2 rounded-md mb-2 mx-1.5">
										<Text className="text-[#fff] text-xs">{category}</Text>
									</TouchableOpacity>
									))}
								</View>

				<View className="flex-1">
					<View className="flex-1 gap-6 px-4 py-6">
						<RecommendedMeal/>

						{/* <VehicleFeaturesDisplay />

						<VehicleDetailsDisplay /> */}
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

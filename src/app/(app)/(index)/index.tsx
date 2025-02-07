import Feather from "@expo/vector-icons/Feather";

import { Activity } from "@/components/home/activity";
import { CompleteKYC } from "@/components/home/complete-kyc";
import { EarningStat } from "@/components/home/earning-stat";
import { Header } from "@/components/home/header";
import { ReferralLink } from "@/components/home/referral-link";
import { UpcomingTrips } from "@/components/home/upcoming-trips";
import { ScreenLayout } from "@/components/screen-layout";
import ScrollableButtons from "@/components/ScrollableButtons";
import Recommended from "@/components/recomended";
import FruitMeal from "@/components/fruitMeal";
import HorizontalScrollOffers from "@/components/HorizontalScrollOffers";
import { Pressable, ScrollView, View } from "@/ui";
import { router } from "expo-router";
import { StyleSheet, TextInput, Image } from "react-native";
import React from "react";
import { ChocoCard } from "@/components/chococard";
import RecommendedMeal from "@/components/rocommendedMeal";


export default function Screen() {
	return (
		<ScreenLayout
			useStaticView
			floatingComponent={
				<Pressable
					onPress={() => router.navigate("/trip/create")}
					className="w-[50px] h-[50px] rounded-full flex items-center justify-center bg-secondary absolute bottom-[18px] right-[28px]"
				>
					<Feather name="plus" size={24} color="white" />
				</Pressable>
			}
		>
			<View style={styles.shadowBox}>
				<Header />
			</View>
			
			<ScrollView
				contentContainerStyle={{ flexGrow: 1 }}
				bounces={false}
				showsVerticalScrollIndicator={false}
				automaticallyAdjustKeyboardInsets
			>
				<View className="flex-1 gap-6 py-5 pb-[100px]">
				<View
							className="flex-1 h-[44px] border border-[#93939340] bg-[#ffffff] justify-between flex flex-row items-center gap-2 px-2 rounded-lg mx-2"
							>
							<TextInput
								className="flex-1 font-gilroyRegular text-sm text-textColor"
								placeholder="Search for groceries, recipes etc"
								placeholderTextColor="#667085"
							/>

							<Image
								source={require("@/assets/images/search.png")}
								style={{ width: 20, height: 20 }}
								resizeMode="contain"
							/>
							</View>

					<UpcomingTrips />
					<ScrollableButtons/>
					<View className="flex gap-6 px-0">
						<HorizontalScrollOffers/>
						{/* <CompleteKYC /> */}

						{/* <ReferralLink /> */}

						{/* <Activity /> */}

						<Recommended/>
						<FruitMeal/>
						{/* <EarningStat /> */}
						
					</View>
					<ChocoCard/>
					<RecommendedMeal/>
				</View>
				
			</ScrollView>
		</ScreenLayout>
	);
}

const styles = StyleSheet.create({
	shadowBox: {
		width: "100%",
		paddingHorizontal: 16,
		paddingTop: 40,
		paddingBottom: 20,
		shadowColor: "#0C0C0D",
		shadowOffset: {
			width: 0,
			height: 3,
		},
		shadowOpacity: 0.21,
		shadowRadius: 7.68,
		elevation: 3,
		backgroundColor: "white",
		// borderBottomWidth: 0.5,

		// iOS shadow
		// shadowColor: "#0C0C0D",
		// shadowOffset: {
		//   width: 4, // X offset
		//   height: 4, // Y offset
		// },
		// shadowOpacity: 0.05, // 5% opacity
		// shadowRadius: 4, // Same as Blur
		// Android shadow
		// elevation: 4, // Elevation is typically equal to the shadow radius on iOS
	},
});

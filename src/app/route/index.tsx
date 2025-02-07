import AntDesign from "@expo/vector-icons/AntDesign";
import { useState } from "react";

import {
	DepartureDate,
	LocationItem,
	PassengerCounter,
	RouteInputForm,
	RouteType,
} from "src/components/route/route-form";
import { Button, Pressable, ScrollView, Text, View } from "src/ui";
import { router } from "expo-router";
import { ScreenLayout } from "../../components/screen-layout";

export default function Screen() {
	const [selectedType, setSelectedType] = useState("one-way");

	return (
		<ScreenLayout useStaticView backgroundColor="#FAF9F6">
			<View className="w-full px-4 pb-[30px] flex gap-4 bg-white">
				<View className="w-full flex flex-row items-center justify-between pt-[40px] pb-5 relative">
					<Pressable onPress={() => router.back()} className="">
						<AntDesign name="close" size={24} color="black" />
					</Pressable>

					<Text className="text-textColor font-gilroySemibold text-lg">
						Vehicle route
					</Text>

					<View className="w-6 h-6" />
				</View>

				<View className="w-full ">
					<View className="w-full h-[45px] flex flex-row">
						<RouteType
							label="One-way"
							iconSrc={require("../../assets/icons/forward.svg")}
							active={selectedType === "one-way"}
							onPress={() => setSelectedType("one-way")}
						/>

						<RouteType
							label="Round-trip"
							iconSrc={require("../../assets/icons/round.svg")}
							active={selectedType === "round-trip"}
							onPress={() => setSelectedType("round-trip")}
						/>
					</View>

					<View className="w-full flex gap-[10px]">
						<RouteInputForm />

						<DepartureDate />

						<PassengerCounter />
					</View>
				</View>

				<Button
					label="Search"
					style={{ marginTop: 10 }}
					onPress={() => router.navigate("route/route-id")}
				/>
			</View>
			<ScrollView
				contentContainerStyle={{ flexGrow: 1 }}
				showsVerticalScrollIndicator={false}
			>
				<View className="w-full px-4 flex">
					<LocationItem type="my-location" />

					<LocationItem />
					<LocationItem />
					<LocationItem />
					<LocationItem />
				</View>
			</ScrollView>
		</ScreenLayout>
	);
}

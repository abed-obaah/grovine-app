import AntDesign from "@expo/vector-icons/AntDesign";

// import { EmptyRoute } from "@/components/route/empty-route";
import { FilterModal } from "src/components/route/filter-modal";
import { RouteCard } from "src/components/route/route-card";
import { ScreenLayout } from "src/components/screen-layout";
import { Pressable, ScrollView, Text, View } from "src/ui";
import { router } from "expo-router";

export default function Screen() {
	return (
		<ScreenLayout useStaticView backgroundColor="#FAF9F6">
			<View className="w-full px-4 flex gap-4 bg-white">
				<View className="w-full flex flex-row items-center justify-between pt-[40px] pb-5 relative">
					<Pressable onPress={() => router.back()} className="">
						<AntDesign name="left" size={24} color="black" />
					</Pressable>

					<View className="flex-1 flex items-center justify-center">
						<Text className="text-textColor font-gilroySemibold text-lg">
							Wuse, Abuja - Kogi, Lokoja
						</Text>
						<Text className="text-textColor font-gilroyRegular text-sm">
							July 24, 2024
						</Text>
					</View>

					<FilterModal />
				</View>
			</View>

			<ScrollView
				contentContainerStyle={{ flexGrow: 1, padding: 16, gap: 12 }}
				showsVerticalScrollIndicator={false}
			>
				{/* <EmptyRoute /> */}

				<RouteCard label="Mercedes-Benz Tourismo" />
				<RouteCard label="Volvo 9700" />
				<RouteCard label="Mercedes-Benz Tourismo" />
				<RouteCard label="Mercedes-Benz Tourismo" />
			</ScrollView>
		</ScreenLayout>
	);
}

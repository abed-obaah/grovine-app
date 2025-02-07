import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { router } from "expo-router";

import {
	Button,
	FocusAwareStatusBar,
	Image,
	ScrollView,
	Text,
	View,
} from "@/ui";

export default function Screen() {
	return (
		<View className="flex-1 bg-white px-4">
			<ScrollView
				contentContainerStyle={{ flexGrow: 1 }}
				bounces={false}
				showsVerticalScrollIndicator={false}
				automaticallyAdjustKeyboardInsets
			>
				<FocusAwareStatusBar />
				<View className="flex-1 flex gap-[117px] py-[36px] pt-[80px]">
					<View className="w-full flex gap-[45px] items-center justify-center">
						<View className="w-[178px] aspect-square rounded-full flex items-center justify-center bg-[#FD8C0080]/5">
							<View className="w-[98px] aspect-square rounded-full flex items-center justify-center bg-secondary">
								<FontAwesome5 name="check" size={50} color="white" />
							</View>
						</View>

						<View className="w-full flex gap-[10px]">
							<Text className="font-gilroyBold text-2xl text-textColor text-center">
								You have arrived!
							</Text>

							<Text className="font-gilroyRegular text-base text-subTextColor text-center">
								Trip Completed. You’ve arrived at your destination.
							</Text>
						</View>
					</View>

					<View className="w-full flex gap-[45px]">
						<View className="w-full flex gap-[10px]">
							<View className="w-full flex flex-row items-center justify-between">
								<Text className="font-gilroyRegular text-xs text-textColor">
									10:00AM
								</Text>

								<Text className="font-gilroyRegular text-xs text-textColor text-right">
									12:50PM
								</Text>
							</View>

							<View className="w-full flex flex-row items-center justify-between">
								<Text className="font-gilroyMedium text-sm text-textColor">
									Wuse bus station
								</Text>

								<Image
									source={require("@/assets/icons/arrow.svg")}
									className="w-[50px] h-[16px]"
									contentFit="contain"
								/>

								<Text className="font-gilroyMedium text-sm text-textColor text-right">
									Kogi bus station
								</Text>
							</View>

							<View className="w-full flex flex-row items-center justify-between">
								<Text className="font-gilroyRegular text-xs text-textColor">
									10:00AM
								</Text>

								<Text className="font-gilroyMedium text-xs text-textColor">
									2hr 45min
								</Text>

								<Text className="font-gilroyRegular text-xs text-textColor text-right">
									12:50PM
								</Text>
							</View>
						</View>

						<Button
							label="View trip summary"
							onPress={() => {
								// router.dismissAll();
								router.replace("/auth/login");
							}}
						/>
					</View>
				</View>
			</ScrollView>
		</View>
	);
}

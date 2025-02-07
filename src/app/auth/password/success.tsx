import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { router } from "expo-router";

import { Button, FocusAwareStatusBar, ScrollView, Text, View } from "src/ui";

export default function Success() {
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
								Password reset successful
							</Text>

							<Text className="font-gilroyRegular text-base text-subTextColor text-center">
								Awesome! you have successfully updated your password.
							</Text>
						</View>
					</View>

					<Button
						label="Login"
						onPress={() => {
							router.replace("/auth/login");
						}}
					/>
				</View>
			</ScrollView>
		</View>
	);
}

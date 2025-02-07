import {
	Button,
	FocusAwareStatusBar,
	Image,
	ScrollView,
	Text,
	View,
} from "src/ui";
import { router } from "expo-router";

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
				<View className="flex-1 flex items-center gap-[19px] pt-[130px]">
				<View className="flex items-center justify-center">
				<Image
					source={require("../../assets/images/splash.png")}
					contentFit="contain"
					className="w-[300px] h-[120px]"
				/>
			</View>

					<View className="w-full flex gap-[38px]">
						<View className="flex ">
							<Text className="font-gilroyBold text-2xl text-center text-textColor">
							Welcome back
							</Text>

							<Text className="font-gilroyRegular text-base text-center text-subTextColor">
								Login to your account
							</Text>
						</View>

						<View className="w-full flex gap-[10px]">
							<Button
								label="Sign up"
								onPress={() => router.replace("/auth/register")}
							/>

							<Button
								label="Login"
								variant="outline"
								onPress={() => router.replace("/auth/login")}
							/>
						</View>
					</View>
				</View>
			</ScrollView>
		</View>
	);
}

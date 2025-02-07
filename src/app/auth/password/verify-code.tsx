import { router } from "expo-router";
import { useState } from "react";
import OtpTextInput from "react-native-text-input-otp";

import { useTimer } from "src/core";
import {
	Button,
	FocusAwareStatusBar,
	Image,
	Pressable,
	ScrollView,
	Text,
	View,
	colors,
} from "src/ui";

export default function VerifyCode() {
	//   const { email }: { email: string } = useLocalSearchParams();

	const [otp, setOtp] = useState("");
	const [timerValue, setTimerValue] = useState(0); //value is in seconds
	const { seconds } = useTimer({ sec: timerValue });

	return (
		<View className="flex-1 bg-white px-4">
			<ScrollView
				contentContainerStyle={{ flexGrow: 1 }}
				bounces={false}
				showsVerticalScrollIndicator={false}
				automaticallyAdjustKeyboardInsets
			>
				<FocusAwareStatusBar />
				<View className="flex-1 flex gap-[54px] py-[40px]">
					<View className="w-full flex gap-[27px]">
						<View className="w-full flex items-center flex-row gap-4">
							<Pressable
								onPress={() => router.back()}
								className="w-10 h-10 border border-[#66708580] rounded-full flex items-center justify-center"
							>
								<Image
									source={require("../../../assets/icons/arrow-left.svg")}
									contentFit="contain"
									className="w-6 h-6"
								/>
							</Pressable>
						</View>

						<View className="w-full flex gap-[10px]">
							<Text className="font-gilroyBold text-3xl text-textColor text-center">
								Verification Code
							</Text>

							<Text className="font-gilroyRegular text-base text-subTextColor text-center">
								Enter the verification code sent to your phone number to
								continue.
							</Text>
						</View>
					</View>

					<View className="w-full flex flex-row items-center justify-center">
						<View style={{ width: 60 * 4 + 14 * 3 }} className="flex flex-row">
							<OtpTextInput
								otp={otp}
								setOtp={setOtp}
								digits={4}
								style={{
									width: 60,
									aspectRatio: 1,
									borderRadius: 10,
									borderWidth: 1,
									borderColor: "#FD8C0033",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
								}}
								fontStyle={{
									fontSize: 16,
									color: "#000000",
									fontFamily: "Gilroy-SemiBold",
								}}
								focusedStyle={{
									borderColor: colors.primary,
								}}
							/>
						</View>
					</View>

					<View className="w-full flex gap-4">
						<Button
							label="Verify Otp"
							onPress={() => router.navigate("/auth/password/reset")}
						/>

						<View className="w-full flex flex-row flex-wrap items-center">
							<Text className="font-gilroyRegular text-base text-[#667085] relative text-center">
								If you don't find the Otp that we've sent try{" "}
								<Text className="font-gilroyRegular text-base text-secondary relative text-center">
									checking spam
								</Text>
								{Number(seconds) > 0 ? (
									<Text className="font-gilroyRegular text-base text-primary">
										{" 00:"}
										{seconds}secs
									</Text>
								) : (
									<Pressable
										onPress={() => setTimerValue((prev) => prev + 30)}
										style={{ transform: [{ translateY: 3 }] }}
										className="flex flex-row pl-2"
									>
										<Text className="font-gilroyRegular text-base text-primary">
											or send the code again
										</Text>
									</Pressable>
								)}
							</Text>
						</View>
					</View>
				</View>
			</ScrollView>
		</View>
	);
}

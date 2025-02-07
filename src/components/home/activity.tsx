import { Image, Text, View } from "@/ui";

// type Props = {

// };
export const Activity = () => {
	return (
		<View className="w-full flex gap-4">
			<Text className="font-gilroySemibold text-base text-black">
				My activity
			</Text>

			<View className="w-full flex gap-[10px]">
				<View className="w-full h-[84px] rounded-[10px] flex flex-row gap-[10px] items-center px-[16px] bg-[#FD8C001A]">
					<Image
						source={require("@/assets/icons/earnings-active.svg")}
						className="w-[30px] h-[30px]"
						contentFit="contain"
					/>

					<View>
						<Text className="font-gilroySemibold text-lg text-textColor">
							NGN12,000
						</Text>

						<Text className="font-gilroyRegular text-sm text-textColor">
							This week's earnings
						</Text>
					</View>
				</View>

				<View className="w-full flex flex-row gap-[10px]">
					<View className="flex-1 h-[84px] rounded-[10px] flex flex-row gap-[10px] items-center px-[16px] bg-[#FD8C001A]">
						<Image
							source={require("@/assets/icons/earnings-active.svg")}
							className="w-[30px] h-[30px]"
							contentFit="contain"
						/>

						<View>
							<Text className="font-gilroySemibold text-lg text-textColor">
								200
							</Text>

							<Text className="font-gilroyRegular text-sm text-textColor">
								Trips completed
							</Text>
						</View>
					</View>

					<View className="flex-1 h-[84px] rounded-[10px] flex flex-row gap-[10px] items-center px-[16px] bg-[#66708526]">
						<Image
							source={require("@/assets/icons/earnings-active.svg")}
							className="w-[30px] h-[30px]"
							contentFit="contain"
						/>

						<View>
							<Text className="font-gilroySemibold text-lg text-textColor">
								25
							</Text>

							<Text className="font-gilroyRegular text-sm text-textColor">
								Cancelled trips
							</Text>
						</View>
					</View>
				</View>
			</View>
		</View>
	);
};

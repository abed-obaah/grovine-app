import AntDesign from "@expo/vector-icons/AntDesign";

import { Image, ScrollView, Text, View, WIDTH } from "src/ui";

export const ReviewsTab = () => {
	return (
		<View style={{ width: WIDTH }} className="flex-1 bg-white p-4">
			<ScrollView
				contentContainerStyle={{ flexGrow: 1, gap: 20 }}
				showsVerticalScrollIndicator={false}
			>
				<View className="w-full flex gap-[30px]">
					<Text className="text-xs font-gilroyMedium text-subTextColor">
						User Reviews
					</Text>

					<Review />
					<Review />
					<Review />
				</View>
			</ScrollView>
		</View>
	);
};

export const Review = () => {
	return (
		<View className="w-full flex gap-5">
			<View className="w-full flex flex-row justify-between gap-4">
				<View className="flex flex-row items-center gap-[14px]">
					<View className="w-[50px] aspect-square rounded-full overflow-hidden flex items-center justify-center">
						<Image
							source={require("../../assets/images/user.jpg")}
							className="w-full h-full"
							contentFit="cover"
						/>
					</View>

					<View className="flex gap-[6px]">
						<Text className="font-gilroySemibold text-base text-textColor">
							Micheal Adebayo
						</Text>
						<Text className="font-gilroyRegular text-xs text-textColor">
							MichealADE@gmail.com
						</Text>

						<View className="flex flex-row items-end gap-1">
							<Text className="font-gilroyMedium text-xs text-textColor">
								5.0
							</Text>

							<AntDesign name="star" size={20} color="#FDC500" />
							<AntDesign name="star" size={20} color="#FDC500" />
							<AntDesign name="star" size={20} color="#FDC500" />
							<AntDesign name="star" size={20} color="#FDC500" />
							<AntDesign name="star" size={20} color="#FDC500" />
						</View>
					</View>
				</View>

				<Text className="font-gilroyRegular text-sm text-textColor">
					11 month ago
				</Text>
			</View>

			<Text className="font-gilroyMedium text-sm text-textColor">
				John Doe is an experienced driver with over 10 years in the
				transportation industry.
			</Text>
		</View>
	);
};
